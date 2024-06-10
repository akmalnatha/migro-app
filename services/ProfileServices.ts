import { Category, Profile } from "@/constants/Types";
import { supabase } from "@/lib/supabase";

export const fetchProfile = async (): Promise<Profile[]> => {
  try {
    const { data, error } = await supabase.from("profiles").select("id, username, full_name, avatar_url").eq("id", (await supabase.auth.getUser()).data.user?.id).single();

    if (error) {
      console.error(error);
      return [];
    }

    return data as unknown as Profile[];
  } catch (error) {
    console.error(error);
    return [];
  }
};