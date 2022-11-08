import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export const MuiCheckbox = () => {
  const [acceptTnc, setacceptTnc] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setacceptTnc(event.target.checked);
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};
