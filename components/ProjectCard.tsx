import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ProjectCardProps {
  bannerImageUrl?: string;
  projectTitle: string;
  projectDesc: string;
  owner: string;
  category: string;
  isWishlist: boolean;
  backers: number;
  daysToGo: number;
  type?: "featured" | "explore" | "explore-first";
  isProjectDetail?: boolean;
  onPress?: (e: GestureResponderEvent) => void
}

export default function ProjectCard({
  bannerImageUrl,
  projectTitle,
  projectDesc,
  owner,
  category,
  isWishlist,
  backers,
  daysToGo,
  type = "featured",
  isProjectDetail = false,
  onPress
}: ProjectCardProps) {
  const [wishlist, setWishlist] = useState(isWishlist);

  const handleWishlistToggle = () => {
    setWishlist(!wishlist);
  };
  return isProjectDetail ? (
    <View className=" m-3 mt-11">
      <Image
        source={
          bannerImageUrl
            ? { uri: bannerImageUrl }
            : { uri: "https://picsum.photos/id/66/800/800" }
        }
        className=" w-full rounded-2xl h-52 object-cover"
      />
      <Text className=" text-black font-bold text-xl mt-2">{projectTitle}</Text>
      <View className=" flex-row items-center justify-start my-3">
        <Image
          className=" rounded-full object-cover w-10 h-10"
          source={require("../assets/images/logo-org.png")}
        />
        <View className=" h-12 flex-1">
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className=" text-black ml-2 mt-4 text-xs"
          >
            {owner}
          </Text>
        </View>
      </View>
      <Text className=" mb-4 text-justify">{projectDesc}</Text>
      {/* Progress Bar Indicator */}
      <View className="flex-row items-center justify-start my-3 flex-wrap gap-3">
        <View className=" flex-row items-center justify-start">
          <Image
            className=" rounded-full object-cover w-5 h-5 mr-1"
            source={require("../assets/images/backers-icon.png")}
          />
          <Text numberOfLines={2} ellipsizeMode="tail">
            {backers} backers
          </Text>
        </View>
        <View className=" flex-row items-center justify-start">
          <Image
            className=" rounded-full object-cover w-5 h-5 mr-1"
            source={require("../assets/images/clock.png")}
          />
          <Text numberOfLines={2} ellipsizeMode="tail">
            {daysToGo} day(s) to go
          </Text>
        </View>
      </View>
    </View>
  ) : (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{ shadowColor: "#000000", shadowOpacity: 0.25, shadowRadius: 4, shadowOffset: {width: 0, height: 0}}}
        className={`bg-[#F9FAF5] rounded-[16px] flex ${
          type == "explore" ? "flex-row" : "flex-col"
        }`}
      >
        <View className={`${type == "explore" ? "w-[35%]" : "w-full"} relative`}>
          <Image
            source={
            bannerImageUrl
              ? { uri: bannerImageUrl }
              : { uri: "https://picsum.photos/id/66/800/800" }
          }
            className={`w-full ${
              type == "explore"
                ? "h-[100px] rounded-l-[16px]"
                : "h-[140px] rounded-t-[16px]"
            } object-cover`}
          />
          <TouchableOpacity
            className={`rounded-full absolute ${
              type == "explore" ? "top-2 left-2" : "top-3 right-3"
            } bg-white p-1`}
            onPress={handleWishlistToggle}
          >
            <Ionicons
              name={wishlist ? "heart" : "heart-outline"}
              size={type == "explore" ? 20 : 24}
              color={wishlist ? "red" : "black"}
            />
          </TouchableOpacity>
          <View
            className={` ${
              type == "featured"
                ? "hidden"
                : type == "explore-first"
                ? "bottom-3 right-3"
                : "block bottom-2 left-2"
            } bg-[#49CCB4] rounded-[4px] flex-row items-center justify-start absolute bottom-3 p-1`}
          >
            <Ionicons name={"time-outline"} size={16} color={"white"} />
            <Text className=" text-white text-[12px] ml-1">
              {daysToGo} day(s)
            </Text>
          </View>
        </View>
        <View
          className={`${type == "explore" ? "grow" : "w-full"} flex gap-3 p-3`}
        >
          <View className="flex-row items-center justify-between flex-wrap">
            <Text className=" text-black font-bold text-[20px]">
              {projectTitle}
            </Text>
            <View className=" flex-row items-center justify-start gap-2">
              <Ionicons
                name={"pricetag-outline"}
                size={20}
                color={"black"}
                style={{ transform: [{ scaleX: -1 }] }}
              />
              <Text>{category}</Text>
            </View>
          </View>
          {type != "explore" ? <Text className=" mx-3">{owner}</Text> : <></>}
          {/* Progress Bar Indicator */}
          <View
            className={`${
              type == "featured" ? "flex" : "hidden"
            } flex-row items-center justify-start`}
          >
            <Image
              className="w-5 h-5 mr-2"
              source={require("../assets/images/backers-icon.png")}
            />
            <Text>{backers} backers</Text>
            <Image
              className="w-5 h-5 ml-6 mr-2"
              source={require("../assets/images/clock.png")}
            />
            <Text>{daysToGo} day(s) to go</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
