import { supabase } from "@/lib/supabase";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface OverviewData {
  photo: any;
  description: string;
  target: string;
  deadline: Date;
  category: string;
  user: string;
  name: string;
}

interface CampaignData {
  components: { photo: string; description: string }[];
}

interface FAQData {
  faqs: { question: string; answer: string }[];
}

interface BackingData {
  items: { price: string; title: string; desc: string; benefits: string }[];
}

interface FormData {
  overview: OverviewData;
  campaign: CampaignData;
  faq: FAQData;
  backing: BackingData;
}

interface FormContextProps {
  formData: FormData;
  updateFormData: (section: keyof FormData, data: any) => void;
  clearFormData: () => void;
  postToSupabase: () => void; // Tambahkan fungsi ini
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    overview: {
      photo: null,
      description: "",
      target: "",
      deadline: new Date(),
      category: "",
      user: "",
      name: "",
    },
    campaign: { components: [] },
    faq: { faqs: [] },
    backing: { items: [] },
  });

  const updateFormData = (section: keyof FormData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const clearFormData = () => {
    setFormData({
      overview: {
        photo: null,
        description: "",
        target: "",
        deadline: new Date(),
        category: "",
        user: "",
        name: "",
      },
      campaign: { components: [] },
      faq: { faqs: [] },
      backing: { items: [] },
    });
  };

  const postToSupabase = async () => {
    const { overview } = formData;
    if (isNaN(overview.deadline.getTime())) {
      overview.deadline = new Date();
      console.error("Invalid deadline date:", overview.deadline);
      return;
    }

    if (
      !overview.name ||
      !overview.description ||
      !overview.target ||
      !overview.deadline ||
      !overview.category ||
      !overview.user
    ) {
      console.error("Data is incomplete");
      return;
    }

    const { error } = await supabase.from("projects").insert([
      {
        name: overview.name,
        description: overview.description,
        overview_image: overview.photo,
        target_funding: overview.target,
        deadline_date: new Date(overview.deadline).toISOString(),
        category: overview.category,
        owner: overview.user,
      },
    ]);
    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully");
    }
  };

  return (
    <FormContext.Provider
      value={{ formData, updateFormData, clearFormData, postToSupabase }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
