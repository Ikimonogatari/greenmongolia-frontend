import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use Next.js API route proxy to avoid CORS issues
// The API routes handle the Directus connection server-side
const API_BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Contact interface matching the request body structure
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  about: string;
  status?: string; // Optional, defaults to "published"
}

// Contact response from Directus
export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  about: string;
  status: string;
  date_created?: string;
  date_updated?: string;
  [key: string]: unknown; // Allow for additional fields from Directus
}

// Response type from Directus for POST requests
export interface ContactResponse {
  data: Contact;
}

// RTK Query API slice for Contacts
export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/api/contacts`,
    prepareHeaders: (headers) => {
      // Add any authentication headers if needed
      // headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    // POST - Submit contact form
    submitContact: builder.mutation<ContactResponse, ContactFormData>({
      query: (contactData) => ({
        url: "",
        method: "POST",
        body: {
          name: contactData.name,
          phone: contactData.phone,
          email: contactData.email,
          about: contactData.about,
          status: contactData.status || "published", // Default to "published" if not provided
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useSubmitContactMutation } = contactsApi;
