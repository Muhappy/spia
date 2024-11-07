import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { EXPO_PUBLIC_SUPABASE_KEY } from '@env'

const supabaseUrl = 'https://fmaaddhcukxuzajcocbk.supabase.co'
const supabaseAnonKey = EXPO_PUBLIC_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
