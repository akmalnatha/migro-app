import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { Link, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFormContext } from "@/context/FormContext";

interface FAQ {
  question: string;
  answer: string;
}

export default function CreateFaq() {
  const { formData, updateFormData } = useFormContext();
  const navigation = useNavigation();
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    const loadedComponents = formData.faq.faqs.map((component, index) => ({
      id: index + 1,
      question: component.question,
      answer: component.answer,
    }));
    setFaqs(loadedComponents);
  }, [formData.faq.faqs]);

  const handleAddFaq = () => {
    if (faqs.every((faq) => faq.question.trim() && faq.answer.trim())) {
      setFaqs([...faqs, { question: "", answer: "" }]);
    }
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index].question = value;
    setFaqs(newFaqs);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index].answer = value;
    setFaqs(newFaqs);
  };

  const canAddFaq = faqs.every(
    (faq) => faq.question.trim() && faq.answer.trim()
  );

  const handleNext = () => {
    updateFormData("faq", {
      faqs: faqs,
    });
  };

  const handleBack = () => {
    handleNext();
    navigation.goBack();
  };

  return (
    <ScrollView className="p-4 min-h-screen">
      <View style={{ flex: 1, gap: 16 }}>
        <Text className="text-[20px] font-bold text-black">FAQ</Text>
        {faqs.map((faq, index) => (
          <View key={index}>
            <TextInput
              mode="outlined"
              placeholder="Question"
              style={{ flexGrow: 1 }}
              contentStyle={{ height: 52 }}
              outlineStyle={{ height: 52 }}
              value={faq.question}
              onChangeText={(value) => handleQuestionChange(index, value)}
            />
            <TextInput
              mode="outlined"
              placeholder="Answer"
              multiline
              style={{ flexGrow: 1 }}
              contentStyle={{ minHeight: 104 }}
              outlineStyle={{ minHeight: 104 }}
              value={faq.answer}
              onChangeText={(value) => handleAnswerChange(index, value)}
            />
          </View>
        ))}
        <TouchableOpacity
          className="flex-row items-center gap-1 mb-2"
          onPress={handleAddFaq}
          disabled={!canAddFaq}
          style={{ opacity: canAddFaq ? 1 : 0.5 }}
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
              href={"./create-backing"}
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
