import { NextRequest, NextResponse } from "next/server";

const DIRECTUS_BASE_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const searchParams = request.nextUrl.searchParams;

    const url = `${DIRECTUS_BASE_URL}/items/Articles/${id}`;

    // Forward query parameters
    const paramsObj = new URLSearchParams();
    searchParams.forEach((value, key) => {
      paramsObj.append(key, value);
    });

    // Add default fields if not provided
    if (!paramsObj.has("fields")) {
      paramsObj.append("fields", "*.*");
    }

    const queryString = paramsObj.toString();
    const finalUrl = queryString ? `${url}?${queryString}` : url;

    console.log("Fetching article from:", finalUrl);

    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Directus response status:", response.status);

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
            error: "Failed to fetch article",
            details: responseText || "No error details available",
            status: response.status,
          },
          { status: response.status }
        );
      }
    }

    // Handle empty response - Directus sometimes returns 200 with empty body
    if (!responseText || responseText.trim() === "") {
      console.log("Empty response from Directus (200 OK) - returning null");
      return NextResponse.json({ data: null });
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
    console.error("Error fetching article:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message,
        stack:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
