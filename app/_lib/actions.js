"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "./supabase";
import { addDays, format } from 'date-fns';
import {
  calculateBMI, calculateW2hight,
  calculateW2hip
} from "@/app/_lib/helpers";

//Profile Functions
export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const access_type = formData.get("access_type");
  const activeResult = formData.get("is_active");
  const is_active = activeResult === "on";

  const updateData = { access_type, is_active };
  const { data, error } = await supabase
    .from("app_users")
    .update(updateData)
    .eq("id", session.user.appUserId);

  if (error) throw new Error("App user could not be updated");

  revalidatePath("/account/profile");
}








// Loging Functions

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}




