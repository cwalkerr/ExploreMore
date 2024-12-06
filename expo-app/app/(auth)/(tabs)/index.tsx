// landing page
import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function Home() {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href='signup'>Signup</Link>
    </View>
  )
}
