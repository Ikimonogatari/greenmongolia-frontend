// Common types
export interface DirectusFile {
  id: string;
  filename_download: string;
  title?: string;
  width?: number;
  height?: number;
}

export interface Language {
  code: string;
  name?: string;
}

export interface Translation {
  id: string;
  languages_code: Language;
}

// ============================================
// NEWS TYPES
// ============================================
export interface NewsTranslation extends Translation {
  title: string;
  description?: string;
  body?: string;
}

export interface NewsTag {
  id: string;
  status?: string;
  sort?: number;
  translations: Array<{
    id: string;
    name: string;
    languages_code: Language;
  }>;
}

export interface News {
  id: string;
  status?: string;
  sort?: number;
  date_created?: string;
  date_updated?: string;
  user_created?: string;
  user_updated?: string;
  image?: DirectusFile;
  cover_image?: DirectusFile;
  translations: NewsTranslation[];
  tags?: Array<{
    id: string;
    news_tag_id: NewsTag;
  }>;
  related_news?: Array<{
    id: string;
    related_news_id: {
      id: string;
      translations: Array<{
        title: string;
        description?: string;
        languages_code: Language;
      }>;
    };
  }>;
}

// ============================================
// ACTIVITY TYPES
// ============================================
export interface ActivityTranslation extends Translation {
  name: string;
  description?: string;
  body?: string;
}

export interface Activity {
  id: string;
  status?: string;
  sort?: number;
  date_created?: string;
  date_updated?: string;
  user_created?: string;
  user_updated?: string;
  image?: DirectusFile;
  translations: ActivityTranslation[];
}

// ============================================
// EVENT TYPES
// ============================================
export interface EventTranslation extends Translation {
  name: string;
  description?: string;
  body?: string;
}

export interface Event {
  id: string;
  status?: string;
  sort?: number;
  date_created?: string;
  date_updated?: string;
  user_created?: string;
  user_updated?: string;
  start_date?: string;
  end_date?: string;
  location?: unknown; // GeoJSON type
  image?: DirectusFile;
  cover_image?: DirectusFile;
  translations: EventTranslation[];
}

// ============================================
// HOME SLIDER TYPES
// ============================================
export interface HomeSliderTranslation extends Translation {
  title?: string;
  slogan?: string;
}

export interface HomeSlider {
  id: string;
  status?: string;
  sort?: number;
  date_created?: string;
  date_updated?: string;
  user_created?: string;
  user_updated?: string;
  image?: DirectusFile;
  translations: HomeSliderTranslation[];
}

// ============================================
// PARTNERS TYPES
// ============================================
export interface PartnerTranslation extends Translation {
  name: string;
  description?: string;
}

export interface Partner {
  id: string;
  status?: string;
  sort?: number;
  date_created?: string;
  date_updated?: string;
  user_created?: string;
  user_updated?: string;
  type?: unknown; // JSON field
  partner_logo?: DirectusFile;
  image?: DirectusFile;
  translations: PartnerTranslation[];
}

// ============================================
// PROJECTS TYPES
// ============================================
export interface ProjectTranslation extends Translation {
  name: string;
  description?: string;
  body?: string;
}

export interface Project {
  id: string;
  status?: string;
  sort?: number;
  date_created?: string;
  date_updated?: string;
  user_created?: string;
  user_updated?: string;
  start_date?: string;
  type?: unknown; // JSON field
  image?: DirectusFile;
  cover_image?: DirectusFile;
  translations: ProjectTranslation[];
}

// ============================================
// COUNCIL MEMBERS TYPES
// ============================================
export interface CouncilMemberTranslation extends Translation {
  first_name: string;
  last_name: string;
  role?: string;
  bio?: string;
}

export interface Council {
  id: string;
  translations: Array<{
    name: string;
    languages_code: Language;
  }>;
}

export interface CouncilMember {
  id: string;
  status?: string;
  sort?: number;
  date_created?: string;
  date_updated?: string;
  user_created?: string;
  user_updated?: string;
  phone?: string;
  email?: string;
  photo?: DirectusFile;
  council?: Council;
  translations: CouncilMemberTranslation[];
}

// ============================================
// CONTACT TYPES
// ============================================
export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  about: string;
  status?: string;
  date_created?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  about: string;
  status?: string;
}

// ============================================
// RESPONSE WRAPPER TYPES
// ============================================
export interface GraphQLResponse<T> {
  data: T;
}

export interface NewsResponse {
  news: News[];
}

export interface NewsItemResponse {
  news_by_id: News;
}

export interface ActivitiesResponse {
  activity: Activity[];
}

export interface ActivityItemResponse {
  activity_by_id: Activity;
}

export interface EventsResponse {
  event: Event[];
}

export interface EventItemResponse {
  event_by_id: Event;
}

export interface HomeSlidersResponse {
  home_slider: HomeSlider[];
}

export interface NewsTagsResponse {
  news_tag: NewsTag[];
}

export interface PartnersResponse {
  partners: Partner[];
}

export interface PartnerItemResponse {
  partners_by_id: Partner;
}

export interface ProjectsResponse {
  projects: Project[];
}

export interface ProjectItemResponse {
  projects_by_id: Project;
}

export interface CouncilMembersResponse {
  council_members: CouncilMember[];
}

export interface CouncilMemberItemResponse {
  council_members_by_id: CouncilMember;
}

export interface ContactResponse {
  create_contact_item: Contact;
}
