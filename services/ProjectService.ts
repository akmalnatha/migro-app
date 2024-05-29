import { Project } from "@/constants/Types";
import { supabase } from "@/lib/supabase";

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    let { data, error } = await supabase.from("projects").select(`
        id,
        name,
        category,
        created_at,
        description,
        owner,
        backers,
        target_funding,
        deadline_date,
        overview_image,
        current_funding
      `);

    if (error) {
      console.error(error);
      return [];
    }

    return data as unknown as Project[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
