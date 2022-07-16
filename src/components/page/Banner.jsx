import React, { useEffect } from "react";
import "../layout/Banner.css";
import categories from "../shared/services/api";

export default function Banner() {
  const [movie, setMovie] = React.useState({});

  const fetchRandomMovie = async () => {
      try {
        const netflixOriginalsCategory = categories.find(
          (category) => category.name === "netflixOriginals"
        )
          const data = await getMovie(netflixOriginalsCategory.path);
          const movies = data?.results
          const randomIndex = Match.floor(Math.random() * data.results.length)
          setMovie(data?.results[randomIndex])
    } catch (error) {
      console.log("Banner fetchRandomMovie error", error);
    }
  };

    useEffect(() => {
        fetchRandomMovie();
  }, []);

  return <div>Banner</div>;
}
