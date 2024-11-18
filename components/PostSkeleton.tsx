import { View } from 'react-native';

export default function PostSkeleton() {
  return (
    <View className="mb-4 overflow-hidden animate-pulse">
      <View className="relative mr-4 h-44 w-full rounded-lg bg-gray-200" />
      <View className="py-4">
        <View className="h-4 w-3/4 bg-gray-200 rounded" />
        <View className="h-4 w-full bg-gray-200 rounded mt-2" />
        <View className="h-4 w-1/2 bg-gray-200 rounded mt-2" />
      </View>
    </View>
  );
}