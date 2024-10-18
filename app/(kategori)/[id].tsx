import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import { Link, router, Stack, useLocalSearchParams } from 'expo-router';
import { content } from 'constant/post';
import imageMap from 'constant/imageMap';

export default function Kategori() {
  const { id } = useLocalSearchParams();

  const fileteredPost = content.filter((item) => item.id === id).flatMap((item) => item.posts);
  function truncateString(input: string, maxLength: number, suffix: string = '...'): string {
    if (input.length <= maxLength) {
      return input;
    }
    return input.slice(0, maxLength) + suffix;
  }
  return (
    <>
      <Stack.Screen options={{ title: `KATEGORI ${id.toString().toUpperCase()}` }} />
      <View className="p-4">
        <FlatList
          data={fileteredPost}
          renderItem={({ item }) => (
            <View className="m-5">
              <TouchableOpacity
                className="relative"
                onPress={() => {
                  router.push({
                    pathname: '/berita/[berita]',
                    params: { berita: `${item.id}`, kategori: `${id}` },
                  });
                }}>
                <ImageBackground
                  source={imageMap[item.image]}
                  className="my-5 h-[200px] w-[300px] overflow-hidden rounded-lg shadow-lg shadow-black/40"
                  resizeMode="cover">
                  <View className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-black/60 p-4">
                    <Text className="text-lg font-bold text-white">{item.title}</Text>
                    <Text className="text-sm text-white">{truncateString(item.desc, 50)}</Text>
                    <View className="mt-2 flex flex-row justify-between">
                      <Text className="text-sm font-bold text-white">{item.startDate}</Text>
                      <Text className="text-sm font-bold text-white">{item.endDate}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          horizontal
          keyExtractor={(item) => item.id.toString()}
        />

        <Text className="mb-4 text-lg font-bold">Latest Beasiswa</Text>
        <View className="space-y-4">
          {fileteredPost.map((beasiswa) => (
            <TouchableOpacity
              onPress={() => {
                router.push({
                  pathname: '/berita/[berita]',
                  params: { berita: `${beasiswa.id}`, kategori: `${id}` },
                });
              }}>
              <View
                key={beasiswa.id}
                className="mb-4 flex flex-row items-center rounded-lg bg-gray-100 p-4 shadow-lg">
                <Image source={imageMap[beasiswa.image]} className="h-16 w-16 rounded-lg" />
                <View className="ml-4 flex-1">
                  <Text className="text-md font-bold">{beasiswa.title}</Text>
                  <Text className="text-sm text-gray-500">{beasiswa.startDate}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}
