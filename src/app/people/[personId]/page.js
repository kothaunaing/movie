import NotFound from "@/app/components/Movies/NotFound";
import SinglePeople from "@/app/components/People/SinglePeople";
import { getPersonById } from "@/lib/moviesList";
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ params }) {
  const { personId } = await params;
  const person = await getPersonById(
    "https://api.themoviedb.org/3/person/" + personId
  );

  return {
    title: person
      ? `ZFlix | People - ${person.name}`
      : "ZFlix | Person not found!",
    description: person
      ? `ZFlix | People - ${person.name}`
      : "ZFlix | Person not found!",
  };
}

const Person = async ({ params }) => {
  const { personId } = await params;
  const person = await getPersonById(
    "https://api.themoviedb.org/3/person/" + personId
  );

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        {person ? (
          <SinglePeople person={person} />
        ) : (
          <NotFound>
            <InfoIcon className="mb-2" />
            <p>404 | No person found!</p>
            <Link className="font-bold underline mt-2" href={"/people"}>
              Go to People
            </Link>
          </NotFound>
        )}
      </div>
    </main>
  );
};

export default Person;
