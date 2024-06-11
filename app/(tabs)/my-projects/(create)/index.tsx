import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BoxPhotoInput from "@/components/BoxPhotoInput";
import { TextInput } from "react-native-paper";
import { Link } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
import { fetchCategories } from "@/services/CategoryService";
import { Category } from "@/constants/Types";
import { supabase } from "@/lib/supabase";
import { useFormContext } from "@/context/FormContext";

interface Item {
  label: string;
  value: string;
}

export default function CreateOverview() {
  const { formData, updateFormData } = useFormContext();
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<ValueType | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [photo, setPhoto] = useState<any>(formData.overview.photo);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [description, setDescription] = useState<string>(
    formData.overview.description
  );
  const [name, setname] = useState<string>(formData.overview.name);
  const [target, setTarget] = useState<string>(formData.overview.target);
  const [deadline, setDeadline] = useState<Date>(formData.overview.deadline);
  const [isAllInputFilled, setIsAllInputFilled] = useState<boolean>(false);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      const transformedData: Item[] = data.map((item) => ({
        label: item.name,
        value: item.id.toString(),
      }));
      setItems(transformedData);
      setCategories(data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    setIsAllInputFilled(
      !!photo && !!value && !!description && !!target && !!deadline && !!name
    );
  }, [photo, value, description, target, deadline, name]);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("username, avatar_url")
        .eq("id", (await supabase.auth.getSession()).data.session?.user?.id)
        .single();

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    };

    fetchProfile();
  }, []);

  const handlePhotoChange = (value: any) => {
    setPhoto(value);
  };

  const handleDateChange = (date: Date) => {
    setDeadline(date);
    setCalendarVisible(false);
  };

  const handleNext = async () => {
    let photoUrl = formData.overview.photo;

    if (photo && typeof photo !== "string") {
      const photoFileName = `${new Date().toISOString()}_${photo.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("overview_image")
        .upload(photoFileName, photo);

      if (uploadError) {
        Alert.alert("Photo Upload Error", uploadError.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("overview_image")
        .getPublicUrl(uploadData.path);

      if (!publicUrlData.publicUrl) {
        Alert.alert("Photo URL Error", "Failed to retrieve public URL");
        return;
      }

      photoUrl = publicUrlData.publicUrl;
    }

    updateFormData("overview", {
      photo: photoUrl,
      description: description,
      target: target,
      deadline: deadline,
      category: value,
      user: username,
      name: name,
    });
  };
  useEffect(() => {
    console.log(calendarVisible);
  }, [calendarVisible]);

  return (
    <ScrollView
      className="p-4 min-h-screen"
      contentContainerStyle={styles.container}
    >
      <SafeAreaView edges={["bottom"]}>
        <View style={{ flex: 1, gap: 16 }}>
          <Text style={styles.header}>Overview</Text>
          <BoxPhotoInput value={photo} onChange={handlePhotoChange} />
          <TextInput
            mode="outlined"
            placeholder="Name"
            style={styles.input}
            contentStyle={styles.inputContent}
            outlineStyle={styles.inputOutline}
            value={name}
            onChangeText={setname}
          />
          <TextInput
            mode="outlined"
            placeholder="Description"
            style={styles.input}
            contentStyle={styles.inputContent}
            outlineStyle={styles.inputOutline}
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.ownerContainer}>
            <Image
              style={styles.ownerImage}
              source={
                avatarUrl
                  ? { uri: avatarUrl }
                  : require("@/assets/images/logo-org.png")
              }
            />
            <View style={styles.ownerTextContainer}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.ownerText}
              >
                {username || "Owner"}
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
              selectedItemContainerStyle={{ backgroundColor: "#008E8A" }}
              searchContainerStyle={{ borderRadius: 4 }}
              dropDownContainerStyle={{
                marginTop: 8,
                borderWidth: 1,
                borderColor: "#79747E",
                borderRadius: 4,
              }}
              selectedItemLabelStyle={{ color: "#FFFFFF" }}
              setValue={setValue}
              setItems={setItems}
              multiple={false}
              mode="BADGE"
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>

          <TextInput
            mode="outlined"
            placeholder="Target"
            style={styles.input}
            contentStyle={styles.inputContent}
            outlineStyle={styles.inputOutline}
            value={target}
            onChangeText={setTarget}
            right={<TextInput.Affix text="IDR" textStyle={styles.affix} />}
          />
          <TextInput
            mode="outlined"
            placeholder="Deadline"
            onPress={() => setCalendarVisible(!calendarVisible)}
            onPressIn={() => setCalendarVisible(!calendarVisible)}
            editable={false}
            style={styles.input}
            contentStyle={styles.inputContent}
            outlineStyle={styles.inputOutline}
            value={deadline ? deadline.toISOString().split("T")[0] : ""}
            right={
              <TextInput.Icon
                icon={"calendar"}
                onPress={() => setCalendarVisible(!calendarVisible)}
              />
            }
          />
          {calendarVisible && (
            <View style={styles.calendarContainer}>
              <CalendarPicker
                selectedStartDate={deadline}
                onDateChange={handleDateChange}
                headerWrapperStyle={{ paddingHorizontal: 20 }}
              />
            </View>
          )}
          <View style={styles.navigationContainer}>
            <Link
              href={"./create-campaign"}
              style={[styles.link, !isAllInputFilled && styles.disabledLink]}
              onPress={(e) => {
                if (!isAllInputFilled) {
                  e.preventDefault();
                } else {
                  handleNext();
                }
              }}
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
  disabledLink: {
    color: "#CCCCCC",
  },
  bottomSpacer: {
    height: 56,
  },
});
