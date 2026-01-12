import { NextRequest, NextResponse } from "next/server";

const DIRECTUS_BASE_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

export async function POST(request: NextRequest) {
  try {
    // Parse request body with error handling
    let body;
    try {
      body = await request.json();
    } catch (parseError: any) {
      console.error("Error parsing request body:", parseError);
      return NextResponse.json(
        { error: "Invalid JSON in request body", message: parseError.message },
        { status: 400 }
      );
    }

    const url = `${DIRECTUS_BASE_URL}/items/Contact`;

    console.log("Sending POST request to:", url);
    console.log("Request body:", body);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("Directus response status:", response.status);
    console.log(
      "Directus response headers:",
      Object.fromEntries(response.headers.entries())
    );

    // Get response text first
    const responseText = await response.text();
    console.log("Directus raw response:", responseText);

    if (!response.ok) {
      // Return the actual Directus error response
      try {
        const errorData = responseText
          ? JSON.parse(responseText)
          : { error: "No error details" };
        return NextResponse.json(errorData, { status: response.status });
      } catch {
        return NextResponse.json(
          {
            error: "Failed to create contact",
            details: responseText || "No error details available",
            status: response.status,
          },
          { status: response.status }
        );
      }
    }

    // Handle empty response - Directus sometimes returns 200 with empty body
    if (!responseText || responseText.trim() === "") {
      console.log("Empty response from Directus (200 OK) - returning success");
      return NextResponse.json({
        data: null,
        message: "Contact created successfully (empty response)",
      });
    }

    // Parse and return the actual Directus response
    try {
      const data = JSON.parse(responseText);
      return NextResponse.json(data);
    } catch (jsonError: any) {
      console.error("Error parsing Directus response as JSON:", jsonError);
      console.error("Response text:", responseText);
      // Return the raw response if JSON parsing fails
      return NextResponse.json(
        {
          error: "Invalid JSON response from Directus",
          rawResponse: responseText,
          message: jsonError.message,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
