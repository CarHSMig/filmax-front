import { Typography } from "@mui/material";

export default function MovieDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <Typography variant="h4">Detalhes do Filme {params.id}</Typography>
      {/* Aqui vamos buscar informações reais no futuro */}
    </>
  );
}
