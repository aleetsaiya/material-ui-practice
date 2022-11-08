import { Chip, Stack, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

export const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1} ml={5} mt={5}>
      <Chip label="Chip" color="primary" />
      <Chip label="Chip" color="primary" size="small" />
      <Chip
        label="Chip"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>A</Avatar>}
      />
      <Chip label="Chip" color="primary" icon={<FaceIcon />} />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called!")}
      />
    </Stack>
  );
};
