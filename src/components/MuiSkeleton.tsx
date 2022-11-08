import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(id);
  }, []);

  return (
    <Box sx={{ width: "250px" }} m={10}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={250}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="skeleton"
          width={250}
          height={144}
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
      </Stack>
      <Stack sx={{ width: "80%" }}>
        {loading ? (
          <>
            <Typography variant="body1">
              <Skeleton variant="text" width="100%" animation="wave"></Skeleton>
            </Typography>
            <Typography variant="body2">
              <Skeleton variant="text" width="100%" animation="wave"></Skeleton>
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1">Rect MUI Tutorial</Typography>
          </>
        )}
      </Stack>
    </Box>
  );
};
