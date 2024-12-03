/* eslint-disable @typescript-eslint/no-require-imports */
import '../tamagui-web.css'
import { Stack } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { TamaguiProvider } from 'tamagui'
import { useFonts } from 'expo-font'

import { tamaguiConfig } from '../tamagui.config'

export default function RootLayout() {

  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  if (!loaded) {
    return null
  }
  
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name='(public)' />
          <Stack.Screen name='(auth)' />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
