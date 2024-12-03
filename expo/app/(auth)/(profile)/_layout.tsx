import { Stack } from 'expo-router'
import React from 'react'

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name='profile' />
      <Stack.Screen name='preferences' />
    </Stack>
  )
}
