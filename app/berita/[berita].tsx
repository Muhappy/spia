import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { supabase } from '~/utils/supabase';
import PostImage from '~/components/PostImage';

export default function Berita() {
  const { berita } = useLocalSearchParams();
  const [selectedPost, setSelectedPost] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  async function fetchPost() {
    try {
      const { data, error }:{data:any, error:any} = await supabase.from('post').select('*').eq('id', berita).single();
      if (error) throw error;
      setSelectedPost(data || []);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPost();
  }, [berita]);

  if (loading) {
    return (
      <ScrollView>
        <View style={styles.profileHeader}>
          <View style={[styles.coverPhoto, styles.skeleton]} />
          <View className="absolute bottom-0 w-full bg-black/60 p-4">
            <View style={[styles.skeleton, { height: 12, width: '30%', marginBottom: 8 }]} />
            <View style={[styles.skeleton, { height: 24, width: '80%', marginBottom: 8 }]} />
            <View style={[styles.skeleton, { height: 14, width: '40%' }]} />
          </View>
        </View>

        <View style={styles.content}>
          <View className="px-4">
            <View style={[styles.skeleton, { height: 20, width: '40%', marginBottom: 10 }]} />
            <View style={[styles.skeleton, { height: 16, width: '100%', marginBottom: 8 }]} />
            <View style={[styles.skeleton, { height: 16, width: '90%', marginBottom: 8 }]} />
            <View style={[styles.skeleton, { height: 16, width: '95%' }]} />
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: `${selectedPost.title}` }} />
      <ScrollView>
        <View>
          <View style={styles.profileHeader}>
            {/* <ImageBackground
                  source={imageMap[item.image]}
                  style={styles.coverPhoto}
                  resizeMode='cover'
                  className='-z-10'
                /> */}
            <PostImage image={selectedPost.image} className="-z-10 h-[300px] w-full" />
            <View className=" absolute -z-10 flex h-full w-full justify-end bg-black/60 py-10 pl-4">
              <Text style={styles.date}>
                {new Date(selectedPost.created_at).toLocaleDateString()}
              </Text>
              <Text style={styles.title}>{selectedPost.title}</Text>
              <Text style={styles.author}>{selectedPost.created_by}</Text>
            </View>
          </View>

          <View style={styles.content}>
            <View className="px-4">
              <Text style={styles.heading}>DESKRIPSI</Text>
              <Text style={styles.description}>{selectedPost.description} </Text>
            </View>
            <View className="absolute inset-0 -top-5 -z-10 h-full w-full rounded-xl bg-[#f3f4f6]"></View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  coverPhoto: {
    height: 300,
    width: '100%',
  },
  profileImageContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  iconLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  iconRight: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  textOverlay: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 40,
    left: 16,
  },
  date: {
    color: 'white',
    fontSize: 12,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  author: {
    color: 'white',
    fontSize: 14,
  },
  content: {
    // padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#4a4a4a',
    marginBottom: 10,
  },
  highlight: {
    color: '#1d4ed8',
  },
  skeleton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
    animation: 'pulse 1.5s infinite',
  },
});
