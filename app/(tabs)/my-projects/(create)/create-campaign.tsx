import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BoxPhotoInput from "@/components/BoxPhotoInput";
import { TextInput } from "react-native-paper";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFormContext } from "@/context/FormContext";

interface ComponentItem {
  id: number;
  photo: string;
  description: string;
}

export default function CreateCampaign() {
  const { formData, updateFormData } = useFormContext();
  const navigation = useNavigation();
  const [components, setComponents] = useState<ComponentItem[]>([]);

  useEffect(() => {
    const loadedComponents = formData.campaign.components.map(
      (component, index) => ({
        id: index + 1,
        photo: component.photo,
        description: component.description,
      })
    );
    setComponents(loadedComponents);
  }, [formData.campaign.components]);

  const handlePhotoChange = (id: number, value: string) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, photo: value } : component
      )
    );
  };

  const handleDescriptionChange = (id: number, value: string) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, description: value } : component
      )
    );
  };

  const addComponent = () => {
    const newId = components.length
      ? components[components.length - 1].id + 1
      : 1;
    setComponents([...components, { id: newId, photo: "", description: "" }]);
  };

  const canAdd = components.every(
    (component) => component.photo && component.description
  );

  const handleNext = () => {
    updateFormData("campaign", {
      components: components,
    });
  };

  const handleBack = () => {
    handleNext();
    navigation.goBack();
  };
  return (
    <ScrollView className="p-4 min-h-screen">
      <View style={{ flex: 1, gap: 16 }}>
        <Text className="text-[20px] font-bold text-black">Campaign</Text>
        {components.map((item) => (
          <React.Fragment key={item.id}>
            <BoxPhotoInput
              value={item.photo}
              onChange={(value: string) => handlePhotoChange(item.id, value)}
            />
            <TextInput
              mode="outlined"
              placeholder="Description"
              style={{ flexGrow: 1 }}
              contentStyle={{ height: 52 }}
              outlineStyle={{ height: 52 }}
              value={item.description}
              onChangeText={(value: string) =>
                handleDescriptionChange(item.id, value)
              }
            />
          </React.Fragment>
        ))}
        <TouchableOpacity
          onPress={addComponent}
          className="flex-row gap-1 items-center mb-4"
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
              onPress={handleNext}
              href={"./create-faq"}
              style={{ fontSize: 16, fontWeight: "700" }}
            >
              NEXT
            </Link>
          </View>
        </View>
      </View>
      <SafeAreaView edges={["bottom"]} />
    </ScrollView>
  );
}
