import { Category } from "@/constants/Types";
import { supabase } from "@/lib/supabase";

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    let { data, error } = await supabase.from("categories").select("id, name");

    if (error) {
      console.error(error);
      return [];
    }

    return data as unknown as Category[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
