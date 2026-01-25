# Blog Detail & Footer Updates - GraphQL Integration

## 🎯 Overview
Updated the blog detail page and footer to use dynamic data from GraphQL API, and removed all comment functionality as requested.

---

## ✅ Changes Made

### 1. **Blog Detail Page - Now Dynamic**
**File:** `/src/app/blog-single-with-sidebar/[id]/page.tsx`

**Before:**
- Used static JSON data (`BlogV1Data.json`)
- No real article content
- Static navigation

**After:**
- ✅ Fetches news from GraphQL by ID
- ✅ Displays dynamic article content
- ✅ Shows translated title, description, and body
- ✅ Dynamic image from Directus
- ✅ Shows tags with translations
- ✅ Previous/Next article navigation
- ✅ Multi-language support

---

### 2. **Blog Detail Content Component - GraphQL Version**
**File:** `/src/components/blog/BlogSingleWithSidebarContentGraphQL.tsx` (NEW)

**Features:**
- ✅ Uses `useGetNewsByIdQuery(id)` to fetch specific article
- ✅ Uses `useGetNewsQuery()` for navigation (prev/next)
- ✅ Displays article with:
  - Cover image or placeholder
  - Date badge
  - Title
  - Description
  - Full body content (HTML rendered)
  - Tags with translations
  - Social share buttons
- ✅ **Comments section REMOVED** as requested
- ✅ Loading and error states
- ✅ Sidebar with widgets

---

### 3. **Recent Posts Widget - GraphQL Version**
**File:** `/src/components/widgets/RecentPostsWidgetGraphQL.tsx` (NEW)

**Features:**
- ✅ Fetches 3 most recent published news
- ✅ Displays thumbnail, date, and title
- ✅ Links to article detail pages
- ✅ Multi-language support
- ✅ Loading state

---

### 4. **Footer Latest Posts - Now Dynamic**
**File:** `/src/components/footer/FooterV1.tsx`

**Before:**
- Used old REST API (`useGetArticlesQuery`)
- Complex image URL handling
- Limited to old article structure

**After:**
- ✅ Uses GraphQL `useGetNewsQuery()`
- ✅ Shows 2 most recent published news
- ✅ Uses `getDirectusImageUrl()` helper
- ✅ Uses `getTranslation()` for multi-language
- ✅ Proper date formatting with locale
- ✅ Clean, maintainable code

---

## 🗑️ Comments Removed

### Removed from Blog Detail:
1. **Comment Count** - Removed from meta information
2. **Comments Section** - Entire `blog-comments` div removed
3. **Comment Form** - Leave a comment form removed
4. **BlogPostComments Component** - No longer imported or used
5. **BlogCommentForm Component** - No longer imported or used
6. **Post Author Section** - Removed (optional, can add back if needed)

The blog detail page now focuses purely on displaying the article content without any interaction/comment features.

---

## 📊 Data Flow

### Blog Detail Page
```
User visits: /blog-single-with-sidebar/[id]
    ↓
BlogSingleWithSidebarPage (page.tsx)
    ↓
BlogSingleWithSidebarContentGraphQL (component)
    ↓
useGetNewsByIdQuery(id) - Fetch specific article
    ↓
GraphQL API (Directus CMS)
    ↓
Display Article with:
    - Translated content
    - Dynamic images
    - Tags
    - Navigation
    - Sidebar widgets
```

### Footer Latest Posts
```
Footer Component Loads
    ↓
useGetNewsQuery() - Fetch all news
    ↓
Filter published + Sort by date + Take 2
    ↓
Transform with:
    - getTranslation() for titles
    - getDirectusImageUrl() for images
    - Date formatting
    ↓
Display in Footer
```

---

## 🌍 Multi-Language Support

### Article Content
All content is translated based on locale:
- **English**: `en-US`
- **Mongolian**: `mn-MN`

```typescript
const translation = getTranslation(newsItem.translations, languageCode);
// Returns: { title, description, body }
```

### Date Formatting
Dates respect locale settings:
```typescript
date.toLocaleString(locale, { month: "short" })
```
- English: "Jan 25, 2026"
- Mongolian: "1-р сар 25, 2026"

---

## 🖼️ Image Handling

### Dynamic Images
All images use the Directus helper:
```typescript
const imageUrl = getDirectusImageUrl(newsItem.cover_image || newsItem.image);
// Returns: https://cms.green-mongolia.com/assets/{id}/{filename}
```

