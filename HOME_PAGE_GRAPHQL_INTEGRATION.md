# Home Page GraphQL Integration Summary

## 🎯 Overview
The home page (`/home-1`) has been successfully updated to use dynamic data from GraphQL APIs instead of static JSON data. This provides real-time content management through the Directus CMS.

---

## ✅ Updated Components

### 1. **BannerV3GraphQL** (New Component)
**File:** `/src/components/banner/BannerV3GraphQL.tsx`

**Changes:**
- ✅ Uses `useGetHomeSlidersQuery()` to fetch home slider data
- ✅ Displays published sliders sorted by sort field
- ✅ Multi-language support (English/Mongolian)
- ✅ Dynamic image loading from Directus
- ✅ Fallback to default banner if no data available
- ✅ Loading state while fetching data

**API Used:** `home_slider` collection

---

### 2. **ServiceV1GraphQL** (New Component)
**File:** `/src/components/services/ServiceV1GraphQL.tsx`

**Changes:**
- ✅ Uses `useGetActivitiesQuery()` to fetch activities
- ✅ Displays top 3 published activities sorted by sort field
- ✅ Multi-language support
- ✅ Dynamic images from Directus
- ✅ Fallback to static services if no data available
- ✅ Loading state handled

**API Used:** `activity` collection

---

### 3. **GalleryV1GraphQL** (New Component)
**File:** `/src/components/gallery/GalleryV1GraphQL.tsx`

**Changes:**
- ✅ Uses `useGetProjectsQuery()` to fetch projects
- ✅ Displays all published projects in a carousel
- ✅ Multi-language support
- ✅ Dynamic project images (cover_image or image)
- ✅ Project details with dates
- ✅ Links to project detail pages
- ✅ Loading and error states

**API Used:** `projects` collection

---

### 4. **BlogV1GraphQL** (Existing Component)
**File:** `/src/components/blog/BlogV1GraphQL.tsx`

**Status:** Already implemented - used in home page

**Changes:**
- ✅ Uses `useGetNewsQuery()` to fetch news articles
- ✅ Displays top 3 published news sorted by date
- ✅ Multi-language support
- ✅ Dynamic news images
- ✅ Links to blog detail pages
- ✅ Loading, error, and empty states

**API Used:** `news` collection

---

### 5. **ContactV1** (Updated Component)
**File:** `/src/components/contact/ContactV1.tsx`

**Changes:**
- ✅ Updated to use `useCreateContactMutation()` from `directusApi`
- ✅ Submits contact form data directly to Directus CMS
- ✅ Form validation and error handling
- ✅ Success/error toast notifications
- ✅ Loading state during submission

**API Used:** `contact` mutation

---

## 📄 Home Page Structure

**File:** `/src/app/home-1/page.tsx`

### Before:
```typescript
<BannerV3 />        // Static JSON data
<ServiceV1 />       // Static JSON data
<GalleryV1 />       // Static JSON data
<BlogV1 />          // Old REST API
<ContactV1 />       // Old REST API
```

### After:
```typescript
<BannerV3GraphQL />    // ✅ GraphQL - home_slider
<ServiceV1GraphQL />   // ✅ GraphQL - activity
<GalleryV1GraphQL />   // ✅ GraphQL - projects
<BlogV1GraphQL />      // ✅ GraphQL - news
<ContactV1 />          // ✅ GraphQL - contact mutation
```

---

## 🗄️ Collections Used

| Component | Collection | GraphQL Hook | Description |
|-----------|-----------|-------------|-------------|
| BannerV3GraphQL | `home_slider` | `useGetHomeSlidersQuery()` | Homepage carousel/banner |
| ServiceV1GraphQL | `activity` | `useGetActivitiesQuery()` | Organization activities |
| GalleryV1GraphQL | `projects` | `useGetProjectsQuery()` | Organization projects |
| BlogV1GraphQL | `news` | `useGetNewsQuery()` | News articles/blog posts |
| ContactV1 | `contact` | `useCreateContactMutation()` | Contact form submission |

---

## 🌍 Multi-Language Support

All components support multi-language content:
- **English:** `en-US`
- **Mongolian:** `mn-MN`

Language detection:
```typescript
const locale = useLocale();
const languageCode = locale === "mn" ? "mn-MN" : "en-US";
const translation = getTranslation(item.translations, languageCode);
```

---

## 🖼️ Image Handling

All images are loaded from Directus CMS:
```typescript
const imageUrl = getDirectusImageUrl(item.image);
// Returns: https://cms.green-mongolia.com/assets/{id}/{filename}
```

Images include fallbacks if not available from CMS.

---

## 📊 Data Flow

```
Home Page Component
    ↓
GraphQL Hook (e.g., useGetNewsQuery)
    ↓
directusApi.ts (RTK Query)
    ↓
GraphQL Client
    ↓
Directus CMS (cms.green-mongolia.com/graphql)
    ↓
Response with Types
    ↓
Redux Cache
    ↓
Component Re-render with Data
```

---

## ✨ Key Features

### 1. **Loading States**
All components show loading indicators while fetching data:
```typescript
if (isLoading) return <LoadingMessage />;
```

