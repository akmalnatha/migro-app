import AppBar from "@/components/AppBar";
import { Backers, Project } from "@/constants/Types";
import { PaymentContext } from "@/context/PaymentContext";
import { supabase } from "@/lib/supabase";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";

export default function Payment() {
  const { payment } = useContext(PaymentContext);
  const { paymentID } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [project, setProject] = useState<Project>();
  const [pledge, onChangePledge] = useState(0);

  useEffect(() => {
    onChangePledge(payment);
  }, [payment]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select(
            `
            id,
            name,
            category,
            created_at,
            description,
            owner,
            backers,
            target_funding,
            deadline_date,
            overview_image,
            current_funding,
            is_recommended
          `
          )
          .eq("id", paymentID)
          .single();

        if (error) {
          console.error(error);
        } else {
          setProject({ ...data, is_wishlisted: false });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, []);

  const handleAddPayment = async () => {
    try {
      const user = (await supabase.auth.getUser()).data.user;
  
      if (!user) {
        Alert.alert("User not authenticated");
        return;
      }
  
      // Insert the new pledge into the 'backers' table
      const { error: insertError } = await supabase.from("backers").insert({
        project_id: paymentID,
        user_id: user.id,
        total_pledge: payment,
      });
  
      if (insertError) {
        Alert.alert(insertError.message);
        return;
      }
  
      // Retrieve the updated current_funding for the project
      const { data: projectData, error: fetchError } = await supabase
        .from("projects")
        .select("current_funding")
        .eq("id", paymentID)
        .single();
  
      if (fetchError || !projectData) {
        Alert.alert(fetchError ? fetchError.message : "Failed to fetch project data");
        return;
      }
  
      const updatedFunding = projectData.current_funding + payment;
  
      // Update the current_funding in the 'projects' table
      const { error: updateError } = await supabase
        .from("projects")
        .update({ current_funding: updatedFunding })
        .eq("id", paymentID);
  
      if (updateError) {
        Alert.alert(updateError.message);
      } else {
        Alert.alert("Payment Success");
        router.replace("(tabs)/explore");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("An unexpected error occurred");
    }
  };
  return (
    <ScrollView className=" bg-white">
      <View className=" px-5">
        <Text className=" font-bold text-xl">{project?.name}</Text>
        <View className=" w-full h-[1px] bg-[#A6A7C2] my-3"></View>
        <Text className=" text-[#707181] font-bold text-base">
          Total Pledge
        </Text>
        <TextInput
          placeholder="Total Pledge"
          placeholderTextColor={"#A6A7C2"}
          inputMode="decimal"
          disabled
          value={`Rp ${pledge.toLocaleString()}`}
          className=" w-full h-12 rounded-md my-3 bg-white"
        ></TextInput>
        <TouchableOpacity
          className={`p-3 rounded-3xl items-center justify-center bg-[#008E8A]`}
          onPress={handleAddPayment}
        >
          <Text className="text-white">Pay</Text>
        </TouchableOpacity>
        {/* <Text className=" text-[#707181] font-bold text-base">
          Choose Payment Method
        </Text>
        <View className="mt-4 flex-row justify-between border-[0.2px] p-3 border-[#707181] rounded-xl items-center">
          <View className=" flex-row items-center">
            <Image
              className="w-[40px] h-[28px] mr-2"
              style={{ resizeMode: "contain" }}
              source={require("@/assets/images/mastercard.png")}
            />
            <Text className=" font-semibold">VISA / MASTERCARD</Text>
          </View>
          <AntDesign name="right" size={16} />
        </View>
        <View className="mt-4 flex-row justify-between border-[0.2px] p-3 border-[#707181] rounded-xl items-center">
          <View className=" flex-row items-center">
            <Image
              className="w-[40px] h-[28px] mr-2"
              style={{ resizeMode: "contain" }}
              source={require("@/assets/images/bca.png")}
            />
            <Text className=" font-semibold">BANK BCA</Text>
          </View>
          <AntDesign name="right" size={16} />
        </View> */}
      </View>
    </ScrollView>
  );
}
