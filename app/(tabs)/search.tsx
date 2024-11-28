import { AntDesign, Feather } from '@expo/vector-icons';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { content } from '../../constant/post';
import imageMap from '../../constant/imageMap';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { supabase } from '~/utils/supabase';
import PostImage from '~/components/PostImage';
import { useAuth } from '~/provider/AuthProvider';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { session, user } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);

  // Fix the flatMap implementation to correctly include category ID
  const allPosts = post.map((post) => ({
    ...post,
    kategori: post.category_id
  }));

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePostPress = (postId: number, kategori: string) => {
    router.push({
      pathname: '/berita/[berita]',
      params: { berita: `${postId}` },
    });
    
  };

  const fetchPosts = async () => {
    setIsLoading(true);
    console.log('Fetching posts...');
    try {
      const { data, error } = await supabase
        .from('post')
        .select(`
          *,
          category:category_id (
            id,
            name
          )
        `);
      
      if (error) {
        console.error('Supabase error:', error.message);
        return;
      }
      

      setPost(data);
    } catch (e) {
      console.error('Exception occurred:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBookmarks = async () => {
    if (!session?.user) return;
    setBookmarks([])
    try {
      const { data, error } = await supabase
        .from('bookmark')
        .select('post_id')
        .eq('user_id', user?.id);

      if (error) throw error;
      setBookmarks(data || []);
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    }
  };

  const toggleBookmark = async (postId: any, e: any) => {
    e.stopPropagation(); // Prevent triggering parent onPress
    
    if (!session?.user) {
      // Handle not logged in state - maybe show login prompt
      alert('Please login to bookmark posts');
      return;
    }

    try {
      const isBookmarked = bookmarks.some(b => b.post_id === postId);

      if (isBookmarked) {
        // Remove bookmark
        const { error } = await supabase
          .from('bookmark')
          .delete()
          .eq('user_id', user?.id)
          .eq('post_id', postId);

        if (error) throw error;
        setBookmarks(bookmarks.filter(b => b.post_id !== postId));
      } else {
        // Add bookmark
        const { error } = await supabase
          .from('bookmark')
          .insert({
            user_id: user?.id,
            post_id: postId
          });

        if (error) throw error;
        setBookmarks([...bookmarks, { post_id: postId }]);
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchBookmarks();
  }, [user?.id]);

  return (
    <>
      <SafeAreaView>
        
        <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={()=>{fetchPosts(); fetchBookmarks();}} />}>
          <View className="p-4">
            <View className="mb-4 items-center">
              <Text className="text-2xl font-bold">Mau cari pengumuman apaa?</Text>
            </View>

            <View className="mb-4 flex flex-row items-center">
              <TextInput
                placeholder="Masukkan keyword"
                className="flex-1 rounded-full border px-4 py-3"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="none"
              />
              <TouchableOpacity className="ml-4" onPress={() => setSearchQuery('')}>
                {searchQuery ? (
                  <AntDesign name="close" size={24} />
                ) : (
                  <AntDesign name="search1" size={24} />
                )}
              </TouchableOpacity>
            </View>

            <Text className="mb-4 text-lg font-semibold">
              {searchQuery
                ? `Hasil Pencarian (${filteredPosts.length})`
                : 'Rekomendasi Informasi buat kamu!'}
            </Text>

            <View className="gap-4 space-y-4">
              {isLoading ? (
                // Skeleton loading UI
                [...Array(3)].map((_, index) => (
                  <View key={index} className="rounded-lg bg-white p-4 shadow">
                    <View className="mb-2 h-44 w-full animate-pulse rounded-lg bg-gray-200" />
                    <View className="mb-2 h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                    <View className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  </View>
                ))
              ) : filteredPosts ? (
                filteredPosts.map((post) => (
                  <TouchableOpacity
                    key={`${post.id}`}
                    className="rounded-lg bg-white p-4 shadow"
                    onPress={() => handlePostPress(post.id, post.kategori)}>
                    <View className="relative mb-2 flex flex-row overflow-hidden">
                      <PostImage image={post.image} className="h-44 w-full rounded-lg" />
                      <TouchableOpacity
                        className={`absolute right-0 top-0 rounded-md p-2 ${
                          bookmarks.some(b => b.post_id === post.id)
                            ? 'bg-blue-500'
                            : 'bg-gray-900 opacity-25'
                        }`}
                        onPress={(e) => toggleBookmark(post.id, e)}>
                        <Feather name="bookmark" size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                    <Text className="font-semibold">{post.title}</Text>
                    <Text>
                      {post.description.substring(0, 100)}...
                      <Text className="font-semibold">Read More</Text>
                    </Text>
                  </TouchableOpacity>
                ))
              ) : (
                <View className="items-center py-8">
                  <Text className="text-gray-500">
                    {searchQuery ? 'Tidak ada hasil yang ditemukan' : 'Belum ada informasi'}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//   },
// });
