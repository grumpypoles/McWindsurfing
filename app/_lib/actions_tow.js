"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";

//Add new location
export async function addTow(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

 

  // Technical Data
  const date = formData.get("date");
  const s_time = formData.get("s_time");
  const e_time = formData.get("e_time");
  const duration = formData.get("duration");
  const distance = formData.get("distance");
  const spot = formData.get("spot");
  const sport = formData.get("sport");
  const discipline = formData.get("discipline");
  const wind_direction = formData.get("wind_direction");
  const wind_strength = formData.get("wind_strength");
  const swell_size = formData.get("swell_size");
  const swell_direction = formData.get("swell_direction");
  const tide_height = formData.get("tide_height");
  const tide_direction = formData.get("tide_direction");
  const sail = formData.get("sail");
  const board = formData.get("board");
  const rating = formData.get("rating");
  const comments = formData.get("comments");
  const app_user_id = session.user.appUserId;

  const technicalData = {
    date,
    s_time,
    e_time,
    duration,
    distance,
    spot,
    sport,
    discipline,
    wind_direction,
    wind_strength,
    swell_size,
    swell_direction,
    tide_height,
    tide_direction,
    sail,
    board,
    rating,
    comments,
    app_user_id,
  };
 

  
  const { data: technicalDataInput, error: technicalError } = await supabase
    .from("ws_tow")
    .insert(technicalData);

  if (technicalError)
    throw new Error("Session data could not be updated");

  

  revalidatePath("/tow");
}


//Edit existing location
export async function editTow(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

 
  // Technical Data
  const date = formData.get("date");
  const s_time = formData.get("s_time");
  const e_time = formData.get("e_time");
  const duration = formData.get("duration");
  const distance = formData.get("distance");
  const spot = formData.get("spot");
  const sport = formData.get("sport");
  const discipline = formData.get("discipline");
  const wind_direction = formData.get("wind_direction");
  const wind_strength = formData.get("wind_strength");
  const swell_size = formData.get("swell_size");
  const swell_direction = formData.get("swell_direction");
  const tide_height = formData.get("tide_height");
  const tide_direction = formData.get("tide_direction");
  const sail = formData.get("sail");
  const board = formData.get("board");
  const rating = formData.get("rating");
  const comments = formData.get("comments");
  const id = formData.get("id");
  

  const technicalData = {
    date,
    s_time,
    e_time,
    duration,
    distance,
    spot,
    sport,
    discipline,
    wind_direction,
    wind_strength,
    swell_size,
    swell_direction,
    tide_height,
    tide_direction,
    sail,
    board,
    rating,
    comments,
    
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

/** Functions delete session */


export async function deleteSession(rowId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { error } = await supabase
    .from("ws_tow")
    .delete()
    .eq("id", rowId);

  if (error) throw new Error("WS Session record could not be deleted");

  revalidatePath("/tow");
}

// Get data linked to location info
export async function getTowSpot(id) {
  const { data, error } = await supabase
    .from("ws_tow")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getLocationMap(mapSpot) {
  const { data, error } = await supabase
    .from("ws_locations")
    .select("id")
    .eq("spot", mapSpot)
    .single()

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}



//Get all data for location
export async function getSpecificSession(id) {
  const { data, error } = await supabase
    .from("ws_tow")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

