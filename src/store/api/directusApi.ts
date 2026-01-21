import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlClient } from "@/lib/graphql/client";
import {
  GET_NEWS_QUERY,
  GET_NEWS_BY_ID_QUERY,
  GET_ACTIVITIES_QUERY,
  GET_ACTIVITY_BY_ID_QUERY,
  GET_EVENTS_QUERY,
  GET_EVENT_BY_ID_QUERY,
  GET_HOME_SLIDERS_QUERY,
  GET_NEWS_TAGS_QUERY,
  GET_PARTNERS_QUERY,
  GET_PARTNER_BY_ID_QUERY,
  GET_PROJECTS_QUERY,
  GET_PROJECT_BY_ID_QUERY,
  GET_COUNCIL_MEMBERS_QUERY,
  GET_COUNCIL_MEMBER_BY_ID_QUERY,
  CREATE_CONTACT_MUTATION,
} from "@/lib/graphql/queries";
import type {
  News,
  Activity,
  Event,
  HomeSlider,
  NewsTag,
  Partner,
  Project,
  CouncilMember,
  Contact,
  ContactFormData,
  NewsResponse,
  NewsItemResponse,
  ActivitiesResponse,
  ActivityItemResponse,
  EventsResponse,
  EventItemResponse,
  HomeSlidersResponse,
  NewsTagsResponse,
  PartnersResponse,
  PartnerItemResponse,
  ProjectsResponse,
  ProjectItemResponse,
  CouncilMembersResponse,
  CouncilMemberItemResponse,
  ContactResponse,
} from "@/lib/graphql/types";

// Custom base query for GraphQL
const graphqlBaseQuery =
  () =>
  async ({ query, variables }: { query: string; variables?: Record<string, unknown> }) => {
    try {
      const data = await graphqlClient.request(query, variables);
      return { data };
    } catch (error) {
      return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
    }
  };

