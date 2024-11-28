import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '~/provider/AuthProvider';
import { supabase } from '~/utils/supabase';
import PostImage from '~/components/PostImage';



function truncateString(input: string, maxLength: number, suffix: string = '...'): string {
  if (input.length <= maxLength) {
    return input;
  }
  return input.slice(0, maxLength) + suffix;
}

export default function Home() {
  const { session, user } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) {
      fetchBookmarks();
    }
  }, []);

  const fetchBookmarks = async () => {
    setBookmarks([]);
    try {
      const { data, error }:{ data: any, error: any } = await supabase
        .from('bookmark')
        .select(
          `
          *,
          posts:post_id (*)
        `
        )
        .eq('user_id', user?.id);

      if (error) throw error;
      setBookmarks(data || []);
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleBookmark = async (postId: any) => {
    try {
      const existingBookmark = bookmarks.find((b:any) => b.post_id === postId);

      if (existingBookmark) {
        const { error } = await supabase
          .from('bookmark')
          .delete()
          .eq('user_id', user?.id)
          .eq('post_id', postId);

        if (error) throw error;
        setBookmarks(bookmarks.filter((b:any) => b.post_id !== postId));
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      {session ? (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                fetchBookmarks();
                console.log(bookmarks);
              }}
            />
          }>
          <View className="p-4">
            <Text className="mb-4 text-lg font-semibold">
              Berikut Informasi yang Telah Kamu Simpan!
            </Text>
            <View className="gap-4 space-y-4">
              {bookmarks.map((post:any) => (
                <TouchableOpacity onPress={() => router.push(`/berita/${post.posts.id}`)} key={post.id} className="rounded-lg bg-white p-4 shadow">
                  <View className="relative mb-2 flex flex-row">
                    <PostImage
                      image={post.posts.image}
                      className="relative mr-4 h-44 w-full rounded-lg"
                    />
                    <TouchableOpacity
                      onPress={() => toggleBookmark(post.posts.id)}
                      className={`absolute right-0 top-0 rounded-md p-2 ${
                        bookmarks.some((b:any) => b.post_id === post.posts.id)
                          ? 'bg-blue-500'
                          : 'bg-gray-900 opacity-25'
                      }`}>
                      <Feather name="bookmark" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                  <Text className="font-semibold">{post.title}</Text>
                  <Text>
                    {truncateString(post.posts.description, 80)} <Text className="font-semibold">Read More</Text>
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View className="h-screen flex-1 items-center justify-center">
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
