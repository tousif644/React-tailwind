import React from "react";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/solid";
import Benefit from "../Benefit/Benefit";
const PricingOption = (props) => {
  const { name, price, benefits } = props.option;

  return (
    <div className="bg-white rounded p-4">
      <h2 className="bg-indigo-300 text-3xl font-bold py-2">{name}</h2>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-gray-400">/mo</span>
      </p>

      <div>
        <h3 className="text-xl font-bold mt-8 text-left">Benefits:</h3>

        {benefits.map((benefit) => (
          <Benefit benefits={benefit}></Benefit>
        ))}
      </div>
      <button className="bg-green-400 flex justify-center w-full py-2 mt-4 rounded text-white hover:bg-green-700 ">
          Buy Now <ArrowRightIcon className="w-6 h-6 ml-3"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
