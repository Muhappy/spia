import React, { useState } from 'react'
import { Alert, StyleSheet, View, AppState, Platform } from 'react-native'
import { supabase } from 'utils/supabase'
import { Button, Input } from '@rneui/themed'
import axios from 'utils/axios'
import { loadUser, login } from '~/services/AuthServices'


export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({})

  async function signInWithEmail() {
    setErrorMessage({})
    setLoading(true)
    try {
      await login( {
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`,
      })
      
      const user = await loadUser()
      console.log(user)
      
    } catch (e: any) {
      if (e.response?.status === 422) {
        setErrorMessage(e.response.data.errors)
      }
      
    }
    
    setLoading(false)
  }

  // async function signUpWithEmail() {
  //   setLoading(true)
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   })

  //   if (error) Alert.alert(error.message)
  //   if (!session) Alert.alert('Please check your inbox for email verification!')
  //   setLoading(false)
  // }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          errorMessage={errorMessage.email}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
          errorMessage={errorMessage.password}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
      </View>
      {/* <View style={styles.verticallySpaced}> */}
        {/* <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} /> */}
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})