import AppBar from "@/components/AppBar";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

export default function Payment() {
  const [pledge, onChangePledge] = useState("");
  return (
    <ScrollView className=" bg-white">
      <View className=" px-5">
        <Text className=" font-bold text-xl">CRYPTID</Text>
        <View className=" w-full h-[1px] bg-[#A6A7C2] my-3"></View>
        <Text className=" text-[#707181] font-bold text-base">
          Total Pledge
        </Text>
        <TextInput
          placeholder="IDR 150.000,00"
          placeholderTextColor={"#A6A7C2"}
          inputMode="decimal"
          onChangeText={onChangePledge}
          value={pledge}
          className=" w-full h-12 rounded-md my-3 bg-white"
        ></TextInput>
        <Text className=" text-[#707181] font-bold text-base">
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
        </View>
      </View>
    </ScrollView>
  );
}
