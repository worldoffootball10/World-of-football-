import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Temporary example articles (we will later connect real data)
  const articles = [
    { id: 1, title: "The Rise of Young Football Talents", summary: "A look at the next generation of stars." },
    { id: 2, title: "Top 10 Goals of the Season", summary: "A breakdown of the most spectacular goals." },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Latest Articles</h1>

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="block p-4 bg-white shadow rounded hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
