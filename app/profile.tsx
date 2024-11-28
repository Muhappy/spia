import React, {  useState } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { supabase } from '~/utils/supabase';
import Account from '~/components/Account';
import Auth from '~/components/Auth';
import { useAuth } from '~/provider/AuthProvider';
import Avatar from '~/components/Avatar';

export default function Profile() {
  const { session, profile, user } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url);
  const [loading, setLoading] = useState(true);

  async function updateProfile({ avatar_url }: { avatar_url: string }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const updates = {
        id: session?.user.id,
        avatar_url,
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
  return session && session.user ? (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='flex-1'>
      <View className='flex-1 bg-gray-50'>
        <View style={styles.profileHeader}>
          <View style={styles.coverPhoto}>
        
          </View>
          
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <Avatar
                size={120}
                url={avatarUrl}
                onUpload={(url: string) => {
                  setAvatarUrl(url);
                  updateProfile({ avatar_url: url });
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text className='text-2xl font-bold capitalize text-white' style={styles.profileName}>
                {profile?.full_name || 'Set your name'}
              </Text>
              <Text className='text-base text-gray-100' style={styles.profileDetails}>
                {user?.email}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Account session={session} />
        </View>
      </View>
    </KeyboardAvoidingView>
  ) : (
    <Auth />
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    width: '100%',
    backgroundColor: '#3B82F6', // Menggunakan warna blue-500
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  coverPhoto: {
    height: 120,
    width: '100%',
    backgroundColor: '#2563EB', // Warna blue-600 untuk variasi
    position: 'absolute',
    top: 0,
  },
  avatarContainer: {
    marginTop: 60,
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 999,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
  },
  profileName: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  profileDetails: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    opacity: 0.95,
    letterSpacing: 0.3,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F9FAFB', // gray-50
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingTop: 20,
  },
});
