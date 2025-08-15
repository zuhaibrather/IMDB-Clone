import React, { useEffect, useState } from "react";
import "./movielist.css";
import { useParams } from "react-router-dom";
import Card from "../../components/card/card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getData = async () => {
      const category = type || "popular";
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        const data = await res.json();
        setMovieList(data.results || []);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    getData();
  }, [type]); // only runs when type changes

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type || "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
