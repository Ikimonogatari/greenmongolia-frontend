import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use Next.js API route proxy to avoid CORS issues
// The API routes handle the Directus connection server-side
const API_BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Article interface matching Directus schema and component requirements
export interface Article {
  id: number;
  title: string;
  content?: string;
  description?: string;
  slug?: string;
  status?: string;
  date_created?: string;
  date_updated?: string;
  author?: string;
  thumb?: string;
  thumbFull?: string;
  image?: string | { id: string; filename_download: string }; // Directus file field
  comments?: number;
  // Allow for additional fields from Directus
  [key: string]: unknown;
}

// Component-friendly article format
export interface BlogArticle {
  id: number;
  thumb?: string;
  thumbFull?: string;
  title: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  author?: string;
  full_date?: string;
  description?: string;
  comments?: number;
}

// Helper function to format date from Directus format (ISO string) to component format
const formatDate = (
  dateString?: string
): { day: string; month: string; year: string; full_date: string } => {
  if (!dateString) {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear().toString();
    return {
      day,
      month,
      year,
      full_date: `${day} ${month}, ${year}`,
    };
  }

  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear().toString();

  return {
    day,
    month,
    year,
    full_date: `${day} ${month}, ${year}`,
  };
};

// Transform Directus article to blog format
export const transformArticleToBlog = (article: Article): BlogArticle => {
  const dateInfo = formatDate(article.date_created || article.date_updated);

  // Handle Directus file field - can be a string URL or an object
  let thumb = article.thumb;
  let thumbFull = article.thumbFull;

  if (article.image) {
    if (typeof article.image === "string") {
      thumb = article.image;
      thumbFull = article.image;
    } else if (article.image.filename_download) {
      // If it's a Directus file object, construct the URL
      const directusUrl =
        process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";
      thumb = `${directusUrl}/assets/${article.image.id}/${article.image.filename_download}`;
      thumbFull = thumb;
    }
  }

  return {
    id: article.id,
    thumb: thumb || article.thumb,
    thumbFull: thumbFull || article.thumbFull || thumb || article.thumb,
    title: article.title,
    date: dateInfo,
    author: article.author || "Admin",
    full_date: dateInfo.full_date,
    description:
      article.description || article.content?.substring(0, 200) || "",
    comments: article.comments || 0,
  };
};

// Response type from Directus
export interface ArticlesResponse {
  data: Article[];
  meta?: {
    total_count?: number;
    filter_count?: number;
  };
}

// RTK Query API slice for Articles
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/api/Articles`,
    prepareHeaders: (headers) => {
      // Add any authentication headers if needed
      // headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Articles"],
  endpoints: (builder) => ({
    // Get all articles
    getArticles: builder.query<ArticlesResponse, void>({
      query: () => ({
        url: "",
        method: "GET",
        params: {
          fields: "*.*", // Get all fields including relations
          sort: ["-date_created"], // Sort by date descending
        },
      }),
      providesTags: ["Articles"],
    }),
    // Get articles with query parameters (for filtering, sorting, etc.)
    getArticlesWithParams: builder.query<ArticlesResponse, Record<string, unknown>>(
      {
        query: (params) => ({
          url: "",
          method: "GET",
          params,
        }),
        providesTags: ["Articles"],
      }
    ),
    // Get single article by ID
    getArticleById: builder.query<Article, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
        params: {
          fields: "*.*", // Get all fields including relations
        },
      }),
      transformResponse: (response: Article | { data: Article }): Article => {
        // Directus may return the item directly or wrapped in a data object
        if ("data" in response && response.data && typeof response.data === 'object' && 'id' in response.data && 'title' in response.data) {
          return response.data as Article;
        }
        if ('id' in response && 'title' in response) {
          return response as Article;
        }
        // Fallback: return empty article structure
        return { id: 0, title: '' } as Article;
      },
      providesTags: (result, error, id) => [{ type: "Articles", id }],
    }),
    // Get article by slug (if you have a slug field)
    getArticleBySlug: builder.query<Article, string>({
      query: (slug) => ({
        url: "",
        method: "GET",
        params: {
          filter: {
            slug: {
              _eq: slug,
            },
          },
        },
      }),
      transformResponse: (response: ArticlesResponse): Article => {
        // Directus returns an array, so we take the first item
        return response.data?.[0] || ({} as Article);
      },
      providesTags: (result, error, slug) => [{ type: "Articles", id: slug }],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetArticlesQuery,
  useGetArticlesWithParamsQuery,
  useGetArticleByIdQuery,
  useGetArticleBySlugQuery,
} = articlesApi;

// transformArticleToBlog is already exported above
