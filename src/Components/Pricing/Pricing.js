import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: [
        "lifetime free",
        "limited access items",
        "localized data",
        "fantastic deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 500,
      benefits: [
        "Everything on free",
        "limited access items",
        "localized data",
        "fantastic deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 1000,
      benefits: [
        "Everything on free",
        "limited access items",
        "localized data",
        "fantastic deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-400 p-4 mt-8">
      <h1 className="text-6xl font-mono text-white">Best Deals of the Town</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt magni
        ipsam dolor mollitia sunt praesentium, deserunt maxime unde libero
        repudiandae, ullam quibusdam molestias quaerat maiores necessitatibus
        voluptate rerum, laudantium tempore!
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
