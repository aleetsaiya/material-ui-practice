import { Box } from "@mui/material";

export const MuiResponsiveness = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          kl: 500,
        },
        bgcolor: "secondary.main",
      }}
    ></Box>
  );
};
