import { supabase } from "@/lib/supabase";
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
  Alert,
  ActivityIndicator,
} from "react-native";

export default function Register() {
  const [fullname, onChangeFullname] = useState("");
  const [username, onChangeUsername] = useState("");
  const [email, onChangeEmail] = useState("");
  const [obscure, onChangeObscure] = useState(true);
  const [password, onChangePassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullname.length === 0 || username.length === 0 || email.length === 0) {
      Alert.alert("Data can't be null");
      return;
    }

    if (!emailPattern.test(email)) {
      Alert.alert("Invalid email format");
      return;
    }

    setLoading(true);

    // Cek username exist
    const { data: existingUser, error: checkError } = await supabase
      .from("profiles")
      .select("id")
      .eq("username", username)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      Alert.alert(checkError.message);
      setLoading(false);
      return;
    }

    if (existingUser) {
      Alert.alert("Username already exists");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
      return;
    }

    const session = data?.session;

    if (session) {
      const dataUser = {
        id: session.user.id,
        username,
        full_name: fullname,
        updated_at: new Date(),
      };

      const { error: errorDataUser } = await supabase
        .from("profiles")
        .upsert(dataUser);

      if (errorDataUser) {
        Alert.alert(errorDataUser.message);
        setLoading(false);
        return;
      } else {
        Alert.alert("Registration Successful!");
      }
    } else {
      Alert.alert("Session null");
    }
    setLoading(false);
  }

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
      <TouchableOpacity
        className={`w-full p-3 rounded-3xl items-center justify-center mt-10 ${
          loading ? "bg-[#707181]" : "bg-[#008E8A]"
        }`}
        disabled={loading}
        onPress={() => signUpWithEmail()}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className=" text-white">Register</Text>
        )}
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
