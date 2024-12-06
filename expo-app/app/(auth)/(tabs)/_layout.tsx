import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name='search1' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='trips'
        options={{
          title: 'My Trips',
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name='pushpino' color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
