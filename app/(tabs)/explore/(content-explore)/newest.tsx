import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Newest() {
  return (
    <View>
      {/* ...other links */}
      <Link href="../details" className='text-black mt-4'>Open Details</Link>
      <Text className='text-black mt-20'>New</Text>
    </View>
  );
}