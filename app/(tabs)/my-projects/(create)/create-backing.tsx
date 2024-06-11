import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { Link, useNavigation, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFormContext } from "@/context/FormContext";
import { supabase } from "@/lib/supabase";

type InputField = "price" | "title" | "desc" | "benefits";

interface InputState {
  price: string;
  title: string;
  desc: string;
  benefits: string;
}

export default function CreateBacking() {
  const router = useRouter();
  const { formData, updateFormData, clearFormData, postToSupabase } =
    useFormContext();
  const navigation = useNavigation();
  const [inputs, setInputs] = useState<InputState[]>([]);

  useEffect(() => {
    const loadedComponents = formData.backing.items.map((component, index) => ({
      id: index + 1,
      title: component.title,
      desc: component.desc,
      price: component.price,
      benefits: component.benefits,
    }));
    setInputs(loadedComponents);
  }, [formData.backing.items]);

  const handleAdd = () => {
    if (
      inputs.every(
        (input) => input.price && input.title && input.desc && input.benefits
      )
    ) {
      setInputs([...inputs, { price: "", title: "", desc: "", benefits: "" }]);
    }
  };

  const handleChange = (index: number, field: InputField, value: string) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const handleBack = () => {
    updateFormData("backing", {
      items: inputs,
    });
    navigation.goBack();
  };

  const canAdd = inputs.every(
    (input) => input.price && input.title && input.desc && input.benefits
  );

  const fetchProjectId = async () => {
    try {
      const { data: projects, error } = await supabase
        .from("projects")
        .select("id")
        .order("created_at", { ascending: false })
        .limit(1);

      if (error) {
        throw error;
      }

      if (!projects || projects.length === 0 || !projects[0].id) {
        throw new Error("Failed to fetch project ID");
      }

      return projects[0].id;
    } catch (error) {
      console.error("Error fetching project ID:");
      throw error;
    }
  };

  const handleNext = () => {
    updateFormData("backing", {
      items: inputs,
    });
    postToSupabase();

    clearFormData();
    router.replace("/(tabs)");
  };

  return (
    <ScrollView className="p-4 min-h-screen">
      <View style={{ flex: 1, gap: 16, paddingBottom: 160 }}>
        <Text className="text-[20px] font-bold text-black">Overview</Text>
        {inputs.map((input, index) => (
          <View key={index}>
            <TextInput
              mode="outlined"
              placeholder="Price"
              style={styles.input}
              contentStyle={styles.inputContent}
              outlineStyle={styles.inputOutline}
              value={input.price}
              onChangeText={(value) => handleChange(index, "price", value)}
              right={<TextInput.Affix text="IDR" textStyle={styles.affix} />}
            />
            <TextInput
              value={input.title}
              onChangeText={(value) => handleChange(index, "title", value)}
              mode="outlined"
              placeholder="Title"
              style={{ flexGrow: 1 }}
              contentStyle={{ height: 52 }}
              outlineStyle={{ height: 52 }}
            />
            <TextInput
              value={input.desc}
              onChangeText={(value) => handleChange(index, "desc", value)}
              mode="outlined"
              placeholder="Description"
              style={{ flexGrow: 1 }}
              contentStyle={{ height: 52 }}
              outlineStyle={{ height: 52 }}
            />
            <TextInput
              value={input.benefits}
              onChangeText={(value) => handleChange(index, "benefits", value)}
              mode="outlined"
              placeholder="Benefits"
              style={{ flexGrow: 1 }}
              contentStyle={{ height: 52 }}
              outlineStyle={{ height: 52 }}
            />
          </View>
        ))}
        <TouchableOpacity
          className="flex-row items-center gap-1 mb-2"
          onPress={handleAdd}
          disabled={!canAdd}
          style={{ opacity: canAdd ? 1 : 0.5 }}
        >
          <Text>Add</Text>
          <Ionicons name="add" size={24} />
        </TouchableOpacity>
        <View className="flex flex-row justify-between items-center w-full">
          <TouchableOpacity onPress={handleBack}>
            <Text className="text-[16px] font-bold text-black">BACK</Text>
          </TouchableOpacity>
          <View className="flex flex-row items-center gap-4">
            <Link
              href={"./create-faq"}
              style={{ fontSize: 16, fontWeight: "700" }}
            >
              SAVE TO DRAFT
            </Link>
            <TouchableOpacity onPress={handleNext}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>PUBLISH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SafeAreaView edges={["bottom"]} />
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
