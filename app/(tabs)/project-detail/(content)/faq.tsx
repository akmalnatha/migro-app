import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Accordion from "@/components/Accordion";

const frequentlyAskedQuestions = [
  {
    question: "How do I become a collaborator?",
    answer:
      "Click Back This Project! on this page, or send us an email at ONE@gmail.com",
  },
  {
    question: "Apa makanan favoritmu?",
    answer: "Bakso",
  },
  {
    question: "What's your name?",
    answer: "Kopeng",
  },
];

export default function Faq() {
  return (
    <View>
      {frequentlyAskedQuestions.map((faq, index) => (
        <Accordion
          key={index.toString()}
          title={faq.question}
          details={faq.answer}
        />
      ))}
    </View>
  );
}