### 2. **Error Handling**
Graceful error handling with fallbacks:
```typescript
if (error) return <FallbackContent />;
```

### 3. **Empty States**
Components handle empty data gracefully:
```typescript
if (!data || data.length === 0) return <EmptyMessage />;
```

### 4. **Status Filtering**
Only published content is displayed:
```typescript
const publishedItems = data?.filter(item => item.status === "published");
```

### 5. **Sorting**
Items are sorted by their sort field or date:
```typescript
.sort((a, b) => (a.sort || 0) - (b.sort || 0))
```

---

## 🔧 Static Components (Not Updated)

The following components remain static as they don't require dynamic CMS data:

- **AboutV1** - Static about section
- **BenefitsV1** - Static benefits section
- **ProductCategory** - Static product categories
- **TestimonialV1** - Static testimonials
- **WhyChooseV1** - Static "why choose us" section

These can be updated later if dynamic content is needed.

---

## 🚀 Testing

### To test the integration:

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the home page:**
   ```
   http://localhost:3000/home-1
   ```

3. **Check the test API page:**
   ```
   http://localhost:3000/test-api
   ```
   This shows all API integrations and data availability.

---

## 📝 Environment Variables

Ensure these are set in `.env.local`:

```env
NEXT_PUBLIC_DIRECTUS_URL=https://cms.green-mongolia.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🎨 Component Comparison

### BannerV3 → BannerV3GraphQL

**Before (Static):**
- Data from `BannerV3Data.json`
- Fixed content
- Manual updates required

**After (Dynamic):**
- Data from Directus `home_slider` collection
- Real-time content updates
- Multi-language support
- Sortable slides
- Status management (published/draft)

### ServiceV1 → ServiceV1GraphQL

**Before (Static):**
- Hardcoded 3 services
- Translation keys only
- Static images

**After (Dynamic):**
- Dynamic activities from CMS
- Full content management
- Dynamic images from Directus
- Fallback to static if no data

### GalleryV1 → GalleryV1GraphQL

**Before (Static):**
- Data from `GalleryV1Data.json`
- Fixed gallery items

**After (Dynamic):**
- Projects from Directus
- Real-time updates
- Project dates and details
- Links to project pages

---

## 🔄 Migration Benefits

1. **Real-time Updates:** Content changes in CMS appear immediately
2. **Multi-language:** Easy language management through CMS
3. **Image Management:** Central image repository in Directus
4. **Type Safety:** Full TypeScript support
5. **Caching:** Automatic caching via RTK Query
6. **Error Handling:** Robust error handling and fallbacks
7. **Status Management:** Draft/publish workflow
8. **Sorting:** Flexible content ordering

---

## 📦 Files Created/Modified

### New Files:
1. `/src/components/banner/BannerV3GraphQL.tsx`
2. `/src/components/services/ServiceV1GraphQL.tsx`
3. `/src/components/gallery/GalleryV1GraphQL.tsx`
4. `/home/HOME_PAGE_GRAPHQL_INTEGRATION.md` (this file)

### Modified Files:
1. `/src/app/home-1/page.tsx` - Updated to use GraphQL components
2. `/src/components/contact/ContactV1.tsx` - Updated to use GraphQL mutation

### Existing Files (Reused):
1. `/src/components/blog/BlogV1GraphQL.tsx` - Already implemented

---

## 🎯 Next Steps

### Optional Enhancements:

1. **Update Other Home Pages:**
   - `/home-2/page.tsx` (if needed)
   - `/home-3/page.tsx` (if needed)
   - `/home-4/page.tsx` (if needed)

2. **Add Dynamic Content to Static Components:**
   - AboutV1 → AboutV1GraphQL (use activities or custom collection)
   - TestimonialV1 → TestimonialV1GraphQL (add testimonials collection)
   - ProductCategory → ProductCategoryGraphQL (use projects or custom collection)

3. **Add More Features:**
   - Pagination for large data sets
   - Search functionality
   - Filtering by tags/categories
   - Featured content flags

4. **Performance Optimization:**
   - Image optimization (Next.js Image component)
   - Lazy loading for heavy components
   - Skeleton loaders for better UX

---

## 🐛 Troubleshooting

### No Data Showing?

1. Check Directus CMS is accessible: `https://cms.green-mongolia.com/graphql`
2. Verify data exists and is published in collections
3. Check browser console for API errors
4. Verify environment variables are set

### Images Not Loading?

1. Check `NEXT_PUBLIC_DIRECTUS_URL` environment variable
2. Verify images exist in Directus
3. Check browser console for 404 errors
4. Ensure image IDs are correct

### Translation Issues?

1. Verify language code format (`en-US` or `mn-MN`)
2. Check translations exist in Directus
3. Verify `getTranslation()` helper is working
4. Check fallback to first available translation

---

## 📞 Support

For issues with:
- **GraphQL API:** Check [GRAPHQL_API_DOCUMENTATION.md](./GRAPHQL_API_DOCUMENTATION.md)
- **Directus CMS:** Visit https://cms.green-mongolia.com
- **Component Issues:** Check component files for comments

---

**Last Updated:** January 25, 2026  
**Status:** ✅ Completed  
**Home Page:** `/home-1` fully integrated with GraphQL APIs
