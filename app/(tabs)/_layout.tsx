import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../../constants/colors';

export default function TabLayout() {
  const [focusedTab, setFocusedTab] = useState('index');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
          borderTopColor: COLORS.dark,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        headerShown: false, // Add this to hide header
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => renderIcon('home', color, focused),
        }} 
      />
      <Tabs.Screen 
        name="search" 
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => renderIcon('search', color, focused),
        }} 
      />
      <Tabs.Screen 
        name="cart" 
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => renderIcon('cart', color, focused),
        }} 
      />
      <Tabs.Screen 
        name="account" 
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => renderIcon('person', color, focused),
        }} 
      />
    </Tabs>
  );

  function renderIcon(iconName: string, color: string, focused: boolean) {
    return (
      <View style={styles.iconContainer}>
        {focused && (
          <Animatable.View 
            style={styles.blueHighlight}
            animation="fadeIn"
            duration={300}
          />
        )}
        <Animatable.View
          animation={focused ? 'pulse' : undefined}
          duration={400}
          easing="ease-out"
          iterationCount={focused ? 1 : 0}
        >
          <Ionicons
            name={iconName}
            size={28}
            color={focused ? COLORS.primary : color}
          />
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueHighlight: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 122, 255, 0.2)',
  },
});