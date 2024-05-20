import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function Register() {
  const [fullname, onChangeFullname] = useState("");
  const [username, onChangeUsername] = useState("");
  const [email, onChangeEmail] = useState("");
  const [obscure, onChangeObscure] = useState(true);
  const [password, onChangePassword] = useState("");
  return (
    <SafeAreaView className=" flex-col justify-center items-center px-5 bg-[#F9F9F9] h-full">
      <Text className=" text-3xl font-bold mb-8">Register</Text>
      <TextInput
        placeholder="Full Name"
        onChangeText={onChangeFullname}
        value={fullname}
        className=" border p-3 w-full h-12 rounded-md mb-4 bg-white"
      ></TextInput>
      <TextInput
        placeholder="Username"
        onChangeText={onChangeUsername}
        value={username}
        className=" border p-3 w-full h-12 rounded-md mb-4 bg-white"
      ></TextInput>
      <TextInput
        placeholder="Email"
        onChangeText={onChangeEmail}
        value={email}
        className=" border p-3 w-full h-12 rounded-md mb-4  bg-white"
      ></TextInput>
      <View className=" border p-3 w-full h-12 rounded-md relative  bg-white">
        <TextInput
          secureTextEntry={obscure}
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
          className=" w-10/12 "
        ></TextInput>
        <View className=" absolute right-5 top-3">
          <Pressable
            onPress={() => {
              onChangeObscure(!obscure);
            }}
          >
            <Ionicons
              name={obscure ? "eye-off" : "eye"}
              size={20}
              color={"black"}
            />
          </Pressable>
        </View>
      </View>
      <TouchableOpacity className=" bg-[#008E8A] w-full p-3 rounded-3xl items-center justify-center mt-10">
        <Text className=" text-white">Register</Text>
      </TouchableOpacity>
      <View className=" flex-row mt-5">
        <Text className=" text-sm">Have an account?</Text>
        <Text className=" text-sm text-[#2E3362] font-bold ml-1 underline">
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
}
