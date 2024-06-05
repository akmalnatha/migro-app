import { View, Text, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import ProjectCard from '@/components/ProjectCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function All() {
  const router = useRouter();
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
          type="explore-first"
          onPress={() => router.push("/(tabs)/explore/(project-detail)")}
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
      </View>
      <SafeAreaView edges={["bottom"]}/>
    </ScrollView>
  );
}