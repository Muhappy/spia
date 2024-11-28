// import { TurboModuleRegistry } from 'react-native';
import AuthProvider from '~/provider/AuthProvider';
import '../global.css';

import { Stack,  } from 'expo-router';


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {

  return (
    <AuthProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name='(kategori)' options={{headerShown:false, presentation:'card'}}/>
      <Stack.Screen name='berita/[berita]' options={{presentation:"modal"}}/>
      {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
      <Stack.Screen name="profile" options={{  presentation: 'modal', headerShown:false, headerTintColor:"black",}} />
    </Stack>
    </AuthProvider>
  );
}
