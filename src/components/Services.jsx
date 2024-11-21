import React from 'react';

function Services() {
    const plans = [
        {
            title: "Basic",
            price: "$100",
            frequency: "/month",
            description: "Ideal for individuals or small businesses getting started.",
            features: [
                "Feature 1: Basic Support",
                "Feature 2: 10 Projects",
                "Feature 3: Community Access",
                "Feature 4: Analytics Dashboard",
                "Feature 5: Email Support",
            ],
        },
        {
            title: "Plus",
            price: "$250",
            frequency: "/month",
            description: "Perfect for growing businesses looking for advanced tools.",
            features: [
                "Feature 1: Advanced Support",
                "Feature 2: 50 Projects",
                "Feature 3: Community Access",
                "Feature 4: Advanced Dashboard",
                "Feature 5: Priority Support",
            ],
        },
        {
            title: "Pro",
            price: "$400",
            frequency: "/month",
            description: "For established businesses needing enterprise-level features.",
            features: [
                "Feature 1: Premium Support",
                "Feature 2: Unlimited Projects",
                "Feature 3: Dedicated Manager",
                "Feature 4: Advanced Analytics",
                "Feature 5: 24/7 Support",
            ],
        },
    ];

    return (
        <section className="pb-10 pt-10 bg-gray-100">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-sm text-[#74C69D] uppercase tracking-[8px]">Plans</h1>
                <h1 className="font-bold text-3xl">Our Services</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Choose the plan that best fits your needs and goals. Flexible options for businesses of all sizes.
                </p>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-[120px] pr-[120px]">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 shadow-2xl"
                    >
                        <h1 className="text-lg font-bold text-[#74C69D]">{plan.title}</h1>
                        <h2 className="text-3xl font-bold mt-2">
                            {plan.price}
                            <span className="text-lg font-normal text-gray-500">{plan.frequency}</span>
                        </h2>
                        <p className="text-gray-600 mt-4">{plan.description}</p>
                        <ul className="mt-4 space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-gray-600 flex items-center">
                                    <span className="inline-block w-2 h-2 bg-[#74C69D] rounded-full mr-2"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 w-full bg-[#74C69D] text-white py-2 rounded-md hover:bg-[#58b47a]">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
