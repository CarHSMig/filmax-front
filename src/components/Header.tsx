import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1a1a1a" }}>
      <Toolbar>
        {/* Logo */}
        <MovieFilterIcon sx={{ fontSize: 32, color: "gold", mr: 2 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie Catalog
        </Typography>

        {/* Navegação */}
        <Box>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/movies">
            Filmes
          </Button>
          <Button color="inherit" component={Link} href="/reservations">
            Minhas Reservas
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
