import { gql } from 'graphql-request';

// ============================================
// NEWS QUERIES
// ============================================
export const GET_NEWS_QUERY = gql`
  query GetNews {
    news {
      id
      status
      sort
      date_created
      date_updated
      user_created
      user_updated
      image {
        id
        filename_download
        title
        width
        height
      }
      cover_image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        title
        description
        body
        languages_code {
          code
          name
        }
      }
      tags {
        id
        news_tag_id {
          id
          translations {
            id
            name
            languages_code {
              code
              name
            }
          }
        }
      }
      related_news {
        id
        related_news_id {
          id
          translations {
            title
            description
            languages_code {
              code
            }
          }
        }
      }
    }
  }
`;

export const GET_NEWS_BY_ID_QUERY = gql`
  query GetNewsById($id: ID!) {
    news_by_id(id: $id) {
      id
      status
      sort
      date_created
      date_updated
      image {
        id
        filename_download
        title
        width
        height
      }
      cover_image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        title
        description
        body
        languages_code {
          code
          name
        }
      }
      tags {
        news_tag_id {
          id
          translations {
            name
            languages_code {
              code
            }
          }
        }
      }
    }
  }
`;

// ============================================
// ACTIVITY QUERIES
// ============================================
export const GET_ACTIVITIES_QUERY = gql`
  query GetActivities {
    activity {
      id
      status
      sort
      date_created
      date_updated
      user_created
      user_updated
      image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        description
        body
        languages_code {
          code
          name
        }
      }
    }
  }
`;

export const GET_ACTIVITY_BY_ID_QUERY = gql`
  query GetActivityById($id: ID!) {
    activity_by_id(id: $id) {
      id
      status
      sort
      date_created
      date_updated
      image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        description
        body
        languages_code {
          code
          name
        }
      }
    }
  }
`;

// ============================================
// EVENT QUERIES
// ============================================
export const GET_EVENTS_QUERY = gql`
  query GetEvents {
    event {
      id
      status
      sort
      date_created
      date_updated
      user_created
      user_updated
      start_date
      end_date
      location
      image {
        id
        filename_download
        title
        width
        height
      }
      cover_image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        description
        body
        languages_code {
          code
          name
        }
      }
    }
  }
`;

export const GET_EVENT_BY_ID_QUERY = gql`
  query GetEventById($id: ID!) {
    event_by_id(id: $id) {
      id
      status
      sort
      date_created
      date_updated
      start_date
      end_date
      location
      image {
        id
        filename_download
        title
        width
        height
      }
      cover_image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        description
        body
        languages_code {
          code
          name
        }
      }
    }
  }
`;

// ============================================
// HOME SLIDER QUERIES
// ============================================
export const GET_HOME_SLIDERS_QUERY = gql`
  query GetHomeSliders {
    home_slider {
      id
      status
      sort
      date_created
      date_updated
      user_created
      user_updated
      image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        title
        slogan
        languages_code {
          code
          name
        }
      }
    }
  }
`;

// ============================================
// NEWS TAG QUERIES
// ============================================
export const GET_NEWS_TAGS_QUERY = gql`
  query GetNewsTags {
    news_tag {
      id
      status
      sort
      translations {
        id
        name
        languages_code {
          code
          name
        }
      }
    }
  }
`;

// ============================================
// PARTNERS QUERIES
// ============================================
export const GET_PARTNERS_QUERY = gql`
  query GetPartners {
    partners {
      id
      status
      sort
      date_created
      date_updated
      user_created
      user_updated
      type
      partner_logo {
        id
        filename_download
        title
        width
        height
      }
      image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        description
        languages_code {
          code
          name
        }
      }
    }
  }
`;

export const GET_PARTNER_BY_ID_QUERY = gql`
  query GetPartnerById($id: ID!) {
    partners_by_id(id: $id) {
      id
      status
      sort
      date_created
      date_updated
      type
      partner_logo {
        id
        filename_download
        title
        width
        height
      }
      image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        description
        languages_code {
          code
          name
        }
      }
    }
  }
`;

// ============================================
// PROJECTS QUERIES
// ============================================
export const GET_PROJECTS_QUERY = gql`
  query GetProjects {
    projects {
      id
      status
      sort
      date_created
      date_updated
      user_created
      user_updated
      start_date
      type
      image {
        id
        filename_download
        title
        width
        height
      }
      cover_image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        description
        body
        languages_code {
          code
          name
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_ID_QUERY = gql`
  query GetProjectById($id: ID!) {
    projects_by_id(id: $id) {
      id
      status
      sort
      date_created
      date_updated
      start_date
      type
      image {
        id
        filename_download
        title
        width
        height
      }
      cover_image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        description
        body
        languages_code {
          code
          name
        }
      }
    }
  }
`;

// ============================================
// COUNCIL MEMBERS QUERIES
// ============================================
export const GET_COUNCIL_MEMBERS_QUERY = gql`
  query GetCouncilMembers {
    council_members {
      id
      status
      sort
      date_created
      date_updated
      user_created
      user_updated
      phone
      email
      photo {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        first_name
        last_name
        role
        bio
        languages_code {
          code
          name
        }
      }
    }
  }
`;

export const GET_COUNCIL_MEMBER_BY_ID_QUERY = gql`
  query GetCouncilMemberById($id: ID!) {
    council_members_by_id(id: $id) {
      id
      status
      sort
      date_created
      date_updated
      phone
      email
      photo {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        first_name
        last_name
        role
        bio
        languages_code {
          code
          name
        }
      }
    }
  }
`;

// ============================================
// TESTIMONIALS QUERIES
// ============================================
export const GET_TESTIMONIALS_QUERY = gql`
  query GetTestimonials {
    testimonials {
      id
      status
      sort
      date_created
      date_updated
      user_created
      user_updated
      image {
        id
        filename_download
        title
        width
        height
      }
      translations {
        id
        name
        position
        testimonial
        languages_code {
          code
          name
        }
      }
    }
  }
`;

// ============================================
// CONTACT MUTATION
// ============================================
export const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContact($data: create_contact_input!) {
    create_contact_item(data: $data) {
      id
      name
      email
      phone
      about
      status
      date_created
    }
  }
`;
