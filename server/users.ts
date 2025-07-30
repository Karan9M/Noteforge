"use server";

import { auth } from "@/lib/auth";

export const signInUser = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { success: "True", message: "Signed in successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: "False", message: e.message || "Failed to sign in" };
  }
};

export const signUpUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
    return { success: "True", message: "Signed up successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: "False", message: e.message || "Failed to sign up" };
  }
};
