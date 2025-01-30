import React from "react";

const Person = async ({ params }) => {
  const { personId } = await params;

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2"></div>
    </main>
  );
};

export default Person;
