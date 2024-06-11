import { Campaign, Project } from "@/constants/Types";
import { supabase } from "@/lib/supabase";
import { usePathname, useLocalSearchParams, useRouter, useGlobalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

// const dummy = [
//   {
//     url: "../../../../assets/images/banner.jpg",
//     desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
//   },
//   {
//     url: "../../../../assets/images/banner.jpg",
//     desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
//   },
//   {
//     url: "../../../../assets/images/banner.jpg",
//     desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
//   },
//   {
//     url: "../../../../assets/images/banner.jpg",
//     desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
//   },
//   {
//     url: "../../../../assets/images/banner.jpg",
//     desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
//   },
// ];

export default function CampaignPage() {
  const pathname = usePathname()
  console.log(pathname)
  const { projectId } = useGlobalSearchParams()
  console.log(projectId)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [campaign, setCampaign] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const { data, error } = await supabase
          .from("campaigns")
          .select(`
            id,
            project_id,
            image,
            description
          `)
          .eq("project_id", projectId);

        if (error) {
          console.error(error);
          setCampaign([])
        } else {
          setCampaign(data as unknown as Campaign[]); 
          console.log(data)
        }
      } catch (error) {
        console.error(error);
        console.log("nice")
      }
    };

    fetchCampaign();
  }, []);
  return (
    <ScrollView className="px-5 pt-7 bg-white pb-12">
        {campaign.map((data, index) => (
          <View
            key={index.toString()}
            className="w-full mb-6 flex-col items-center justify-center"
          >
            <Image
              source={{uri: data.image}}
              style={{
                resizeMode: "cover",
                height: 300,
                width: "100%",
                borderRadius: 16,
              }}
            />
            <Text className=" text-[#707181] mt-1">
              {data.description}
            </Text>
          </View>
        ))}
    </ScrollView>
  );
}
