import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface VehicleInput {
  vehicleType: "car" | "bike";
  year: number;
  make: string;
  model: string;
  class: string;
}

interface RegistrationInput {
  name: string;
  email: string;
  phone: string;
  vehicles: VehicleInput[];
}

export async function POST(req: NextRequest) {
  try {
    const body: RegistrationInput = await req.json();

    // Validate input
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { message: "Name, email, and phone are required." },
        { status: 400 }
      );
    }
    if (!body.vehicles || body.vehicles.length === 0) {
      return NextResponse.json(
        { message: "At least one vehicle is required." },
        { status: 400 }
      );
    }

    // Generate a UUID for the registration so we can link vehicles
    const registrationId = crypto.randomUUID();

    // Insert registration
    const { error: regError } = await supabase
      .from("registrations")
      .insert({
        id: registrationId,
        name: body.name,
        email: body.email,
        phone: body.phone,
      });

    if (regError) {
      console.error("Registration insert error:", regError);
      return NextResponse.json(
        { message: "Failed to save registration. Please try again." },
        { status: 500 }
      );
    }

    // Insert vehicles
    const vehicleInserts = body.vehicles.map((v) => ({
      registration_id: registrationId,
      vehicle_type: v.vehicleType,
      year: v.year,
      make: v.make,
      model: v.model,
      class: v.class,
    }));

    const { error: vehicleError } = await supabase
      .from("vehicles")
      .insert(vehicleInserts);

    if (vehicleError) {
      console.error("Vehicle insert error:", vehicleError);
      return NextResponse.json(
        { message: "Failed to save vehicles. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email
    try {
      const vehicleList = body.vehicles
        .map(
          (v, i) =>
            `  ${i + 1}. ${v.year} ${v.make} ${v.model} (${v.vehicleType === "bike" ? "Motorcycle" : "Car/Truck"}) — ${v.class}`
        )
        .join("\n");

      await resend.emails.send({
        from: "Riverside Riders <onboarding@resend.dev>",
        to: body.email,
        subject:
          "Registration Confirmed — Riverside Riders Fall Wheels Show 2026",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F5F0E8; padding: 0;">
            <!-- Header -->
            <div style="background: #111; padding: 32px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 24px;">RIVERSIDE RIDERS</h1>
              <p style="color: #C5A55A; margin: 8px 0 0; font-size: 18px; font-style: italic;">Fall Wheels Show 2026</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 32px; background: #fff;">
              <h2 style="color: #8B1A1A; margin: 0 0 16px;">You're Registered! &#127881;</h2>
              <p style="color: #333; line-height: 1.6;">
                Hey <strong>${body.name}</strong>,
              </p>
              <p style="color: #333; line-height: 1.6;">
                Your registration for the <strong>5th Annual Riverside Riders Fall Wheels Show</strong> has been confirmed. We're excited to see your ride!
              </p>
              
              <!-- Vehicle Details -->
              <div style="background: #F5F0E8; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #111; margin: 0 0 12px; font-size: 16px;">Your Registered Vehicles:</h3>
                <pre style="color: #333; font-family: Arial, sans-serif; white-space: pre-wrap; margin: 0; line-height: 1.8;">${vehicleList}</pre>
              </div>
              
              <!-- Event Details -->
              <div style="border-left: 4px solid #8B1A1A; padding-left: 16px; margin: 20px 0;">
                <p style="margin: 4px 0; color: #333;"><strong>Date:</strong> Saturday, September 19, 2026</p>
                <p style="margin: 4px 0; color: #333;"><strong>Time:</strong> 11 AM – 3 PM (Registration at 10 AM)</p>
                <p style="margin: 4px 0; color: #333;"><strong>Location:</strong> Riverside Community Church</p>
                <p style="margin: 4px 0; color: #333;">37W130 Crane Road, St. Charles, IL 60175</p>
              </div>
              
              <p style="color: #333; line-height: 1.6;">
                Remember — <strong>no entry fee</strong>! Plus free hot dogs, snacks, chips, drinks &amp; ice cream. Family fun activities including spacewalks and games. Top quality trophies await the winners.
              </p>
              
              <a href="https://www.google.com/maps/dir//37W130+Crane+Rd,+St+Charles,+IL+60175" 
                 style="display: inline-block; background: #8B1A1A; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 16px;">
                Get Directions
              </a>
            </div>
            
            <!-- Footer -->
            <div style="background: #111; padding: 24px; text-align: center;">
              <p style="color: #888; margin: 0; font-size: 12px;">
                RCC Fall Wheels Show | allwheelsshow@rccstc.org
              </p>
              <p style="color: #666; margin: 8px 0 0; font-size: 11px;">
                riversideriderscarshow.com
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      // Don't fail registration if email fails — log it
      console.error("Email send error:", emailError);
    }

    return NextResponse.json(
      {
        message: "Registration successful!",
        registrationId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
