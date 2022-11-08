import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiAccordion = () => {
  return (
    <Box width="400px" m={10}>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          arial-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            incidunt repellat est sit, unde modi hic impedit sapiente cum
            dignissimos. Itaque dolor voluptatum nihil rem ad quis minima saepe
            ab?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
