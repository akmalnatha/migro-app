import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { supabase } from "@/lib/supabase";

export default function EditProfile() {
  const [fullname, onChangeFullname] = useState("");
  const [username, onChangeUsername] = useState("");
  const [email, onChangeEmail] = useState("");
  const [obscure, onChangeObscure] = useState(true);
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("id, full_name, username, avatar_url")
          .eq("id", (await supabase.auth.getUser()).data.user?.id)
          .single();

        if (error) {
          console.error(error);
        } else {
          onChangeFullname(data.full_name);
          onChangeUsername(data.username);
          setImage(data.avatar_url);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()

        if (error) {
          console.error(error);
        } else {
          onChangeEmail(data.user.email!);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className=" pt-20 flex-col items-center bg-[#F9F9F9] h-full px-5">
      {/* Profile photo */}
      <Pressable onPress={pickImage}>
        <View className="w-32 relative rounded-full mb-8">
          <Image
            source={
              image ? { uri: image } : require("@/assets/images/profile.png")
            }
            className=" w-32 h-32 rounded-full"
          />
          <Ionicons
            name={"add-circle"}
            size={40}
            color={"#008E8A"}
            style={styles.addIcon}
          />
        </View>
      </Pressable>
      {/* Profile photo */}
      <TextInput
        onChangeText={onChangeUsername}
        value={username}
        className=" w-full bg-white mb-2"
        outlineColor={"#79747E"}
        activeOutlineColor="#008E8A"
        mode="outlined"
        label="Username"
        placeholder="Username"
        right={<TextInput.Affix />}
      />
      <TextInput
        onChangeText={onChangeFullname}
        value={fullname}
        className=" w-full bg-white mb-2"
        outlineColor={"#79747E"}
        activeOutlineColor="#008E8A"
        mode="outlined"
        label="Full Name"
        placeholder="Full Name"
        right={<TextInput.Affix />}
      />
      <TextInput
        onChangeText={onChangeEmail}
        value={email}
        className=" w-full bg-white mb-2"
        outlineColor={"#79747E"}
        activeOutlineColor="#008E8A"
        mode="outlined"
        label="Email"
        placeholder="Email"
        right={<TextInput.Affix />}
      />
      <TextInput
        secureTextEntry={obscure}
        onChangeText={onChangePassword}
        value={password}
        className=" w-full bg-white mb-2"
        outlineColor={"#79747E"}
        activeOutlineColor="#008E8A"
        mode="outlined"
        label="Password"
        placeholder="Password"
        right={
          <TextInput.Icon
            icon={obscure ? "eye-off" : "eye"}
            onPress={() => {
              onChangeObscure(!obscure);
            }}
          />
        }
      />
      <TextInput
        secureTextEntry={obscure}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        className=" w-full bg-white mb-2"
        outlineColor={"#79747E"}
        activeOutlineColor="#008E8A"
        mode="outlined"
        label="Confirm Password"
        placeholder="Confirm Password"
        right={
          <TextInput.Icon
            icon={obscure ? "eye-off" : "eye"}
            onPress={() => {
              onChangeObscure(!obscure);
            }}
          />
        }
      />
      <TouchableOpacity className=" bg-[#008E8A] w-full p-3 rounded-3xl items-center justify-center mt-4">
        <Text className=" text-white">Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  photo: {
    resizeMode: "cover",
  },
  addIcon: {
    position: "absolute",
    bottom: 2,
    right: 2,
    borderRadius: 9999,
  },
});
