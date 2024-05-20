import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [email, onChangeEmail] = useState("");
  const [obscure, onChangeObscure] = useState(true);
  const [password, onChangePassword] = useState("");
  return (
    <SafeAreaView className=" justify-center items-center pt-14 px-5">
      <Image
        source={require("../../../assets/images/migro-text.png")}
        className="w-52 h-20 mb-4"
        style={{ resizeMode: "contain" }}
      />
      <Text className=" text-center font-bold text-xl mb-20">
        {"Dreams Funded,\n Rewards Unbounded"}
      </Text>
      <TextInput
        placeholder="Email or Username"
        onChangeText={onChangeEmail}
        value={email}
        className=" border p-3 w-full h-12 rounded-md mb-4"
      ></TextInput>
      <View className=" border p-3 w-full h-12 rounded-md relative">
        <TextInput
          secureTextEntry={obscure}
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
          className=" w-10/12"
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
      <Text className=" mt-2 text-right w-full text-[#2E3362]">
        Forgot your password?
      </Text>
      <TouchableOpacity className=" bg-[#008E8A] w-full p-3 rounded-3xl items-center justify-center mt-6">
        <Text className=" text-white">Log In</Text>
      </TouchableOpacity>
      <View className=" flex-row mt-5">
        <Text className=" text-xs">Don’t have an account?</Text>
        <Text className=" text-xs text-[#2E3362] font-bold ml-1 underline">
          Register here
        </Text>
      </View>
      {/* <Image
        source={require("../../../assets/images/bottom-login.png")}
        className="w-52 h-20 mb-4"
        style={{ resizeMode: "contain" }}
      /> */}
    </SafeAreaView>
  );
}
