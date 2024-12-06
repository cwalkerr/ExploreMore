import { Stack } from 'expo-router'
import React from 'react'

export default function PublicLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='signup' />
      <Stack.Screen name='login' />
      <Stack.Screen name='forgotPassword' />
    </Stack>
  )
}
