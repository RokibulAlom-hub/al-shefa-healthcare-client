import { ArrowRight } from 'lucide-react';
const Blog = () => {
  const articles = [
    {
      title: "5 Tips for Maintaining Heart Health",
      excerpt:
        "Learn essential tips to keep your heart healthy and reduce the risk of cardiovascular disease.",
      date: "March 15, 2025",
      image: "❤️",
    },
    {
      title: "Understanding Preventive Care",
      excerpt:
        "Discover why regular checkups and preventive care are crucial for long-term health.",
      date: "March 10, 2025",
      image: "🩺",
    },
    {
      title: "Mental Health Awareness",
      excerpt:
        "Breaking the stigma around mental health and promoting overall wellness in our community.",
      date: "March 5, 2025",
      image: "🧠",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Latest Health News
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest health tips, medical breakthroughs,
            and wellness advice
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <div className="text-4xl mb-4 text-center">{article.image}</div>
                <div className="text-sm text-blue-600 mb-2">{article.date}</div>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
