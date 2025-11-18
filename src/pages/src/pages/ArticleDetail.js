import React from "react";
import { useParams, Link } from "react-router-dom";

function ArticleDetail() {
  const { id } = useParams();

  // Temporary article data (later we will connect real backend)
  const article = {
    title: `Article #${id}`,
    content: "This is a sample article. Later you will write real football articles here."
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 mb-6">{article.content}</p>

      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}

export default ArticleDetail;
