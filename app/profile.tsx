// Profile.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { supabase } from '~/utils/supabase';
import Account from '~/components/Account';
import Auth from '~/components/Auth';
import { Session } from '@supabase/supabase-js';

export default function Profile() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}

// interface OptionItemProps {
//   icon: any,
//   text: string
// }

// const OptionItem = ({ icon, text, }:OptionItemProps) => (
//   <TouchableOpacity style={styles.optionItem}>
//     <View style={styles.optionLeft}>
//       <FontAwesome name={icon} type="font-awesome-5" size={16} />
//       <Text style={styles.optionText}>{text}</Text>
//     </View>
//   </TouchableOpacity>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  profileHeader: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  coverPhoto: {
    height: 150,
    width: '100%',
  },
  profileImageContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  editIcon: {
    position: 'absolute',
    bottom: 3,
    right: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileInfo: {
    marginTop: 50,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileDetails: {
    color: '#6B7280',
  },
  optionContainer: {
    width: '90%',
    marginTop: 20,
  },
  optionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  optionRightText: {
    color: '#3B82F6',
  },
});
