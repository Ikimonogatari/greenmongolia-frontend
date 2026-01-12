import { NextRequest, NextResponse } from "next/server";

const DIRECTUS_BASE_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const url = `${DIRECTUS_BASE_URL}/items/Articles`;

    // Forward query parameters
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      params.append(key, value);
    });

    // Add default fields and sort if not provided
    if (!params.has("fields")) {
      params.append("fields", "*.*");
    }
    if (!params.has("sort")) {
      params.append("sort", "-date_created");
    }

    const queryString = params.toString();
    const finalUrl = queryString ? `${url}?${queryString}` : url;

    console.log("Fetching articles from:", finalUrl);

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
            error: "Failed to fetch articles",
            details: responseText || "No error details available",
            status: response.status,
          },
          { status: response.status }
        );
      }
    }

    // Handle empty response - Directus sometimes returns 200 with empty body
    if (!responseText || responseText.trim() === "") {
      console.log(
        "Empty response from Directus (200 OK) - returning empty data structure"
      );
      return NextResponse.json({ data: [] });
    }

    // Parse and return the actual Directus response
    try {
      const data = JSON.parse(responseText);
      return NextResponse.json(data);
    } catch (jsonError: unknown) {
      console.error("Error parsing Directus response as JSON:", jsonError);
      console.error("Response text:", responseText);
      // Return the raw response if JSON parsing fails
      const errorMessage = jsonError instanceof Error ? jsonError.message : "Unknown error";
      return NextResponse.json(
        {
          error: "Invalid JSON response from Directus",
          rawResponse: responseText,
          message: errorMessage,
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error("Error fetching articles:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      {
        error: "Internal server error",
        message: errorMessage,
        stack:
          process.env.NODE_ENV === "development" ? errorStack : undefined,
      },
      { status: 500 }
    );
  }
}
