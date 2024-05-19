import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProjectCard() {
  var isWishlist = true;
  var isVerified = true;
  var isProjectDetail = false;
  var isFeaturedProject = true;
  return isProjectDetail ? (
    // Project Detail
    <View className=" m-3 mt-11">
      <Image
        source={require("../assets/images/banner.jpg")}
        className=" w-full rounded-2xl h-52 object-cover"
      />
      <View className=" flex-row items-center justify-start mt-4">
        <Text className=" text-black font-bold text-xl">CRYPTID</Text>
        {isVerified ? (
          <Ionicons
            style={styles.verified}
            name={"checkmark-circle"}
            size={24}
            color={"green"}
          />
        ) : (
          <></>
        )}
      </View>
      <View className=" flex-row items-center justify-start my-3">
        <Image
          className=" rounded-full object-cover w-10 h-10"
          source={require("../assets/images/logo-org.png")}
        />
        <View className=" h-12">
          <Text className=" text-black ml-2 mt-4 text-xs">by ONE</Text>
        </View>
      </View>
      <Text className=" mb-4 text-justify">
        "Cryptid" follows a team of unlikely heroes as they navigate a world
        where myths and legends are real. Set against the backdrop of a hidden
        society of cryptids, creatures thought to be merely folklore, the comic
        explores themes of acceptance, identity, and the blurred lines between
        the natural and supernatural worlds. As the team unravels mysteries and
        confronts ancient evils, they must also confront their own inner demons,
        forging bonds that transcend species and facing threats that challenge
        the very fabric of reality.
      </Text>
      {/* Progress Bar Indicator */}
      <View className="flex-row items-center justify-start my-3">
        <Image
          className=" rounded-full object-cover w-5 h-5 mr-2"
          source={require("../assets/images/backers-icon.png")}
        />
        <Text>76 backers</Text>
        <Image
          className=" rounded-full object-cover w-5 h-5 ml-6 mr-2"
          source={require("../assets/images/clock.png")}
        />
        <Text>12 day(s) to go</Text>
      </View>
    </View>
  ) : isFeaturedProject ? (
    // Featured Project Card di Home Page
    <View style={styles.featuredProjectCard}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/banner.jpg")}
          style={styles.banner}
        />
        <Ionicons
          style={styles.wishlist}
          name={isWishlist ? "heart" : "heart-outline"}
          size={24}
          color={isWishlist ? "red" : "black"}
        />
        <View className=" flex-row items-center justify-between mt-4 mb-2 mx-3">
          <View className=" flex-row items-center justify-start">
            <Text className=" text-black font-bold text-xl">CRYPTID</Text>
            {isVerified ? (
              <Ionicons
                style={styles.verified}
                name={"checkmark-circle"}
                size={24}
                color={"green"}
              />
            ) : (
              <></>
            )}
          </View>
          <View className=" flex-row items-center justify-start gap-2">
            <Ionicons
              name={"pricetag-outline"}
              size={20}
              color={"black"}
              style={styles.categoryIcon}
            />
            <Text>Comic & Illustration</Text>
          </View>
        </View>
        <Text className=" mx-3">ONE</Text>
        {/* Progress Bar Indicator */}
        <View className="flex-row items-center justify-start my-3 mx-3">
          <Image
            className="w-5 h-5 mr-2"
            source={require("../assets/images/backers-icon.png")}
          />
          <Text>76 backers</Text>
          <Image
            className="w-5 h-5 ml-6 mr-2"
            source={require("../assets/images/clock.png")}
          />
          <Text>12 day(s) to go</Text>
        </View>
      </View>
    </View>
  ) : (
    <View></View>
  );
}

const styles = StyleSheet.create({
  featuredProjectCard: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    margin: 12,
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
  verified: { marginLeft: 12 },
  text: {
    color: "black",
    marginLeft: 8,
    marginTop: 16,
    fontWeight: "bold",
    fontSize: 20,
  },
  categoryIcon: { transform: [{ scaleX: -1 }] },
});
