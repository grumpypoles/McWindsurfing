"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import cloudinary from "@/app/_lib/cloudinary";

//Add new board
export async function addBoom(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  //Upload Images
  const images = formData.getAll("image").filter((img) => img.name !== "");

  const imageUrls = [];

  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // Convert to base64
    const imageBase64 = imageData.toString("base64");

    // Make request to cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "ws_images",
      }
    );

    imageUrls.push(result.secure_url);
  }

  //Upload Invoices
  const invoices = formData.getAll("invoice").filter((inv) => inv.name !== "");

  const invoiceUrls = [];

  for (const invoiceFile of invoices) {
    const invoiceBuffer = await invoiceFile.arrayBuffer();
    const invoiceArray = Array.from(new Uint8Array(invoiceBuffer));
    const invoiceData = Buffer.from(invoiceArray);

    // Convert to base64
    const invoiceBase64 = invoiceData.toString("base64");

    // Make request to cloudinary
    const resultInvoice = await cloudinary.uploader.upload(
      `data:invoice/png;base64,${invoiceBase64}`,
      {
        folder: "ws_invoices",
      }
    );

    invoiceUrls.push(resultInvoice.secure_url);
  }

   // Technical Data

   const selcode = formData.get("selcode");
   const year = formData.get("year");
   const make = formData.get("make");
   const model = formData.get("model");
   const length = formData.get("length");
   const adj_length = formData.get("adj_length");
   const adj_type = formData.get("adj_type");
   const weight = formData.get("weight")
   const diameter = formData.get("diameter");
   const body = formData.get("body");
   const front_end = formData.get("front_end");
   const back_end = formData.get("back_end");
   const image = imageUrls;
   const web_url = formData.get("web_url");
   const is_active = formData.get("is_active");
   const app_user_id = session.user.appUserId;

  const technicalData = {
    selcode,
    year,
    make,
    model,
    length,
    adj_length,
    adj_type,
    weight,
    diameter,
    body,
    front_end,
    back_end,
    image,
    web_url,
    is_active,
    app_user_id,
  };

  // Financial Data

  const merchant = formData.get("merchant");
  const purchase_date = formData.get("purchase_date");
  const retail_price = formData.get("retail_price");
  const paid_price = formData.get("paid_price");
  const comments = formData.get("comments");
  const invoice = invoiceUrls;
  const disposal = formData.get("disposal");
  const disposal_date = formData.get("disposal_date");
  const disposal_price = formData.get("disposal_price");

  const financialData = {
    selcode,
    purchase_date,
    merchant,
    retail_price,
    paid_price,
    comments,
    invoice,
    disposal_date,
    disposal,
    disposal_price,
  };

  console.log(technicalData);

  const { data: technicalDataInput, error: technicalError } = await supabase
    .from("ws_booms")
    .insert(technicalData);

  if (technicalError)
    throw new Error("Booms technical data could not be updated");

  const { data: FinancialDataInput, error: financialError } = await supabase
    .from("ws_costs")
    .insert(financialData);

  if (financialError)
    throw new Error("Booms financial data could not be updated");

  revalidatePath("/booms");
}

//Edit existing board
export async function editBoom(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  //Upload Images
  const images = formData.getAll("image").filter((img) => img.name !== "");

  const imageUrls = [];

  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // Convert to base64
    const imageBase64 = imageData.toString("base64");

    // Make request to cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "ws_images",
      }
    );

    imageUrls.push(result.secure_url);
  }

  //Upload Invoices
  const invoices = formData.getAll("invoice").filter((inv) => inv.name !== "");

  const invoiceUrls = [];

  for (const invoiceFile of invoices) {
    const invoiceBuffer = await invoiceFile.arrayBuffer();
    const invoiceArray = Array.from(new Uint8Array(invoiceBuffer));
    const invoiceData = Buffer.from(invoiceArray);

    // Convert to base64
    const invoiceBase64 = invoiceData.toString("base64");

    // Make request to cloudinary
    const resultInvoice = await cloudinary.uploader.upload(
      `data:invoice/png;base64,${invoiceBase64}`,
      {
        folder: "ws_invoices",
      }
    );

     invoiceUrls.push(resultInvoice.secure_url);
  }

 // Technical Data

 const selcode = formData.get("selcode");
 const year = formData.get("year");
 const make = formData.get("make");
 const model = formData.get("model");
 const length = formData.get("length");
 const adj_length = formData.get("adj_length");
 const adj_type = formData.get("adj_type");
 const weight = formData.get("weight")
 const diameter = formData.get("diameter");
 const body = formData.get("body");
 const front_end = formData.get("front_end");
 const back_end = formData.get("back_end");
 const image = imageUrls;
 const web_url = formData.get("web_url");
 const is_active = formData.get("is_active");
 const app_user_id = session.user.appUserId;

  const technicalData = {
    // selcode,
    year,
    make,
    model,
    length,
    adj_length,
    adj_type,
    weight,
    diameter,
    body,
    front_end,
    back_end,
    image,
    web_url,
    is_active,
    // app_user_id,
  };

  // Financial Data
  // const selcode = formData.get("selcode");
  const merchant = formData.get("merchant");
  const purchase_date = formData.get("purchase_date");
  const retail_price = formData.get("retail_price");
  const paid_price = formData.get("paid_price");
  const comments = formData.get("comments");
  const invoice = invoiceUrls;
  const disposal = formData.get("disposal");
  const disposal_date = formData.get("disposal_date");
  const disposal_price = formData.get("disposal_price");

  const financialData = {
    // selcode,
    purchase_date,
    merchant,
    retail_price,
    paid_price,
    comments,
    invoice,
    disposal_date,
    disposal,
    disposal_price,
  };

  const { data: technicalDataEdit, error: technicalError } = await supabase
    .from("ws_booms")
    .update(technicalData)
    .eq("selcode", selcode);

  if (technicalError)
    throw new Error("Booms technical data could not be updated");

  const { data: FinancialDataEdit, error: financialError } = await supabase
    .from("ws_costs")
    .update(financialData)
    .eq("selcode", selcode);

  if (financialError)
    throw new Error("Booms financial data could not be updated");

  revalidatePath("/booms");
}

//Get all data for specific board
export async function getBoom(id) {
  const { data, error } = await supabase
    .from("ws_booms_info")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}
