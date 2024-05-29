import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

const dummy = [
  {
    url: "../../../../assets/images/banner.jpg",
    desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
  },
  {
    url: "../../../../assets/images/banner.jpg",
    desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
  },
  {
    url: "../../../../assets/images/banner.jpg",
    desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
  },
  {
    url: "../../../../assets/images/banner.jpg",
    desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
  },
  {
    url: "../../../../assets/images/banner.jpg",
    desc: "Here’s a sneak-peek from the first chapter of CRYPTID.",
  },
];

export default function Campaign() {
  return (
    <ScrollView>
      <View className=" px-5 pt-7 bg-white pb-12">
        {dummy.map((data, index) => (
          <View
            key={index.toString()}
            className="w-full mb-6 flex-col items-center justify-center"
          >
            <Image
              source={require("../../../../assets/images/banner.jpg")}
              style={{
                resizeMode: "cover",
                height: 300,
                width: "100%",
                borderRadius: 16,
              }}
            />
            <Text className=" text-[#707181] mt-1">
              Here’s a sneak-peek from the first chapter of CRYPTID.
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
