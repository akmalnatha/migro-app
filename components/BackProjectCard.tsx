import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Divider, Text } from "react-native-paper";

interface BackProjectCardProps {
  cost: string;
  title: string;
  description: string;
  benefits?: string;
}

export default function BackProjectCard({
  cost,
  title,
  description,
  benefits,
}: BackProjectCardProps) {
  const router = useRouter();
  return (
    <View
      style={{
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 0 },
      }}
      className={`w-[358px] h-fit bg-[#F9FAF5] rounded-[16px] flex gap-5 p-5`}
    >
      <Text className="font-bold text-[20px]">{cost}</Text>
      <Text className="font-bold text-[20px]">{title}</Text>
      <Text className="text-[16px]">{description}</Text>
      <Divider />
      {benefits && (
        <>
          <Text className="font-bold text-[16px]">Benefits</Text>
          <Text className="text-[16px]">{benefits}</Text>
          <Divider />
        </>
      )}
      <TouchableOpacity
        className={`p-3 rounded-3xl items-center justify-center bg-[#008E8A]`}
        onPress={() => router.push("/(tabs)/explore/payment/index")}
      >
        <Text className="text-white">Pay</Text>
      </TouchableOpacity>
    </View>
  );
}
