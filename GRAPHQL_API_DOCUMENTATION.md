# GraphQL API Documentation - Green Mongolia Hub

## 🚀 Overview

This project now uses **GraphQL** to communicate with the Directus CMS at [https://cms.green-mongolia.com/graphql](https://cms.green-mongolia.com/graphql).

All 8 data collections have been integrated with proper TypeScript types, RTK Query hooks, and helper functions.

---

## 📦 Integrated Collections

| # | Collection | GraphQL Type | Items | Status |
|---|------------|--------------|-------|--------|
| 1 | News | `news` | Articles, blog posts | ✅ Integrated |
| 2 | Activities | `activity` | Organization activities | ✅ Integrated |
| 3 | Events | `event` | Events with dates & locations | ✅ Integrated |
| 4 | Home Slider | `home_slider` | Homepage carousel | ✅ Integrated |
| 5 | News Tags | `news_tag` | Tags for news articles | ✅ Integrated |
| 6 | Partners | `partners` | Partner organizations | ✅ Integrated |
| 7 | Projects | `projects` | Organization projects | ✅ Integrated |
| 8 | Council Members | `council_members` | Board members | ✅ Integrated |

**Bonus:** Contact form submission mutation is also included.

---

## 🔧 Tech Stack

- **GraphQL Client:** [graphql-request](https://github.com/jasonkuhrt/graphql-request)
- **State Management:** Redux Toolkit (RTK Query)
- **Type Safety:** Full TypeScript types for all collections
- **Translations:** Multi-language support (English, Mongolian)
- **Image Handling:** Direct Directus asset URLs

---

## 📁 Project Structure

```
src/
├── lib/
│   └── graphql/
│       ├── client.ts        # GraphQL client configuration
│       ├── queries.ts       # All GraphQL queries & mutations
│       └── types.ts         # TypeScript interfaces
├── store/
│   ├── api/
│   │   ├── directusApi.ts   # Main RTK Query API slice
│   │   ├── articlesApi.ts   # (OLD - can be deprecated)
│   │   └── contactsApi.ts   # (OLD - can be deprecated)
│   └── store.tsx            # Redux store configuration
└── components/
    └── test/
        └── DirectusApiTest.tsx  # API test component
```

---

## 🎯 Usage

### 1. Environment Variables

Add to your `.env.local`:

```bash
NEXT_PUBLIC_DIRECTUS_URL=https://cms.green-mongolia.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Using Hooks in Components

```typescript
"use client";
import { 
  useGetNewsQuery,
  useGetActivitiesQuery,
  getDirectusImageUrl,
  getTranslation
} from "@/store/api/directusApi";

export default function MyComponent() {
  // Fetch all news
  const { data: news, isLoading, error } = useGetNewsQuery();

  // Fetch single news item
  const { data: newsItem } = useGetNewsByIdQuery("9");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading news</p>;

  return (
    <div>
      {news?.map(item => {
        const translation = getTranslation(item.translations, "en-US");
        const imageUrl = getDirectusImageUrl(item.image);
        
        return (
          <div key={item.id}>
            <h2>{translation?.title}</h2>
            <p>{translation?.description}</p>
            {imageUrl && <img src={imageUrl} alt={translation?.title} />}
          </div>
        );
      })}
    </div>
  );
}
```

---

## 📚 Available Hooks

### News
- `useGetNewsQuery()` - Get all news
- `useGetNewsByIdQuery(id: string)` - Get single news item

### Activities
- `useGetActivitiesQuery()` - Get all activities
- `useGetActivityByIdQuery(id: string)` - Get single activity

### Events
- `useGetEventsQuery()` - Get all events
- `useGetEventByIdQuery(id: string)` - Get single event

### Home Slider
- `useGetHomeSlidersQuery()` - Get all slides

### News Tags
- `useGetNewsTagsQuery()` - Get all tags

### Partners
- `useGetPartnersQuery()` - Get all partners
- `useGetPartnerByIdQuery(id: string)` - Get single partner

### Projects
- `useGetProjectsQuery()` - Get all projects
- `useGetProjectByIdQuery(id: string)` - Get single project

### Council Members
- `useGetCouncilMembersQuery()` - Get all council members
- `useGetCouncilMemberByIdQuery(id: string)` - Get single member

### Contact
- `useCreateContactMutation()` - Submit contact form

---

## 🛠 Helper Functions

### Get Image URL
```typescript
import { getDirectusImageUrl } from "@/store/api/directusApi";

const imageUrl = getDirectusImageUrl(file); 
// Returns: https://cms.green-mongolia.com/assets/{id}/{filename}
```

### Get Translation by Language
```typescript
import { getTranslation } from "@/store/api/directusApi";

const translation = getTranslation(item.translations, "en-US");
// Returns the English translation or falls back to first available
```

---

## 🧪 Testing

Visit [http://localhost:3000/test-api](http://localhost:3000/test-api) to see all API integrations in action.

The test page will show:
- ✅ Success status for each collection
- 📊 Total items count
- 📝 Sample data from each collection
- ❌ Error messages if any

---

## 📝 GraphQL Queries

All queries fetch **full data** including:
- All main fields (id, status, dates, etc.)
- **Related data** (not just IDs)
- **Complete translations** with language codes
- **Image files** with download URLs
- **Related items** (tags, related news, council info, etc.)

Example News Query:
```graphql
query GetNews {
  news {
    id
    status
    date_created
    image {
      id
      filename_download
      title
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
        }
      }
    }
  }
}
```

---

## 🔄 Migration from Old API

### Before (REST API):
```typescript
import { useGetArticlesQuery } from "@/store/api/articlesApi";
const { data } = useGetArticlesQuery();
```

### After (GraphQL):
```typescript
import { useGetNewsQuery } from "@/store/api/directusApi";
const { data } = useGetNewsQuery();
```

**Benefits:**
- ✅ Fetch only what you need
- ✅ Single request for nested data
- ✅ Better TypeScript support
- ✅ Strongly typed responses
- ✅ Automatic caching & refetching
- ✅ Relations fully populated (no manual joins)

---

## 🌍 Multi-Language Support

All collections with translations return data in this format:

```typescript
{
  id: "1",
  translations: [
    {
      languages_code: { code: "en-US", name: "English (United States)" },
      title: "Green Mongolia Initiative",
      description: "..."
    },
    {
      languages_code: { code: "mn-MN", name: "Mongolian" },
      title: "Ногоон Монгол санаачилга",
      description: "..."
    }
  ]
}
```

Use the `getTranslation()` helper to get the right language:

```typescript
const enTranslation = getTranslation(item.translations, "en-US");
const mnTranslation = getTranslation(item.translations, "mn-MN");
```

---

## 🔐 Authentication

Currently, all queries are **public** (no authentication required).

If you need to add authentication:

1. Update `src/lib/graphql/client.ts`:
```typescript
export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});
```

2. Get token from your auth system

---

## 📊 Data Flow

```
Component
    ↓
