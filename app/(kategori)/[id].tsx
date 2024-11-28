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
import { supabase } from '~/utils/supabase';
import { useEffect, useState } from 'react';
import imageMap from 'constant/imageMap';
import PostImage from '~/components/PostImage';
import PostImageBackground from '~/components/PostImageBackground';

export default function Kategori() {
  const { id } = useLocalSearchParams();


  const [category, setCategory] = useState<any>([]);
  const [filteredPosts, setFilteredPosts] = useState<any>([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error }:{data: any, error:any} = await supabase.from('post').select('*').eq('category_id', id);

      if (error) {
        console.error('Error fetching posts:', error);
        return;
      }
      setFilteredPosts(data || []);
    }
    async function fetchCategory() {
      const { data, error }:{data: any, error:any} = await supabase.from('category').select('*').eq('id', id).single();
      if (error) {
        console.error('Error fetching posts:', error);
        return;
      }
      setCategory(data || []);
    }

    fetchCategory();
    fetchPosts();
  }, [id]);
 

  function truncateString(input: string, maxLength: number, suffix: string = '...'): string {
    if (input.length <= maxLength) {
      return input;
    }
    return input.slice(0, maxLength) + suffix;
  }

  // Sort posts by date in descending order
  const sortedPosts = [...filteredPosts]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  return (
    <>
      <Stack.Screen options={{ title: `KATEGORI ${category.name ? category.name.toUpperCase() : ''}` }} />
      <View className="p-4">
        <FlatList
          data={filteredPosts}
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
                <PostImageBackground
                  image={item.image}
                  className="my-5 h-[200px] w-[300px] overflow-hidden rounded-lg shadow-lg shadow-black/40">
                  <View className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-black/60 p-4">
                    <Text className="text-lg font-bold text-white">{item.title}</Text>
                    <Text className="text-sm text-white">
                      {truncateString(item.description, 50)}
                    </Text>
                    <View className="mt-2 flex flex-row justify-between">
                      <Text className="text-sm font-bold text-white">{item.created_by}</Text>
                      <Text className="text-sm font-bold text-white">
                        {new Date(item.created_at).toLocaleDateString()}
                      </Text>
                    </View>
                  </View>
                </PostImageBackground>
              </TouchableOpacity>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          horizontal
          keyExtractor={(item) => item.id.toString()}
        />

        <Text className="mb-4 text-lg font-bold">Latest Post</Text>
        <View className="space-y-4">
          {sortedPosts.map((post) => (
            <TouchableOpacity
              key={post.id}
              onPress={() => {
                router.push({
                  pathname: '/berita/[berita]',
                  params: { berita: `${post.id}` },
                });
              }}>
              <View
                key={post.id}
                className="mb-4 flex flex-row items-center rounded-lg bg-gray-100 p-4 shadow-lg">
                <PostImage image={post.image} className="h-16 w-16 rounded-lg" />
                <View className="ml-4 flex-1">
                  <Text className="text-md font-bold">{post.title}</Text>
                  <Text className="text-sm text-gray-500">{post.startDate}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}
