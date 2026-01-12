"use client";
import { useGetArticlesQuery } from "@/store/api/articlesApi";
import { transformArticleToBlog } from "@/store/api/articlesApi";

/**
 * Test component to verify Articles API is working
 * This component can be used to test the Directus connection
 */
const ArticlesTest = () => {
  const { data, error, isLoading, isFetching } = useGetArticlesQuery();

  if (isLoading || isFetching) {
    return (
      <div className="container py-5">
        <div className="alert alert-info">
          <h4>Loading Articles...</h4>
          <p>Fetching data from Directus API...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          <h4>Error Loading Articles</h4>
          <p>There was an error fetching articles from Directus.</p>
          <details>
            <summary>Error Details</summary>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </details>
          <p className="mt-3">
            <strong>Make sure:</strong>
          </p>
          <ul>
            <li>Directus is running on http://localhost:8055 (or your configured URL)</li>
            <li>The &quot;articles&quot; collection exists in Directus</li>
            <li>The collection has proper permissions set</li>
          </ul>
        </div>
      </div>
    );
  }

  if (!data || !data.data || data.data.length === 0) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          <h4>No Articles Found</h4>
          <p>The API call was successful, but no articles were returned.</p>
          <p>Make sure you have articles in your Directus &quot;articles&quot; collection.</p>
        </div>
      </div>
    );
  }

  const articles = data.data;
  const transformedArticles = articles.map(transformArticleToBlog);

  return (
    <div className="container py-5">
      <div className="alert alert-success">
        <h4>✅ API Test Successful!</h4>
        <p>Found {articles.length} article(s) from Directus</p>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3>Raw API Response:</h3>
          <pre style={{ background: "#f5f5f5", padding: "15px", borderRadius: "5px", overflow: "auto" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3>Transformed Articles (for components):</h3>
          <div className="row">
            {transformedArticles.map((article) => (
              <div key={article.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                      <small className="text-muted">
                        By {article.author} on {article.full_date}
                      </small>
                    </p>
                    {article.description && (
                      <p className="card-text">{article.description.substring(0, 100)}...</p>
                    )}
                    <pre style={{ fontSize: "10px", background: "#f5f5f5", padding: "10px" }}>
                      {JSON.stringify(article, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesTest;
