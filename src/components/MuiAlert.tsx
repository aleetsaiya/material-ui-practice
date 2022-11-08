import { Stack, Alert, AlertTitle } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Stack spacing={2} m={5}>
      <Alert severity="error">This is an alert</Alert>
      <Alert severity="warning">This is an alert</Alert>
      <Alert severity="info">This is an alert</Alert>
      <Alert severity="success">This is an alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close Alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is an alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        <AlertTitle>Success</AlertTitle>
        This is an alert
      </Alert>
    </Stack>
  );
};
