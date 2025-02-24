import { Typography, Grid } from "@mui/material";
import MovieCard from "../../components/MovieCard";

const movies = [
  { id: 1, title: "Inception", poster: "https://via.placeholder.com/200x300" },
  { id: 2, title: "Interstellar", poster: "https://via.placeholder.com/200x300" },
];

export default function MoviesPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Catálogo de Filmes 🎥
      </Typography>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />
        ))}
      </Grid>
    </>
  );
}
