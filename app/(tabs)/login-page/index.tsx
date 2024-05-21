import { supabase } from "@/lib/supabase";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [email, onChangeEmail] = useState("");
  const [obscure, onChangeObscure] = useState(true);
  const [password, onChangePassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      return;
    }
    Alert.alert("Login Successful");
    setLoading(false);
  }

  return (
    <SafeAreaView className=" justify-center items-center h-full px-5 bg-[#F9F9F9]">
      <Image
        source={require("../../../assets/images/migro-text.png")}
        className="w-52 h-20 mb-4"
        style={{ resizeMode: "contain" }}
      />
      <Text className=" text-center font-bold text-xl mb-14">
        {"Dreams Funded,\n Rewards Unbounded"}
      </Text>
      <TextInput
        placeholder="Email or Username"
        onChangeText={onChangeEmail}
        value={email}
        className=" border p-3 w-full h-12 rounded-md mb-4 bg-white"
      ></TextInput>
      <View className=" border p-3 w-full h-12 rounded-md relative bg-white">
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
      <TouchableOpacity
        className={`w-full p-3 rounded-3xl items-center justify-center mt-10 ${
          loading ? "bg-[#707181]" : "bg-[#008E8A]"
        }`}
        disabled={loading}
        onPress={() => signInWithEmail()}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className=" text-white">Login</Text>
        )}
      </TouchableOpacity>
      <View className=" flex-row mt-5">
        <Text className=" text-sm">Don’t have an account?</Text>
        <Text className=" text-sm text-[#2E3362] font-bold ml-1 underline">
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
