import { HeartPulse, Droplet, Sun, Apple } from "lucide-react";

const HealthTips = () => {
  const tips = [
    {
      icon: HeartPulse,
      title: "Stay Active",
      description: "Aim for 30 minutes of moderate exercise, like walking or yoga, most days.",
    },
    {
      icon: Droplet,
      title: "Hydrate Daily",
      description: "Drink at least 8 glasses of water to support overall health.",
    },
    {
      icon: Apple,
      title: "Eat Balanced",
      description: "Include fruits, vegetables, and lean proteins in every meal.",
    },
    {
      icon: Sun,
      title: "Prioritize Sleep",
      description: "Get 7-8 hours of quality sleep to boost energy and immunity.",
    },
  ];

  return (
    <section className="py-12 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-text mb-2">
            Simple Health Tips
          </h2>
          <p className="text-sm sm:text-base text-secondary-text max-w-md mx-auto">
            Small changes for a healthier you, every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-card-bg rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              role="article"
              aria-labelledby={`${tip.title}-title`}
            >
              <div className="flex justify-center mb-3">
                <tip.icon className="h-8 w-8 text-primary-btn" aria-hidden="true" />
              </div>
              <h3
                id={`${tip.title}-title`}
                className="text-base font-semibold text-primary-text text-center mb-2"
              >
                {tip.title}
              </h3>
              <p className="text-sm text-secondary-text text-center">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;