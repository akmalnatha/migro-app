import BackProjectCard from "@/components/BackProjectCard";
import ProjectCard from "@/components/ProjectCard";
import { Backings } from "@/constants/Types";
import { PaymentContext } from "@/context/PaymentContext";
import { supabase } from "@/lib/supabase";
import {
  useGlobalSearchParams,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  ListRenderItem,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Overview() {
  const {setPayment} = useContext(PaymentContext)
  const { backProjectID } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [backproject, setBackProject] = useState<Backings[]>([]);
  useEffect(() => {
    const fetchBackProject = async () => {
      try {
        const { data, error } = await supabase
          .from("backings")
          .select(
            `
            id,
            project_id,
            created_at,
            price,
            title,
            description,
            benefit
          `
          )
          .eq("project_id", backProjectID);
        console.log(data);

        if (error) {
          console.error(error);
        } else {
          setBackProject(data as unknown as Backings[]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBackProject();
  }, []);

  const renderBackProjects: ListRenderItem<Backings> = ({ item, index }) => (
    <View className={index != 0 ? "ml-8" : "ml-4"}>
      <BackProjectCard
        key={index}
        cost={`Rp ${item.price.toLocaleString()}`}
        title={item.title}
        description={item.description}
        benefits={item?.benefit}
        onPress={() => {router.push(`/(tabs)/explore/payment/${backProjectID}`); setPayment(item.price)}}
      />
    </View>
  );
  return (
    <ScrollView className="w-screen">
      <FlatList
        data={backproject}
        renderItem={renderBackProjects}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 32 }}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={true}
      />
      {/* <View style={{flexDirection: "row", gap: 32}}>
            {backproject.map((item: any, index: number) => {
              return(  
                <BackProjectCard
                key={index}
                cost={`Rp ${item.price.toLocaleString()}`}
                title={item.title}
                description={item.description}
                benefits={item?.benefit}
                onPress={() => router.push(`/(tabs)/explore/payment/${backProjectID}`)}
                />
              )
            })} */}
      {/* <BackProjectCard
              cost={"50.000"}
              title={"SIGNED PHYSICAL COPY OF THE BOOK"}
              description={"You will get the special edition hard-cover of the book with a signature and special figurine of the characters."}
              benefits={
                `- Special Edition Hard-Cover Copy\n- Signature\n- Hand-crafted FIgurine`
              }
              onPress={() => router.push("/(tabs)/explore/payment")}
              />
            <BackProjectCard
              cost={"100.000"}
              title={"SIGNED PHYSICAL COPY OF THE BOOK"}
              description={"You will get the special edition hard-cover of the book with a signature and special figurine of the characters."}
              benefits={
                `- Special Edition Hard-Cover Copy\n - Signature\n - Hand-crafted FIgurine`
              }
              onPress={() => router.push("/(tabs)/explore/payment")}
            /> */}
      {/* </View> */}
    </ScrollView>
  );
}
