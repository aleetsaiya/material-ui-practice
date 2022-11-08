import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      {/* heading */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* smaller than h6 but is h6 tag */}
      <Typography variant="subtitle1">Sub title1</Typography>
      <Typography variant="subtitle2">Sub title2</Typography>

      {/* h4 size but h1 tag */}
      <Typography variant="h4" component="h1">
        h1 Heading
      </Typography>

      {/* Add a little space under heading */}
      <Typography variant="h4" gutterBottom>
        GutterBottom Heading
      </Typography>

      {/* paragraph */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        dignissimos facere labore explicabo ex officia, maiores a, omnis, nulla
        voluptates nam veritatis architecto temporibus dicta culpa. Qui
        doloribus perspiciatis quibusdam.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
        distinctio excepturi nulla facere fuga labore qui, dolor molestias
        tempora? Consequuntur nisi quam et magnam incidunt facere esse vitae
        voluptatem aliquam?
      </Typography>
    </div>
  );
};
