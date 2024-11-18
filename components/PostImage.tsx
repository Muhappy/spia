import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { supabase } from '~/utils/supabase';

export default function PostImage({ image, className }: { image: string; className?: string }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  useEffect(() => {
    if (image) {
      downloadImage(image);
    }
  }, [image]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('image').download(path);
      if (error) {
        throw error;
    }

        const fr = new FileReader();
        fr.readAsDataURL(data);
        fr.onload = () => {
          setImageUrl(fr.result as string);
        };
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error downloading image:', error.message);
      } else {
        console.error('An unknown error occurred while downloading the image');
      }
    }
  }
  return (
    <Image
      source={{ uri: imageUrl ? imageUrl : 'https://via.placeholder.com/150' }}
      resizeMode="cover"
      alt={imageUrl ?? ''}
      className={className}
    />
  );
}
