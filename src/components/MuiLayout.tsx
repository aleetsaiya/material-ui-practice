import React from "react";
import { Box, Stack, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper elevation={4}>
      <Box>Basic Box</Box>
      <Box component="span">Span</Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Styled Box
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        Flex Box
      </Box>
    </Paper>
  );
};
