import React from "react";
import {
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

const itemData = [] as Array<{ img: string; title: string }>;

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
            {/* 在每個 image 上增加每個 image 的 title 以及 overlay */}
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};
