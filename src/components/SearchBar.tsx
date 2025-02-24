"use client";  // Adicione esta linha!

import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Buscar filmes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ my: 2 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
