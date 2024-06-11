import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Accordion from "@/components/Accordion";
import { ProjectFAQ } from "@/constants/Types";
import { supabase } from "@/lib/supabase";
import { usePathname, useGlobalSearchParams, useRouter } from "expo-router";

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
  const pathname = usePathname()
  // console.log(pathname)
  const { projectId } = useGlobalSearchParams()
  // console.log(projectId)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [faq, setFaq] = useState<ProjectFAQ[]>([]);

  useEffect(() => {
    const fetchProjectFAQ = async () => {
      try {
        const { data, error } = await supabase
          .from("faq")
          .select(`
            id,
            project_id,
            question,
            answer
          `)
          .eq("project_id", projectId);

        if (error) {
          console.error(error);
          setFaq([])
        } else {
          setFaq(data as unknown as ProjectFAQ[]); 
          // console.log(data)
        }
      } catch (error) {
        console.error(error);
        // console.log("nice")
      }
    };

    fetchProjectFAQ();
  }, []);
  return (
    <View>
      {faq.map((faq, index) => (
        <Accordion
          key={index.toString()}
          title={faq.question}
          details={faq.answer}
        />
      ))}
    </View>
  );
}
