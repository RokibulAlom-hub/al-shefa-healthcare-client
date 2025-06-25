import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      title: "5 Tips for Maintaining Heart Health",
      excerpt:
        "Learn essential tips to keep your heart healthy and reduce the risk of cardiovascular disease.",
      date: "March 15, 2025",
      image: "https://via.placeholder.com/300x200?text=Heart+Health",
      slug: "heart-health-tips",
    },
    {
      title: "Understanding Preventive Care",
      excerpt:
        "Discover why regular checkups and preventive care are crucial for long-term health.",
      date: "March 10, 2025",
      image: "https://via.placeholder.com/300x200?text=Preventive+Care",
      slug: "preventive-care",
    },
    {
      title: "Mental Health Awareness",
      excerpt:
        "Breaking the stigma around mental health and promoting overall wellness in our community.",
      date: "March 5, 2025",
      image: "https://via.placeholder.com/300x200?text=Mental+Health",
      slug: "mental-health-awareness",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-3">
            Latest Health News
          </h2>
          <p className="text-base sm:text-lg text-secondary-text max-w-xl mx-auto">
            Stay informed with health tips, medical breakthroughs, and wellness advice
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length ? (
            articles.map((article) => (
              <div
                key={article.slug}
                className="bg-card-bg rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                role="article"
                aria-labelledby={`${article.slug}-title`}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="text-xs text-secondary-text mb-2">
                    {article.date}
                  </div>
                  <h3
                    id={`${article.slug}-title`}
                    className="text-base sm:text-lg font-semibold text-primary-text mb-2"
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-secondary-text mb-3">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="text-link hover:text-hover font-medium flex items-center text-sm"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-secondary-text col-span-full">
              No articles available
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;