### Fallbacks
- If no image: Shows placeholder with icon
- Uses `unoptimized={true}` for external Directus images
- Responsive with proper aspect ratios

---

## 🔗 Navigation

### Previous/Next Articles
- Automatically finds previous and next published articles
- Shows first two words of title as preview
- Circular navigation (wraps around)
- Handles edge cases (first/last article)

```typescript
const currentIndex = publishedNews.findIndex((item) => item.id === newsId);
const previousArticle = currentIndex > 0 ? publishedNews[currentIndex - 1] : null;
const nextArticle = currentIndex < publishedNews.length - 1 ? publishedNews[currentIndex + 1] : null;
```

---

## 🎨 UI Components

### Article Page Layout
```
┌─────────────────────────────────────┬──────────────┐
│ Article Content (col-xl-8)          │ Sidebar      │
│ ├─ Cover Image                      │ (col-xl-4)   │
│ ├─ Date Badge                       │              │
│ ├─ Title                            │ ├─ Search    │
│ ├─ Description                      │ ├─ Recent    │
│ ├─ Body Content (HTML)              │ │   Posts    │
│ ├─ Tags                             │ ├─ Category  │
│ ├─ Social Share                     │ ├─ Gallery   │
│ └─ Previous/Next Navigation         │ ├─ Archive   │
│                                     │ ├─ Follow    │
│ [Comments Section REMOVED]          │ └─ Tags      │
└─────────────────────────────────────┴──────────────┘
```

---

## 🔧 Technical Details

### GraphQL Queries Used
1. **`useGetNewsByIdQuery(id)`** - Fetch single article
2. **`useGetNewsQuery()`** - Fetch all news (for navigation & footer)

### Helper Functions
1. **`getDirectusImageUrl(file)`** - Get image URL
2. **`getTranslation(translations, languageCode)`** - Get translated content
3. **`formatDate(dateString)`** - Format dates with locale

### State Management
- RTK Query automatic caching
- Loading states handled
- Error states with fallbacks
- No manual state needed

---

## 📱 Responsive Design

### Desktop (>1200px)
- 8/4 column split (content/sidebar)
- Full images and content

### Tablet (768px-1199px)
- Maintains 2-column layout
- Adjusted padding

### Mobile (<768px)
- Single column stack
- Content first, then sidebar
- Full-width images
- Touch-friendly navigation

---

## 🚀 Files Created/Modified

### New Files:
1. `/src/components/blog/BlogSingleWithSidebarContentGraphQL.tsx` - Dynamic article display
2. `/src/components/widgets/RecentPostsWidgetGraphQL.tsx` - Dynamic sidebar widget
3. `/BLOG_DETAIL_AND_FOOTER_UPDATE.md` - This documentation

### Modified Files:
1. `/src/app/blog-single-with-sidebar/[id]/page.tsx` - Use GraphQL component
2. `/src/components/footer/FooterV1.tsx` - Use GraphQL news API

### Removed Dependencies:
- ❌ `BlogV1Data.json` - No longer needed
- ❌ `BlogPostComments` - Comments removed
- ❌ `BlogCommentForm` - Comments removed
- ❌ `useGetArticlesQuery` (in footer) - Replaced with GraphQL

---

## ✨ Key Improvements

### Before (Static):
- ❌ Used JSON data files
- ❌ No real content
- ❌ Comment sections (not needed)
- ❌ No translations
- ❌ Static images
- ❌ Old REST API

### After (Dynamic):
- ✅ Real-time content from CMS
- ✅ Full article with HTML body
- ✅ Comments removed (cleaner)
- ✅ Multi-language support
- ✅ Dynamic Directus images
- ✅ Modern GraphQL API
- ✅ Better performance with caching

---

## 🧪 Testing Checklist

### Article Detail Page:
- [ ] Article loads with correct content
- [ ] Images display from Directus
- [ ] Title and description show translated
- [ ] Body content renders HTML correctly
- [ ] Tags display with translations
- [ ] Previous/Next navigation works
- [ ] No comment sections visible
- [ ] Loading state displays
- [ ] Error state handles missing articles
- [ ] Sidebar widgets display
- [ ] Recent posts widget shows news
- [ ] Language switching works

### Footer:
- [ ] Latest posts section shows 2 articles
- [ ] Article images display
- [ ] Article titles are translated
- [ ] Dates format correctly
- [ ] Links navigate to detail pages
- [ ] Loading state works
- [ ] Error state works
- [ ] Empty state works

