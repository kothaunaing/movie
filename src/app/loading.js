import { LoaderIcon } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <LoaderIcon className="animate-spin" />
    </div>
  );
};

export default Loader;
