import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "@/components/ProjectCard";
import BoxPhotoInput from "@/components/BoxPhotoInput";
import { TextInput } from "react-native-paper";
import { Link } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { useState } from "react";

export default function CreateOverview() {
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false)
  return (
    <ScrollView className="p-4 min-h-screen">
      <SafeAreaView edges={["bottom"]}>
        <View style={{ flex: 1, gap: 16 }}>
          <Text className="text-[20px] font-bold text-black">Overview</Text>
          <BoxPhotoInput />
          <TextInput
            mode="outlined"
            placeholder="Description"
            style={{ flexGrow: 1 }}
            contentStyle={{ height: 52 }}
            outlineStyle={{ height: 52 }}
          />
          <View className=" flex-row items-center justify-start">
            <Image
              className=" rounded-full object-cover w-10 h-10"
              source={require("@/assets/images/logo-org.png")}
            />
            <View className=" h-12 flex-1">
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className=" text-black ml-2 mt-4 text-xs"
              >
                Owner
              </Text>
            </View>
          </View>
          <TextInput
            mode="outlined"
            placeholder="Category"
            style={{ flexGrow: 1 }}
            contentStyle={{ height: 52 }}
            outlineStyle={{ height: 52 }}
          />
            <TextInput
              mode="outlined"
              placeholder="Target"
              style={{ flexGrow: 1 }}
              contentStyle={{ height: 52 }}
              outlineStyle={{ height: 52, }}
              right={<TextInput.Affix text="IDR" textStyle={{fontSize: 16, color: "#000000"}}/>}
            />
          <TextInput
            mode="outlined"
            placeholder="Deadline"
            onPress={() => setCalendarVisible(!calendarVisible)}
            editable={false}
            style={{ flexGrow: 1 }}
            contentStyle={{ height: 52 }}
            outlineStyle={{ height: 52, }}
            right={
              <TextInput.Icon
                icon={"calendar"}
              />
            }
          />
          <View className={`${calendarVisible ? "block" : "hidden"} w-full bg-white`}>
            <CalendarPicker headerWrapperStyle={{paddingHorizontal: 20}}/>
          </View>
          <View className="flex flex-row items-center justify-end gap-4">
            <Link
              href={"./create-campaign"}
              style={{ fontSize: 16, fontWeight: "700" }}
            >
              SKIP
            </Link>
            <Link
              href={"./create-campaign"}
              style={{ fontSize: 16, fontWeight: "700" }}
            >
              NEXT
            </Link>
          </View>
        </View>
        <View className="h-56">

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
