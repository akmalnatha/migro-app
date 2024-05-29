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
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore-first"
          onPress={() => router.push("/(tabs)/explore/(project-detail)")}
        />
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
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