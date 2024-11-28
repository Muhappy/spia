import { useState, useEffect } from 'react';
import { supabase } from 'utils/supabase';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { Input } from '@rneui/themed';
import { Session } from '@supabase/supabase-js';
import Avatar from './Avatar';
import { Button } from '~/components/Button';

export default function Account({ session }: { session: Session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [full_name, setFullName] = useState('');

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, full_name`)
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setFullName(data.full_name);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    full_name,
  }: {
    full_name: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const updates = {
        id: session?.user.id,
        full_name,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text className='text-2xl font-bold text-gray-800 mb-6'>Account Settings</Text>

      <View style={styles.card}>
        <View style={styles.verticallySpaced}>
          <Input
            label="Full Name"
            value={full_name || ''}
            onChangeText={(text) => setFullName(text)}
            placeholder="Enter your full name"
            labelStyle={styles.inputLabel}
            containerStyle={styles.inputContainer}
          />
        </View>

        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button 
            title={loading ? 'Saving...' : 'Save Changes'}
            onPress={() => updateProfile({full_name})}
            disabled={loading}
          />
        </View>
      </View>

      <View style={[styles.card, styles.mt20]}>
        <Button 
          title="Sign Out" 
          onPress={() => supabase.auth.signOut()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  inputLabel: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
});
