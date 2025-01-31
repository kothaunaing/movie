"use client";

import React, { useState } from "react";

const Biography = ({ text }) => {
  const [showed, setShowed] = useState(false);
  const characters = 500;

  return (
    <p>
      {showed ? text : text.slice(0, characters)}
      {text?.length > characters && (
        <span
          onClick={() => setShowed((prev) => !prev)}
          className="text-blue-600 underline cursor-pointer"
        >
          {showed ? " See less" : "...See more"}
        </span>
      )}
    </p>
  );
};

export default Biography;
