const Statistics = () => {
  const stats = [
    { number: "15,000+", label: "Patients Treated" },
    { number: "50+", label: "Expert Doctors" },
    { number: "24/7", label: "Emergency Care" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-primary-btn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.length ? (
            stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-lg bg-card-bg text-primary-text"
                role="figure"
                aria-label={`Statistic: ${stat.number} ${stat.label}`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-text text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-btn-text col-span-full">
              No statistics available
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Statistics;