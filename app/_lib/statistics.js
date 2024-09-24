import { supabase } from "./supabase";
import { notFound } from "next/navigation";
import {
  getYear,
  getMonthAbbreviation
} from "@/app/_lib/helpers";

/////////////
// GET

export async function getSwimStats(id) {
  const { data, error } = await supabase
    .from("swim_history")
    .select(
      `
    date,
    distance,
    repetition
  `
    )
    .eq("app_user_id", id)
    // .eq('date', 2024) // Filter for year 2024
    .order("date", { ascending: true });

  const newData = data.map((row) => ({
    ...row,
    swum: row.distance * row.repetition
  }));

  const results = newData.reduce((acc, curr) => {
    const year = new Date(curr.date).getFullYear();
    const month = new Date(curr.date).getMonth() + 1;

    // Create a unique key for each year and month
    const key = `${year}-${month}`;

    // Initialize the accumulator object if it doesn't exist for the key
    if (!acc[key]) {
      acc[key] = {
        year,
        month,
        total_distance: 0,
        total_repetition: 0,
        total_swum: 0,
      };
    }

    // Accumulate the total distance and repetition
    acc[key].total_distance += curr.distance;
    acc[key].total_repetition += curr.repetition;
    acc[key].total_swum += curr.swum;

    return acc;
  }, {});

  const groupedData = Object.values(results);
 
  // //For Testing
  // await new Promise((res)=> setTimeout(res, 3000))

  if (error) {
    console.error(error);
    notFound();
  }

  return groupedData;
}



export async function getRecreationsStatistics(id) {
  const { data, error } = await supabase

  .from("activities_stats")
  .select("*")
  .order("activity_count", { ascending: false }) 
  .limit(5000)
  .eq("app_user_id", id);

  // const allRows = data.length;
  // console.log(allRows);

  
  // //For Testing
  // await new Promise((res)=> setTimeout(res, 3000))

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getRecreationsReport(id, standardSteps) {
  const { data, error } = await supabase
    .from("recreations")
    .select("*, app_users(fullname)")
    .eq("app_user_id", id)
    .order("app_user_id", { ascending: false })
    .limit(5000);

    //const allRows = data.length
    

  const newData = data.map((row) => ({
    ...row,
    steps:
      row.activity === "Walking" ? Math.round(row.distance * standardSteps, 0) : 0,
    year: getYear(row.date),
    month: getMonthAbbreviation(row.date),
   
  }));
   const filteredData = newData.filter(record => record.year >= 2020)

  // //For Testing
  // await new Promise((res)=> setTimeout(res, 3000))

  if (error) {
    console.error(error);
    notFound();
  }

  return filteredData;
}



export async function getSwimReport(id) {
  const { data, error } = await supabase
    .from("swim_history")
    .select("*")
    .eq("app_user_id", id)
    .order("id", { ascending: false })
    .limit(5000);

    // const allRows = data.length
    

  const newData = data.map((row) => ({
    ...row,
    stretch: row.repetition * row.distance,
    year: getYear(row.date),
    month: getMonthAbbreviation(row.date)
  }));

   
  // //For Testing
  // await new Promise((res)=> setTimeout(res, 3000))

  if (error) {
    console.error(error);
    notFound();
  }

  return newData;
}


