import Movies from "../components/Movies/Movies";

export async function generateMetadata({ searchParams }) {
  const { page } = await searchParams;

  return {
    title: page ? `ZFlix | Trending | Page ${page}` : "ZFlix | Trending",
    description: "Explore movies and TV",
  };
}

const NowPlaying = async ({ searchParams }) => {
  const { page } = await searchParams;

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Movies
          title={"Trending"}
          page={page}
          url={"https://api.themoviedb.org/3/trending/all/day"}
        />
      </div>
    </main>
  );
};

export default NowPlaying;
