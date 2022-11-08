import { Tooltip, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const MuiTooltip = () => {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};
