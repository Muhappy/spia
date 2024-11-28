import { Link, Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';
import { FontAwesome6 } from '@expo/vector-icons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/profile" asChild>
              <FontAwesome6 name='user-circle' size={24} className='mr-4' />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="search" 
        options={{
          title: 'Search', 
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      /> */}
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
        }}
      />
    </Tabs>
  );
}
