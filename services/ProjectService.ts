import { Project } from "@/constants/Types";
import { supabase } from "@/lib/supabase";

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    // Fetch projects from projects table
    let { data: projectsData, error: projectsError } = await supabase.from(
      "projects"
    ).select(`
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
        current_funding,
        is_recommended
      `);

    if (projectsError) {
      console.error(projectsError);
      return [];
    }

    // Handle the case where projectsData is null
    if (!projectsData) {
      console.error("No data found for projects");
      return [];
    }

    // Add is_wishlisted property with initial value false to each project
    projectsData = projectsData.map((project: any) => ({
      ...project,
      is_wishlisted: false,
    }));

    // Fetch wishlist data for the logged-in user
    let { data: wishlistData, error: wishlistError } = await supabase
      .from("wishlist")
      .select("project_id")
      .eq("user_id", (await supabase.auth.getSession()).data.session?.user.id);

    if (wishlistError) {
      console.error(wishlistError);
      return [];
    }

    // Iterate through projects and update is_wishlisted based on wishlist data
    const projectsWithWishlistStatus = projectsData.map((project: any) => {
      const isWishlisted = wishlistData
        ? wishlistData.some(
            (wishlistItem: any) => wishlistItem.project_id === project.id
          )
        : false;
      return {
        ...project,
        is_wishlisted: isWishlisted,
      };
    });

    // console.log(projectsWithWishlistStatus);

    return projectsWithWishlistStatus;
  } catch (error) {
    console.error(error);
    return [];
  }
};
