import SearchBar from "@/components/SearchBar";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Movie Catalog 🎬
      </Typography>
      <SearchBar />
    </>
  );
}
