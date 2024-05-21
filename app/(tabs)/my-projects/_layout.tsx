import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function MyProjectLayout() {
  return (
    <Stack screenOptions={{headerShadowVisible: false}}>
        <Stack.Screen name='(content)'/>
        <Stack.Screen name='details' options={{headerTitle: "Details"}}/>
    </Stack>
    // <View>
    //   <Text className='text-white mt-8'>About</Text>
    //   {/* ...other links */}
    //   <Link href="/user/bacon" className='text-white mt-4'>View user</Link>
    // </View>
  );
}