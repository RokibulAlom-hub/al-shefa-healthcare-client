const Statistics = () => {
     const stats = [
    { number: "15,000+", label: "Patients Treated" },
    { number: "50+", label: "Expert Doctors" },
    { number: "24/7", label: "Emergency Care" },
    { number: "98%", label: "Success Rate" }
  ];
    return (
        <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-white">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Statistics;
