import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";

interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, poster }) => {
  return (
    <Card sx={{ width: 200, m: 2 }}>
      <Link href={`/movies/${id}`} style={{ textDecoration: "none" }}>
        <CardMedia component="img" height="300" image={poster} alt={title} />
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "center", color: "black" }}>
            {title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MovieCard;
