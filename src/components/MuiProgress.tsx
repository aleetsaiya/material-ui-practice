import { Stack, CircularProgress, LinearProgress, Box } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2} m={10} width="250px">
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
};
