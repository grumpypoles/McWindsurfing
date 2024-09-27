"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import cloudinary from "@/app/_lib/cloudinary";

//Add new location
export async function addLocation(formData) {
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
    .from("ws_locations")
    .insert(technicalData);

  if (technicalError)
    throw new Error("Location data could not be updated");

  

  revalidatePath("/locations");
}


//Edit existing location
export async function editLocation(formData) {
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
    .from("ws_locations")
    .update(technicalData)
    .eq("id", id);

  if (technicalError)
    throw new Error("Mast technical data could not be updated");

  
  revalidatePath("/sundry");
}


//Get all data for location
export async function getLocation(id) {
  const { data, error } = await supabase
    .from("ws_locations")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}




