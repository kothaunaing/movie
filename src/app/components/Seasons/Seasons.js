import SeasonsComponent from "./SeasonsComponent";

const Seasons = ({ movie }) => {
  if (movie) {
    return (
      <div className="m-2">
        <SeasonsComponent movie={movie} />
      </div>
    );
  } else {
    return <div className="text-center text-red-600">Error fetching data</div>;
  }
};

export default Seasons;
