import { View, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProjectCard from '@/components/ProjectCard';

export default function Ended() {
  return (
    <ScrollView className="p-4">
      <View style={{ flex: 1, gap: 12 }}>
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
        />
      </View>
      <SafeAreaView edges={["bottom"]}/>
    </ScrollView>
  );
}