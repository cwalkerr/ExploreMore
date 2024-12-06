import { Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' />
      <Stack.Screen name='(profile)' />
      <Stack.Screen name='create' />
    </Stack>
  )
}
