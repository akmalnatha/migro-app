import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BoxPhotoInput from "@/components/BoxPhotoInput";
import { TextInput } from "react-native-paper";
import { Link } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { fetchCategories } from "@/services/CategoryService";
import { Category } from "@/constants/Types";

export default function CreateOverview() {
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<{ label: string; value: number; }[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setItems(data.map((item)=>{
        return(
          {label: item.name, value: item.id}
        )
      }));
      setCategories(data);
    };
    getCategories();
  }, []);


  return (
    <ScrollView className="p-4 min-h-screen" contentContainerStyle={styles.container}>
      <SafeAreaView edges={["bottom"]}>
        <View style={{ flex: 1, gap: 16 }}>
          <Text style={styles.header}>Overview</Text>
          <BoxPhotoInput />
          <TextInput
            mode="outlined"
            placeholder="Description"
            style={styles.input}
            contentStyle={styles.inputContent}
            outlineStyle={styles.inputOutline}
          />
          <View style={styles.ownerContainer}>
            <Image
              style={styles.ownerImage}
              source={require("@/assets/images/logo-org.png")}
            />
            <View style={styles.ownerTextContainer}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.ownerText}
              >
                Owner
              </Text>
            </View>
          </View>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              showTickIcon
              searchable
              listMode="SCROLLVIEW"
              selectedItemContainerStyle={{backgroundColor: "#008E8A"}}
              searchContainerStyle={{borderRadius: 4}}
              dropDownContainerStyle={{marginTop: 8, borderWidth: 1, borderColor: "#79747E", borderRadius: 4}}
              selectedItemLabelStyle={{color: "#FFFFFF"}}
              setValue={setValue}
              setItems={setItems}
              multiple={true}
              mode="BADGE"
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
          <TextInput
            mode="outlined"
            placeholder="Category"
            style={styles.input}
            contentStyle={styles.inputContent}
            outlineStyle={styles.inputOutline}
          />
          <TextInput
            mode="outlined"
            placeholder="Target"
            style={styles.input}
            contentStyle={styles.inputContent}
            outlineStyle={styles.inputOutline}
            right={
              <TextInput.Affix
                text="IDR"
                textStyle={styles.affix}
              />
            }
          />
          <TextInput
            mode="outlined"
            placeholder="Deadline"
            onPress={() => setCalendarVisible(!calendarVisible)}
            editable={false}
            style={styles.input}
            contentStyle={styles.inputContent}
            outlineStyle={styles.inputOutline}
            right={<TextInput.Icon icon={"calendar"} />}
          />
          {calendarVisible && (
            <View style={styles.calendarContainer}>
              <CalendarPicker headerWrapperStyle={{ paddingHorizontal: 20 }} />
            </View>
          )}
          <View style={styles.navigationContainer}>
            <Link
              href={"./create-campaign"}
              style={styles.link}
            >
              SKIP
            </Link>
            <Link
              href={"./create-campaign"}
              style={styles.link}
            >
              NEXT
            </Link>
          </View>
        </View>
        <View style={styles.bottomSpacer}></View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    flexGrow: 1,
  },
  inputContent: {
    height: 52,
  },
  inputOutline: {
    height: 52,
  },
  affix: {
    fontSize: 16,
    color: "#000000",
  },
  ownerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ownerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  ownerTextContainer: {
    height: 48,
    flex: 1,
    justifyContent: "center",
    marginLeft: 8,
  },
  ownerText: {
    fontSize: 16,
    color: "black",
  },
  dropdownContainer: {
    zIndex: 10,
  },
  calendarContainer: {
    backgroundColor: "white",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
  },
  link: {
    fontSize: 16,
    fontWeight: "700",
  },
  bottomSpacer: {
    height: 56,
  },
});

