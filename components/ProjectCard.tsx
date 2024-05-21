import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ProjectCardProps {
  bannerImageUrl: string;
  projectTitle: string;
  projectDesc: string;
  organization: string;
  category: string;
  isWishlist: boolean;
  backers: number;
  daysToGo: number;
  isProjectDetail: boolean;
  isFeaturedProject: boolean;
  isExploreCard: boolean;
}

export default function ProjectCard({
  bannerImageUrl,
  projectTitle,
  projectDesc,
  organization,
  category,
  isWishlist,
  backers,
  daysToGo,
  isProjectDetail,
  isFeaturedProject,
  isExploreCard,
}: ProjectCardProps) {
  const [wishlist, setWishlist] = useState(isWishlist);

  const handleWishlistToggle = () => {
    setWishlist(!wishlist);
  };
  return isProjectDetail ? (
    // Project Detail
    <View className="">
      <Image
        source={require("../assets/images/banner.jpg")}
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
            {organization}
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
  ) : isFeaturedProject ? (
    // Featured Project Card di HOME PAGE dan EXPLORE PAGE
    <View style={styles.featuredProjectCard}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/banner.jpg")}
          style={styles.banner}
        />
        <TouchableOpacity
          style={styles.wishlist}
          onPress={handleWishlistToggle}
        >
          <Ionicons
            name={wishlist ? "heart" : "heart-outline"}
            size={24}
            color={wishlist ? "red" : "black"}
          />
        </TouchableOpacity>
        <View className=" bg-[#49CCB4] rounded-xl flex-row items-center justify-start absolute right-2 bottom-3 p-1">
          <Ionicons name={"time-outline"} size={24} color={"white"} />
          <Text className=" text-white ml-1">{daysToGo} day(s)</Text>
        </View>
      </View>
      <View className=" flex-row items-center justify-between mt-4 mb-2 mx-3 flex-wrap">
        <View className=" flex-row items-center justify-start">
          <Text className=" text-black font-bold text-xl">{projectTitle}</Text>
        </View>
        <View className=" flex-row items-center justify-start gap-2">
          <Ionicons
            name={"pricetag-outline"}
            size={20}
            color={"black"}
            style={styles.categoryIcon}
          />
          <Text>{category}</Text>
        </View>
      </View>
      {!isExploreCard ? <Text className=" mx-3">{organization}</Text> : <></>}
      {/* Progress Bar Indicator */}
      {!isExploreCard ? (
        <View className="flex-row items-center justify-start my-3 mx-3">
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
      ) : (
        <></>
      )}
    </View>
  ) : (
    <View className=" w-full bg-white rounded-2xl flex-row overflow-hidden pr-2">
      <View className=" relative">
        <Image
          source={require("../assets/images/banner.jpg")}
          style={styles.cardImage}
        />
        <TouchableOpacity
          onPress={handleWishlistToggle}
          style={styles.wishlistCard}
        >
          <Ionicons
            // style={styles.wishlistCard}
            name={wishlist ? "heart" : "heart-outline"}
            size={20}
            color={wishlist ? "red" : "black"}
          />
        </TouchableOpacity>
        {/* Progress Bar Indicator */}
        <View className=" bg-[#49CCB4] rounded-xl flex-row items-center justify-start absolute left-2 bottom-3 p-1">
          {/* Progress Bar Indicator */}
          <Ionicons name={"time-outline"} size={18} color={"white"} />
          <Text className=" text-white ml-1 text-[10px]">
            {daysToGo} day(s)
          </Text>
        </View>
      </View>
      {/* elipsis */}
      <View className=" ml-2 flex-col flex-1 py-3">
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className=" font-bold text-base"
        >
          {projectTitle}
        </Text>
        <View className=" flex-row items-center justify-start gap-2 mb-6">
          <Ionicons
            name={"pricetag-outline"}
            size={20}
            color={"#707181"}
            style={styles.categoryIcon}
          />
          <Text className=" text-gray-500 ">{category}</Text>
        </View>
        <View className=" bg-[#49CCB4] h-2 w-full"></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  featuredProjectCard: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    margin: 12,
    paddingBottom: 16,
    marginTop: 44,
    borderRadius: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: -30 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
  },
  // Style Container untuk sementara aja
  container: {
    margin: 12,
    marginTop: 44,
  },
  imageContainer: {
    position: "relative",
  },
  banner: {
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 160,
    resizeMode: "cover",
  },
  wishlist: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "white",
    borderRadius: 9999,
    padding: 4,
  },
  wishlistCard: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "white",
    borderRadius: 9999,
    padding: 4,
  },
  cardImage: {
    width: 124,
    height: 108,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
  text: {
    color: "black",
    marginLeft: 8,
    marginTop: 16,
    fontWeight: "bold",
    fontSize: 20,
  },
  categoryIcon: { transform: [{ scaleX: -1 }] },
});
