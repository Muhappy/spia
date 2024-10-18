import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { content } from '~/constant/post'; // Sesuaikan dengan struktur folder Anda
import { FontAwesome } from '@expo/vector-icons';
import imageMap from '~/constant/imageMap';

export default function Berita() {
  const { berita, kategori } = useLocalSearchParams();

  const filteredPost = content.filter((item) => item.id === kategori).flatMap((item) => item.posts);
  const selectedPost = filteredPost.filter((item) => item.id.toString() === berita);

  return (
    <>
      <Stack.Screen options={{ title: `${selectedPost[0].title}` }} />
      <ScrollView >
        {selectedPost.map((item, index) => {
          return (
            <View key={index}>
              <View style={styles.profileHeader}>
                <ImageBackground
                  source={imageMap[item.image]}
                  style={styles.coverPhoto}
                  resizeMode='cover'
                  className='-z-10'
                />
                <View  className=' flex justify-end py-10 pl-4 absolute bg-black/60 w-full h-full -z-10'>
                  <Text style={styles.date}>{item.startDate}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.author}>By: Universitas Sriwijaya</Text>
                </View>
              </View>

              <View style={styles.content}>
                <View className="px-4">
                  <Text style={styles.heading}>DESKRIPSI</Text>
                  <Text style={styles.description}>
                    {item.desc}{' '}
                  </Text>
                </View>
                <View className="absolute inset-1 -top-5 -z-10 h-full w-full rounded-xl bg-[#f3f4f6]"></View>
              </View>
            </View>
          );
        })}
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
});
