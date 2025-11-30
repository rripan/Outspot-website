// app/api/waitlist/route.ts
import { NextResponse } from "next/server";
import { supabaseServerClient } from "@/lib/supabase-server";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Insert into Supabase waitlist table
    const { data, error } = await supabaseServerClient
      .from("waitlist")
      .insert({ email, name })
      .select()
      .single();

    if (error) {
      // Handle "already registered" (unique constraint) more nicely
      if ((error as any).code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Could not save to waitlist." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
