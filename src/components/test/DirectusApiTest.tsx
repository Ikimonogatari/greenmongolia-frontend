"use client";
import {
  useGetNewsQuery,
  useGetActivitiesQuery,
  useGetEventsQuery,
  useGetHomeSlidersQuery,
  useGetNewsTagsQuery,
  useGetPartnersQuery,
  useGetProjectsQuery,
  useGetCouncilMembersQuery,
  getDirectusImageUrl,
  getTranslation,
} from "@/store/api/directusApi";

/**
 * Test component to verify all GraphQL API integrations
 */
const DirectusApiTest = () => {
  const { data: news, isLoading: newsLoading, error: newsError } = useGetNewsQuery();
  const { data: activities, isLoading: activitiesLoading, error: activitiesError } = useGetActivitiesQuery();
  const { data: events, isLoading: eventsLoading, error: eventsError } = useGetEventsQuery();
  const { data: sliders, isLoading: slidersLoading, error: slidersError } = useGetHomeSlidersQuery();
  const { data: tags, isLoading: tagsLoading, error: tagsError } = useGetNewsTagsQuery();
  const { data: partners, isLoading: partnersLoading, error: partnersError } = useGetPartnersQuery();
  const { data: projects, isLoading: projectsLoading, error: projectsError } = useGetProjectsQuery();
  const { data: councilMembers, isLoading: councilLoading, error: councilError } = useGetCouncilMembersQuery();

  return (
    <div style={{ padding: "20px", fontFamily: "monospace", fontSize: "12px" }}>
      <h1>🧪 Directus GraphQL API Test Results</h1>
      
      {/* NEWS */}
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>1. News (news)</h2>
        {newsLoading && <p>⏳ Loading...</p>}
        {newsError && <p style={{ color: "red" }}>❌ Error: {JSON.stringify(newsError)}</p>}
        {news && (
          <>
            <p>✅ Success! Found {news.length} items</p>
            {news[0] && (
              <details>
                <summary>Sample item</summary>
                <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px", overflow: "auto" }}>
                  ID: {news[0].id}{"\n"}
                  Status: {news[0].status}{"\n"}
                  Created: {news[0].date_created}{"\n"}
                  Image: {news[0].image ? getDirectusImageUrl(news[0].image) : "None"}{"\n"}
                  Translations: {news[0].translations.length}{"\n"}
                  Title (EN): {getTranslation(news[0].translations, "en-US")?.title || "N/A"}{"\n"}
                  Tags: {news[0].tags?.length || 0}
                </pre>
              </details>
            )}
          </>
        )}
      </div>

      {/* ACTIVITIES */}
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>2. Activities (activity)</h2>
        {activitiesLoading && <p>⏳ Loading...</p>}
        {activitiesError && <p style={{ color: "red" }}>❌ Error: {JSON.stringify(activitiesError)}</p>}
        {activities && (
          <>
            <p>✅ Success! Found {activities.length} items</p>
            {activities[0] && (
              <details>
                <summary>Sample item</summary>
                <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px", overflow: "auto" }}>
                  ID: {activities[0].id}{"\n"}
                  Status: {activities[0].status}{"\n"}
                  Created: {activities[0].date_created}{"\n"}
                  Image: {activities[0].image ? getDirectusImageUrl(activities[0].image) : "None"}{"\n"}
                  Translations: {activities[0].translations.length}{"\n"}
                  Name (EN): {getTranslation(activities[0].translations, "en-US")?.name || "N/A"}
                </pre>
              </details>
            )}
          </>
        )}
      </div>

      {/* EVENTS */}
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>3. Events (event)</h2>
        {eventsLoading && <p>⏳ Loading...</p>}
        {eventsError && <p style={{ color: "red" }}>❌ Error: {JSON.stringify(eventsError)}</p>}
        {events && (
          <>
            <p>✅ Success! Found {events.length} items</p>
            {events[0] && (
              <details>
                <summary>Sample item</summary>
                <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px", overflow: "auto" }}>
                  ID: {events[0].id}{"\n"}
                  Status: {events[0].status}{"\n"}
                  Start: {events[0].start_date}{"\n"}
                  End: {events[0].end_date}{"\n"}
                  Image: {events[0].image ? getDirectusImageUrl(events[0].image) : "None"}{"\n"}
                  Translations: {events[0].translations.length}{"\n"}
                  Name (EN): {getTranslation(events[0].translations, "en-US")?.name || "N/A"}
                </pre>
              </details>
            )}
          </>
        )}
      </div>

      {/* HOME SLIDERS */}
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>4. Home Sliders (home_slider)</h2>
        {slidersLoading && <p>⏳ Loading...</p>}
        {slidersError && <p style={{ color: "red" }}>❌ Error: {JSON.stringify(slidersError)}</p>}
        {sliders && (
          <>
            <p>✅ Success! Found {sliders.length} items</p>
            {sliders[0] && (
              <details>
                <summary>Sample item</summary>
                <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px", overflow: "auto" }}>
                  ID: {sliders[0].id}{"\n"}
                  Status: {sliders[0].status}{"\n"}
                  Sort: {sliders[0].sort}{"\n"}
                  Image: {sliders[0].image ? getDirectusImageUrl(sliders[0].image) : "None"}{"\n"}
                  Translations: {sliders[0].translations.length}{"\n"}
                  Title (EN): {getTranslation(sliders[0].translations, "en-US")?.title || "N/A"}
                </pre>
              </details>
            )}
          </>
        )}
      </div>

      {/* NEWS TAGS */}
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>5. News Tags (news_tag)</h2>
        {tagsLoading && <p>⏳ Loading...</p>}
        {tagsError && <p style={{ color: "red" }}>❌ Error: {JSON.stringify(tagsError)}</p>}
        {tags && (
          <>
            <p>✅ Success! Found {tags.length} items</p>
            {tags[0] && (
              <details>
                <summary>Sample item</summary>
                <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px", overflow: "auto" }}>
                  ID: {tags[0].id}{"\n"}
                  Status: {tags[0].status}{"\n"}
                  Translations: {tags[0].translations.length}{"\n"}
                  Tag Name (EN): {getTranslation(tags[0].translations, "en-US")?.name || "N/A"}
                </pre>
              </details>
            )}
          </>
        )}
      </div>

      {/* PARTNERS */}
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>6. Partners (partners)</h2>
        {partnersLoading && <p>⏳ Loading...</p>}
        {partnersError && <p style={{ color: "red" }}>❌ Error: {JSON.stringify(partnersError)}</p>}
        {partners && (
          <>
            <p>✅ Success! Found {partners.length} items</p>
            {partners[0] && (
              <details>
                <summary>Sample item</summary>
                <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px", overflow: "auto" }}>
                  ID: {partners[0].id}{"\n"}
                  Status: {partners[0].status}{"\n"}
                  Logo: {partners[0].partner_logo ? getDirectusImageUrl(partners[0].partner_logo) : "None"}{"\n"}
                  Image: {partners[0].image ? getDirectusImageUrl(partners[0].image) : "None"}{"\n"}
                  Translations: {partners[0].translations.length}{"\n"}
                  Name (EN): {getTranslation(partners[0].translations, "en-US")?.name || "N/A"}
                </pre>
              </details>
            )}
          </>
        )}
      </div>

      {/* PROJECTS */}
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>7. Projects (projects)</h2>
        {projectsLoading && <p>⏳ Loading...</p>}
        {projectsError && <p style={{ color: "red" }}>❌ Error: {JSON.stringify(projectsError)}</p>}
        {projects && (
          <>
            <p>✅ Success! Found {projects.length} items</p>
            {projects[0] && (
              <details>
                <summary>Sample item</summary>
                <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px", overflow: "auto" }}>
                  ID: {projects[0].id}{"\n"}
                  Status: {projects[0].status}{"\n"}
                  Start Date: {projects[0].start_date}{"\n"}
                  Image: {projects[0].image ? getDirectusImageUrl(projects[0].image) : "None"}{"\n"}
                  Translations: {projects[0].translations.length}{"\n"}
                  Name (EN): {getTranslation(projects[0].translations, "en-US")?.name || "N/A"}
                </pre>
              </details>
            )}
          </>
        )}
      </div>

      {/* COUNCIL MEMBERS */}
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>8. Council Members (council_members)</h2>
        {councilLoading && <p>⏳ Loading...</p>}
        {councilError && <p style={{ color: "red" }}>❌ Error: {JSON.stringify(councilError)}</p>}
        {councilMembers && (
          <>
            <p>✅ Success! Found {councilMembers.length} items</p>
            {councilMembers[0] && (
              <details>
                <summary>Sample item</summary>
                <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px", overflow: "auto" }}>
                  ID: {councilMembers[0].id}{"\n"}
                  Status: {councilMembers[0].status}{"\n"}
                  Email: {councilMembers[0].email || "N/A"}{"\n"}
                  Phone: {councilMembers[0].phone || "N/A"}{"\n"}
                  Photo: {councilMembers[0].photo ? getDirectusImageUrl(councilMembers[0].photo) : "None"}{"\n"}
                  Translations: {councilMembers[0].translations.length}{"\n"}
                  Name (EN): {(() => {
                    const trans = getTranslation(councilMembers[0].translations, "en-US");
                    return trans ? `${trans.first_name} ${trans.last_name}` : "N/A";
                  })()}{"\n"}
                  Role (EN): {getTranslation(councilMembers[0].translations, "en-US")?.role || "N/A"}
                </pre>
              </details>
            )}
          </>
        )}
      </div>

      <div style={{ marginTop: "40px", padding: "20px", background: "#e7f3ff", border: "2px solid #0078d4" }}>
        <h3>📊 Summary</h3>
        <p>Total Collections Tested: 8</p>
        <p>✅ Successful: {[news, activities, events, sliders, tags, partners, projects, councilMembers].filter(Boolean).length}</p>
        <p>❌ Failed: {[newsError, activitiesError, eventsError, slidersError, tagsError, partnersError, projectsError, councilError].filter(Boolean).length}</p>
      </div>
    </div>
  );
};

export default DirectusApiTest;
