import { CheckIcon } from "@heroicons/react/solid";
import React from "react";

const Benefit = (props) => {
  return (
    <p className="flex items-center mt-4">
      <CheckIcon className="w-6 h-6 text-green-500 mr-2"></CheckIcon>
      {props.benefits}
    </p>
  );
};

export default Benefit;
