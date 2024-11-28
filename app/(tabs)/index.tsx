import { AntDesign, Feather } from '@expo/vector-icons';
import { Link, router, Stack } from 'expo-router';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Button } from '~/components/Button';
import { useAuth } from '~/provider/AuthProvider';
import { useEffect, useState } from 'react';
import { supabase } from '~/utils/supabase';
import PostImage from '~/components/PostImage';

export default function Home() {
  const { profile, session } = useAuth();
  const [posts, setPosts] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);

      if (error) {
        throw error;
      }

      const fr = new FileReader();
      fr.readAsDataURL(data);
      fr.onload = () => {
        setAvatarUrl(fr.result as string);
      };
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message);
      }
    }
  }
  useEffect(() => {
    if (profile?.avatar_url) downloadImage(profile?.avatar_url);
  }, [profile?.avatar_url]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      // Get total count of posts
      const { count } = await supabase.from('post').select('*', { count: 'exact', head: true });

      // Generate random offset
      const randomOffset = Math.floor(Math.random() * (count ?? 0));

      // Fetch posts with random offset
      const { data, error }:{data:any, error:any} = await supabase
        .from('post')
        .select(
          `
          *,
          category:category_id (
            id,
            name
          )
        `
        )
        .range(randomOffset, randomOffset + 4) // Get 5 posts starting from random offset
        .limit(5);

      if (error) {
        console.error('Supabase error:', error.message);
        return;
      }

      setPosts(data);
    } catch (e) {
      console.error('Exception occurred:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts().finally(() => setRefreshing(false));
  };

  const PostSkeleton = () => (
    <View className="mb-4 animate-pulse overflow-hidden">
      <View className="relative mr-4 h-44 w-full rounded-lg bg-gray-200" />
      <View className="py-4">
        <View className="h-4 w-3/4 rounded bg-gray-200" />
        <View className="mt-2 h-4 w-full rounded bg-gray-200" />
        <View className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        className="bg-white">
        <View className="p-4 ">
          {session ? (
            <View className="items-center ">
              <Image
                source={{
                  uri: avatarUrl ?? 'https://avatar.iran.liara.run/public/boy',
                }}
                resizeMode="cover"
                className="h-[100px] w-[100px] rounded-full "
              />
              <Text className="mt-4 text-xl font-semibold">
                Selamat Datang
                <Text className="font-bold uppercase"> {profile?.full_name ?? 'User'}</Text>
              </Text>
              <Text className="text-center text-lg text-gray-600">
                Temukan pengumuman yang kamu butuhkan di sini!
              </Text>
            </View>
          ) : (
            <View className="items-center">
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
          <View className="mt-8">
            <Text className="text-lg font-bold">Kategori Pengumuman</Text>
            <View className="mt-4 flex flex-row justify-between ">
              <Link
                href={{
                  pathname: '/(kategori)/[id]',
                  params: { id: 1 },
                }}
                asChild>
                <Button title="Beasiswa" />
              </Link>
              <Link
                href={{
                  pathname: '/(kategori)/[id]',
                  params: { id: 2 },
                }}
                asChild>
                <Button title="Event" />
              </Link>
              <Link
                href={{
                  pathname: '/(kategori)/[id]',
                  params: { id: 3 },
                }}
                asChild>
                <Button title="Lomba" />
              </Link>
              <Link
                href={{
                  pathname: '/(kategori)/[id]',
                  params: { id: 4 },
                }}
                asChild>
                <Button title="Yudisium" />
              </Link>
            </View>
          </View>
          <View className="mt-8">
            <Text className="text-lg font-bold">Timeline</Text>
            <View className="mt-4">
              {loading ? (
                <>
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                </>
              ) : (
                posts.map((post: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      router.push({
                        pathname: '/berita/[berita]',
                        params: { berita: `${post.id}` },
                      });
                    }} key={post.id} >
                    <View className="mb-4 overflow-hidden">
                      <PostImage
                        image={post.image}
                        className="relative mr-4 h-44 w-full rounded-lg"
                      />
                      <View className="py-4">
                        <Text className="font-bold">{post.title}</Text>
                        <Text className="text-gray-600">
                          {post.description.substring(0, 100)}...
                          <Text className="font-bold text-blue-500">Read More</Text>
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
