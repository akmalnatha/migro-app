import { ScrollView, View } from "react-native";
import {
  Chip,
  IconButton,
  Menu,
  PaperProvider,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function All() {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <PaperProvider>
      <SafeAreaView style={{backgroundColor: "#FFFFFF"}}>
        <View
          style={{
            display: "flex",
            gap: 8,
            paddingHorizontal: 16,
            paddingBottom: 8,
            backgroundColor: "#FFFFFF"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text className="text-[20px] font-bold text-black">Explore</Text>
            <Chip textStyle={{ fontSize: 14 }} icon={"chevron-down"}>
              All
            </Chip>
          </View>
          <View className="flex flex-row ">
            <TextInput
              mode="outlined"
              placeholder="Find Projects"
              style={{ flexGrow: 1, height: 52 }}
              contentStyle={{ height: 52 }}
              outlineStyle={{ height: 52 }}
              left={<TextInput.Icon icon="magnify" />}
            />
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              contentStyle={{ marginTop: 56 }}
              anchor={
                <IconButton onPress={() => setVisible(true)} icon={"filter"} />
              }
            >
              <Menu.Item onPress={() => {}} title="All" />
              <Menu.Item onPress={() => {}} title="Popular" />
              <Menu.Item onPress={() => {}} title="Newest" />
              <Menu.Item onPress={() => {}} title="Ending Soon" />
            </Menu>
          </View>
        </View>
        <ScrollView>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
          <Text className="text-[20px] font-bold text-black">Explore</Text>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}
