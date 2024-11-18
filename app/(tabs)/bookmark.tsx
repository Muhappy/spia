import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '~/provider/AuthProvider';

export default function Home() {
  const { session } = useAuth();
  return (
    <SafeAreaView className="flex-1">
      {session ? (
        <ScrollView>
          <View className="p-4">
            <Text className="mb-4 text-lg font-semibold">
              Berikut Informasi yang Telah Kamu Simpan!
            </Text>
            <View className="gap-4 space-y-4">
              <View className="rounded-lg bg-white p-4 shadow">
                <View className="relative mb-2 flex flex-row">
                  <Image
                    source={require('../../assets/Bea.jpg')}
                    resizeMode="repeat"
                    alt="Festival Pendidikan 2024"
                    className="relative mr-4 h-44 w-full rounded-lg"
                  />
                  <TouchableOpacity className="absolute right-0 top-0 rounded-md bg-gray-900 p-2 opacity-25">
                    <Feather name="bookmark" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                <Text className="font-semibold">Festival Pendidikan Indonesia</Text>
                <Text>
                  Hello, sobat Mahasiswa, UKM Unsri Mengajar kali ini mengadakan Festival
                  Pendidikan...... <Text className="font-semibold">Read More</Text>
                </Text>
              </View>

              <View className="rounded-lg bg-white p-4 shadow">
                <View className="relative mb-2 flex flex-row overflow-hidden">
                  <Image
                    resizeMode="repeat"
                    source={require('../../assets/fkm.jpg')}
                    alt="Festival Pendidikan 2024"
                    className="relative mr-4 h-44 w-full rounded-lg"
                  />
                  <TouchableOpacity className="absolute right-0 top-0 rounded-md bg-gray-900 p-2 opacity-25">
                    <Feather name="bookmark" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                <Text className="font-semibold">Festival Pendidikan Indonesia</Text>
                <Text>
                  Hello, sobat Mahasiswa, UKM Unsri Mengajar kali ini mengadakan Festival
                  Pendidikan...... <Text className="font-semibold">Read More</Text>
                </Text>
              </View>

              <View className="rounded-lg bg-white p-4 shadow">
                <View className="relative mb-2 flex flex-row overflow-hidden">
                  <Image
                    resizeMode="repeat"
                    source={require('../../assets/bi.jpg')}
                    alt="Festival Pendidikan 2024"
                    className="relative mr-4 h-44 w-full rounded-lg"
                  />
                  <TouchableOpacity className="absolute right-0 top-0 rounded-md bg-gray-900 p-2 opacity-25">
                    <Feather name="bookmark" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                <Text className="font-semibold">Festival Pendidikan Indonesia</Text>
                <Text>
                  Hello, sobat Mahasiswa, UKM Unsri Mengajar kali ini mengadakan Festival
                  Pendidikan...... <Text className="font-semibold">Read More</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 h-screen items-center justify-center">
          <Text className="mt-4 text-xl font-semibold">
            Harap login terlebih dahulu {''}
            <Link href="/profile" className="font-bold text-blue-500 ">
              disini
            </Link>
          </Text>
          <Text className="text-center text-lg text-gray-600">
            Untuk mengakses semua fitur aplikasi
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//   },
// });