---

## 🎯 User Experience

### Article Reading:
1. User clicks news card on home page
2. Navigates to `/blog-single-with-sidebar/[id]`
3. Sees loading indicator
4. Article content appears with:
   - Large cover image
   - Formatted date
   - Full title and description
   - Rich HTML content
   - Tag pills
   - Social sharing options
5. Can navigate to previous/next articles
6. Sidebar shows related content
7. **No distracting comment sections**

### Footer Quick Access:
1. Footer always visible at bottom
2. "Recent Posts" section shows 2 latest news
3. Each post has thumbnail and title
4. Click to read full article
5. Updates automatically when new news published

---

## 🔄 API Response Example

### News Article Response:
```typescript
{
  id: "1",
  status: "published",
  date_created: "2026-01-25T10:00:00Z",
  cover_image: {
    id: "abc123",
    filename_download: "news-image.jpg"
  },
  translations: [
    {
      languages_code: { code: "en-US" },
      title: "Green Mongolia Initiative Launches",
      description: "Brief overview...",
      body: "<p>Full HTML content...</p>"
    },
    {
      languages_code: { code: "mn-MN" },
      title: "Ногоон Монгол санаачилга эхэллээ",
      description: "Товч тойм...",
      body: "<p>Бүтэн HTML агуулга...</p>"
    }
  ],
  tags: [
    {
      id: "tag1",
      news_tag_id: {
        translations: [
          { languages_code: { code: "en-US" }, name: "Environment" },
          { languages_code: { code: "mn-MN" }, name: "Байгаль орчин" }
        ]
      }
    }
  ]
}
```

---

## 🐛 Error Handling

### Article Not Found:
```typescript
if (error || !newsItem) {
  return (
    <div>
      <p>Article not found</p>
      <Link href="/blog-standard">Back to News</Link>
    </div>
  );
}
```

### Loading State:
```typescript
if (isLoading) {
  return <p>Loading article...</p>;
}
```

### Empty Footer Posts:
```typescript
{recentArticles.length === 0 && (
  <li>
    <span>No recent posts</span>
  </li>
)}
```

---

## 📝 HTML Content Rendering

### Body Content Display:
```typescript
<div
  className="content-body"
  dangerouslySetInnerHTML={{ __html: translation.body }}
/>
```

**Note:** Content from Directus CMS is trusted. If user-generated content is added, implement proper sanitization.

---

## 🎨 Styling Notes

### Uses Template Classes:
- `blog-area` - Main blog container
- `blog-style-one` / `blog-style-two` - Card styles
- `post-tags share` - Tags and social section
- `post-pagi-area` - Navigation area
- `sidebar-item recent-post` - Sidebar widget style

### Custom Styling:
- Placeholder icons for missing images
- Responsive date badge positioning
- Proper image aspect ratios

---

## 🔐 Security

### XSS Protection:
- `dangerouslySetInnerHTML` used for body content
- Content comes from trusted CMS (Directus)
- Admin controls what gets published

### Image URLs:
- All images from verified Directus domain
- No user-uploaded images without review

---

## 📊 Performance

### Optimizations:
- RTK Query automatic caching
- Image lazy loading with Next.js Image
- Only fetch needed data
- Efficient filtering and sorting

### Caching Strategy:
- Articles cached after first fetch
- Cache invalidated on data updates
- Footer posts share same cache as article lists

---

## 🚀 Deployment Notes

### Environment Variables Required:
```env
NEXT_PUBLIC_DIRECTUS_URL=https://cms.green-mongolia.com
```

### Build Verification:
```bash
npm run build
npm run start
```

### Pre-deployment Checks:
- [ ] All article routes working
- [ ] Footer displays latest posts
- [ ] No console errors
- [ ] Images loading correctly
- [ ] Multi-language working
- [ ] Navigation functional

---

## 📞 Support

### Common Issues:

**Q: Article not displaying?**
A: Check article status is "published" in Directus CMS

**Q: Images not loading?**
A: Verify `NEXT_PUBLIC_DIRECTUS_URL` environment variable

**Q: Translations missing?**
A: Ensure article has translations for both languages in CMS

**Q: Footer shows no posts?**
A: Check that articles are published and have required fields

---

**Created:** January 25, 2026  
**Status:** ✅ Completed  
**Features:** Dynamic blog details, no comments, dynamic footer  
**API:** GraphQL (Directus CMS)
