import { AntDesign, Feather } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Button } from '~/components/Button';


export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView className="bg-white">
        <View className="p-4 ">
          <View className="items-center ">
            <Image
              source={{
                uri: 'https://avatar.iran.liara.run/public/boy',
              }}
              resizeMode="contain"
              className="h-[100px] w-[100px] rounded-full "
            />
            <Text className="mt-4 text-xl font-semibold">Selamat Datang Rifko Akbar</Text>
            <Text className="text-center text-lg text-gray-600">Mau cari pengumuman apa?</Text>
          </View>
          <View className="mt-8">
            <Text className="text-lg font-bold">Kategori Pengumuman</Text>
            <View className="mt-4 flex flex-row justify-between ">
              <Link href={{
                pathname: '/(kategori)/[id]',
                params: {id: "beasiswa"}
              }} asChild>
                <Button title='Beasiswa'/>
              </Link>
              <Link  href={{
                pathname: '/(kategori)/[id]',
                params: {id: "event"}
              }} asChild>
                <Button title='Event' />
              </Link>
              <Link href={{
                pathname: '/(kategori)/[id]',
                params: {id: "lomba"}
              }} asChild>
                <Button title='Lomba'/>
              </Link>
              <Link href={{
                pathname: '/(kategori)/[id]',
                params: {id: "yudisium"}
              }} asChild>
                <Button title='Yudisium'/>
              </Link>
            </View>
          </View>
          <View className="mt-8">
            <Text className="text-lg font-bold">Timeline</Text>
            <View className="mt-4">
              <View className="mb-4 overflow-hidden">
              <Image
                  source={require('../../assets/Bea.jpg')}
                  resizeMode="repeat"
                  alt="Festival Pendidikan 2024"
                  className="relative mr-4 h-44 w-full rounded-lg"
                />
                <View className="py-4">
                  <Text className="font-bold">Festival Pendidikan Indonesia</Text>
                  <Text className="text-gray-600">
                    Hello, sobat Mahasiswa, UKM Unsri Mengajar kali ini mengadakan Festival
                    Pendidikan....
                    <Text className="font-bold text-blue-500">Read More</Text>
                  </Text>
                </View>
              </View>
              <View className="mb-4 overflow-hidden">
                <Image
                  source={require('../../assets/fkm.jpg')}
                  resizeMode="repeat"
                  className="h-[200px] w-full "
                />
                <View className="py-4">
                  <Text className="font-bold">Festival Pendidikan Indonesia</Text>
                  <Text className="text-gray-600">
                    Hello, sobat Mahasiswa, UKM Unsri Mengajar kali ini mengadakan Festival
                    Pendidikan....
                    <Text className="font-bold text-blue-500">Read More</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}