RTK Query Hook (useGetNewsQuery)
    ↓
directusApi.ts
    ↓
GraphQL Client (client.ts)
    ↓
GraphQL Query (queries.ts)
    ↓
Directus CMS (cms.green-mongolia.com/graphql)
    ↓
Response with Types (types.ts)
    ↓
Redux Cache
    ↓
Component (re-render with data)
```

---

## 🚦 Error Handling

All hooks return standard RTK Query results:

```typescript
const { data, isLoading, isError, error, refetch } = useGetNewsQuery();

if (isLoading) return <LoadingSpinner />;
if (isError) return <ErrorMessage error={error} />;
if (!data) return <NoData />;

return <NewsGrid news={data} />;
```

---

## 🎨 Image Handling

All images from Directus are returned with:
- `id` - File ID
- `filename_download` - Original filename
- `title` - Image title (optional)
- `width` & `height` - Dimensions (optional)

Use the helper to construct URLs:

```typescript
const imageUrl = getDirectusImageUrl(item.image);
// https://cms.green-mongolia.com/assets/{id}/{filename}
```

Or manually:
```typescript
const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${item.image.id}/${item.image.filename_download}`;
```

---

## 📌 Notes

1. **All relations are populated** - You get full objects, not just IDs
2. **Translations are included** - Multi-language support out of the box
3. **Images are accessible** - Direct URLs to Directus assets
4. **Type safety everywhere** - Full TypeScript coverage
5. **RTK Query caching** - Automatic cache management
6. **Error boundaries** - Proper error handling on all queries

---

## 🤝 Contributing

When adding new collections:

1. Add GraphQL query to `src/lib/graphql/queries.ts`
2. Add TypeScript types to `src/lib/graphql/types.ts`
3. Add endpoint to `src/store/api/directusApi.ts`
4. Export hook from the API slice
5. Update this documentation

---

## 📞 Support

For issues with:
- **GraphQL API**: Check [Directus GraphQL docs](https://docs.directus.io/reference/introduction.html)
- **RTK Query**: Check [Redux Toolkit docs](https://redux-toolkit.js.org/rtk-query/overview)
- **TypeScript**: Check type definitions in `types.ts`

---

## ✅ Checklist

- [x] Install graphql & graphql-request
- [x] Create GraphQL client
- [x] Write all queries for 8 collections
- [x] Create TypeScript types
- [x] Setup RTK Query API slice
- [x] Integrate with Redux store
- [x] Create helper functions
- [x] Add test component
- [x] Update environment variables
- [x] Build successfully
- [ ] Update existing components to use new API
- [ ] Remove old REST API files (optional)
- [ ] Deploy to production

---

**Last Updated:** January 21, 2026  
**API Version:** 1.0  
**GraphQL Endpoint:** https://cms.green-mongolia.com/graphql