// Main Directus API with GraphQL
export const directusApi = createApi({
  reducerPath: "directusApi",
  baseQuery: graphqlBaseQuery(),
  tagTypes: [
    "News",
    "Activity",
    "Event",
    "HomeSlider",
    "NewsTag",
    "Partner",
    "Project",
    "CouncilMember",
    "Contact",
  ],
  endpoints: (builder) => ({
    // ============================================
    // NEWS ENDPOINTS
    // ============================================
    getNews: builder.query<News[], void>({
      query: () => ({
        query: GET_NEWS_QUERY,
      }),
      transformResponse: (response: NewsResponse) => response.news,
      providesTags: ["News"],
    }),
    getNewsById: builder.query<News, string>({
      query: (id) => ({
        query: GET_NEWS_BY_ID_QUERY,
        variables: { id },
      }),
      transformResponse: (response: NewsItemResponse) => response.news_by_id,
      providesTags: (_result, _error, id) => [{ type: "News", id }],
    }),

    // ============================================
    // ACTIVITY ENDPOINTS
    // ============================================
    getActivities: builder.query<Activity[], void>({
      query: () => ({
        query: GET_ACTIVITIES_QUERY,
      }),
      transformResponse: (response: ActivitiesResponse) => response.activity,
      providesTags: ["Activity"],
    }),
    getActivityById: builder.query<Activity, string>({
      query: (id) => ({
        query: GET_ACTIVITY_BY_ID_QUERY,
        variables: { id },
      }),
      transformResponse: (response: ActivityItemResponse) => response.activity_by_id,
      providesTags: (_result, _error, id) => [{ type: "Activity", id }],
    }),

    // ============================================
    // EVENT ENDPOINTS
    // ============================================
    getEvents: builder.query<Event[], void>({
      query: () => ({
        query: GET_EVENTS_QUERY,
      }),
      transformResponse: (response: EventsResponse) => response.event,
      providesTags: ["Event"],
    }),
    getEventById: builder.query<Event, string>({
      query: (id) => ({
        query: GET_EVENT_BY_ID_QUERY,
        variables: { id },
      }),
      transformResponse: (response: EventItemResponse) => response.event_by_id,
      providesTags: (_result, _error, id) => [{ type: "Event", id }],
    }),

    // ============================================
    // HOME SLIDER ENDPOINTS
    // ============================================
    getHomeSliders: builder.query<HomeSlider[], void>({
      query: () => ({
        query: GET_HOME_SLIDERS_QUERY,
      }),
      transformResponse: (response: HomeSlidersResponse) => response.home_slider,
      providesTags: ["HomeSlider"],
    }),

    // ============================================
    // NEWS TAG ENDPOINTS
    // ============================================
    getNewsTags: builder.query<NewsTag[], void>({
      query: () => ({
        query: GET_NEWS_TAGS_QUERY,
      }),
      transformResponse: (response: NewsTagsResponse) => response.news_tag,
      providesTags: ["NewsTag"],
    }),

    // ============================================
    // PARTNER ENDPOINTS
    // ============================================
    getPartners: builder.query<Partner[], void>({
      query: () => ({
        query: GET_PARTNERS_QUERY,
      }),
      transformResponse: (response: PartnersResponse) => response.partners,
      providesTags: ["Partner"],
    }),
    getPartnerById: builder.query<Partner, string>({
      query: (id) => ({
        query: GET_PARTNER_BY_ID_QUERY,
        variables: { id },
      }),
      transformResponse: (response: PartnerItemResponse) => response.partners_by_id,
      providesTags: (_result, _error, id) => [{ type: "Partner", id }],
    }),

    // ============================================
    // PROJECT ENDPOINTS
    // ============================================
    getProjects: builder.query<Project[], void>({
      query: () => ({
        query: GET_PROJECTS_QUERY,
      }),
      transformResponse: (response: ProjectsResponse) => response.projects,
      providesTags: ["Project"],
    }),
    getProjectById: builder.query<Project, string>({
      query: (id) => ({
        query: GET_PROJECT_BY_ID_QUERY,
        variables: { id },
      }),
      transformResponse: (response: ProjectItemResponse) => response.projects_by_id,
      providesTags: (_result, _error, id) => [{ type: "Project", id }],
    }),

    // ============================================
    // COUNCIL MEMBER ENDPOINTS
    // ============================================
    getCouncilMembers: builder.query<CouncilMember[], void>({
      query: () => ({
        query: GET_COUNCIL_MEMBERS_QUERY,
      }),
      transformResponse: (response: CouncilMembersResponse) => response.council_members,
      providesTags: ["CouncilMember"],
    }),
    getCouncilMemberById: builder.query<CouncilMember, string>({
      query: (id) => ({
        query: GET_COUNCIL_MEMBER_BY_ID_QUERY,
        variables: { id },
      }),
      transformResponse: (response: CouncilMemberItemResponse) => response.council_members_by_id,
      providesTags: (_result, _error, id) => [{ type: "CouncilMember", id }],
    }),

    // ============================================
    // CONTACT ENDPOINT
    // ============================================
    createContact: builder.mutation<Contact, ContactFormData>({
      query: (contactData) => ({
        query: CREATE_CONTACT_MUTATION,
        variables: {
          data: {
            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone,
            about: contactData.about,
            status: contactData.status || "published",
          },
        },
      }),
      transformResponse: (response: ContactResponse) => response.create_contact_item,
      invalidatesTags: ["Contact"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  // News
  useGetNewsQuery,
  useGetNewsByIdQuery,
  // Activity
  useGetActivitiesQuery,
  useGetActivityByIdQuery,
  // Event
  useGetEventsQuery,
  useGetEventByIdQuery,
  // Home Slider
  useGetHomeSlidersQuery,
  // News Tags
  useGetNewsTagsQuery,
  // Partners
  useGetPartnersQuery,
  useGetPartnerByIdQuery,
  // Projects
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  // Council Members
  useGetCouncilMembersQuery,
  useGetCouncilMemberByIdQuery,
  // Contact
  useCreateContactMutation,
} = directusApi;

// Helper function to get image URL from Directus file
export const getDirectusImageUrl = (file?: { id: string; filename_download: string }) => {
  if (!file) return undefined;
  const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "https://cms.green-mongolia.com";
  return `${baseUrl}/assets/${file.id}/${file.filename_download}`;
};

// Helper function to get translation by language code
export function getTranslation<T extends { languages_code: { code: string } }>(
  translations: T[],
  languageCode: string = "en-US"
): T | undefined {
  return translations.find((t) => t.languages_code.code === languageCode) || translations[0];
}
