"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import cloudinary from "@/app/_lib/cloudinary";

//Add new location
export async function addTow(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

 

  // Technical Data
  const spot = formData.get("spot");
  const sport = formData.get("sport");
  const map_location = formData.get("map_location");
  const latitude = formData.get("latitude");
  const longitude = formData.get("longitude");
  const is_active = formData.get("is_active");
  const app_user_id = session.user.appUserId;

  const technicalData = {
    spot,
    sport,
    map_location,
    latitude,
    longitude,
    is_active,
    app_user_id,
  };
 

  
  const { data: technicalDataInput, error: technicalError } = await supabase
    .from("ws_tow")
    .insert(technicalData);

  if (technicalError)
    throw new Error("Location data could not be updated");

  

  revalidatePath("/tow");
}


//Edit existing location
export async function editTow(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

 
  // Technical Data
  const spot = formData.get("spot");
  const sport = formData.get("sport");
  const map_location = formData.get("map_location");
  const latitude = formData.get("latitude");
  const longitude = formData.get("longitude");
  const is_active = formData.get("is_active");
  const id = formData.get("id");
  

  const technicalData = {
    spot,
    sport,
    map_location,
    latitude,
    longitude,
    is_active,
    };

    const { data: technicalDataInput, error: technicalError } = await supabase
    .from("ws_tow")
    .update(technicalData)
    .eq("id", id);

  if (technicalError)
    throw new Error("Mast technical data could not be updated");

  
  revalidatePath("/tow");
}


//Get all data for location
export async function getSpots() {
  const { data, error } = await supabase
    .from("ws_locations")
    .select("spot")
    

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

//Get all data for disciplines
export async function getDisciplinesList() {
  const { data, error } = await supabase
    .from("ws_disciplines")
    .select("discipline")
    .order("discipline", { ascending: true });
    

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}


//Get all data for wind strength
export async function getWindStrength() {
  const { data, error } = await supabase
    .from("ws_wind_strength")
    .select("strength")
    .order("strength", { ascending: true });
    

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}


//Get all data for wind directions
export async function getWindDirections() {
  const { data, error } = await supabase
    .from("ws_wind_direction")
    .select("direction")
    

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}
//Get all data for swell
export async function getSwellSize() {
  const { data, error } = await supabase
    .from("ws_swell")
    .select("swell")
    

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}


//Get all data for sail summary
export async function getSailsSummary() {
  const { data, error } = await supabase
    .from("ws_sails_summary")
    .select("full_description")
    .eq("is_active", true)
    .order("full_description", { ascending: false });
    

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

//Get all data for sail summary
export async function getBoardsSummary() {
  const { data, error } = await supabase
    .from("ws_boards_summary")
    .select("full_description")
    .eq("is_active", true)
    .order("full_description", { ascending: false });

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}


//Get all data for sail summary
export async function getRatings() {
  const { data, error } = await supabase
    .from("ws_ratings")
    .select("rating")
    .order("rating", { ascending: false });

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}


