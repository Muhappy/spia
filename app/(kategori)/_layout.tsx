import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Kategori() {
  return (
    <Stack screenOptions={{
        headerBackTitleVisible:false
    }}>
        <Stack.Screen name='[id]'/>
    </Stack>
  )
}