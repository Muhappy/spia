import React, { useState } from 'react'
import { Alert, StyleSheet, View, AppState, Text } from 'react-native'
import { supabase } from '~/utils/supabase'
import { Button } from '~/components/Button'
import { Input } from '@rneui/themed'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [fullName, setFullName] = useState('')

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
      
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome To SPIA</Text>
          <Text style={styles.subHeaderText}>Sign in or create an account</Text>
        </View>
        
        <View style={[styles.inputContainer, styles.mt20]}>
          <Input
            label="Full Name"
            leftIcon={{ type: 'font-awesome', name: 'user', color: '#666' }}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder="Enter your full name"
            autoCapitalize={'words'}
            containerStyle={styles.inputContainerStyle}
            labelStyle={styles.inputLabel}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Input
            label="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#666' }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={'none'}
            containerStyle={styles.inputContainerStyle}
            labelStyle={styles.inputLabel}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Input
            label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock', color: '#666' }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={'none'}
            containerStyle={styles.inputContainerStyle}
            labelStyle={styles.inputLabel}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            title="Sign in" 
            disabled={loading} 
            onPress={() => signInWithEmail()}
            style={styles.buttonStyle}
          />
          <Button 
            title="Sign up" 
            disabled={loading} 
            onPress={() => signUpWithEmail()}
            style={[styles.buttonStyle, styles.mt10]}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputContainerStyle: {
    paddingHorizontal: 10,
  },
  inputLabel: {
    color: '#333',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonStyle: {
    borderRadius: 8,
    marginVertical: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
})