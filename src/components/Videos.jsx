import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard, PlaylistCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      sx={{ flexDirection: {xs: "row", md: `${direction}`} }}
      flexWrap="wrap"
      justifyContent={{xs: "center", sm:"start"}}
      alignItems="center"
      overflow="hidden"
      gap={2}  
    >
      {videos.map((item, idx) => (
        item ? (
          <Box key={idx}>
          {item?.snippet?.resourceId?.videoId && <VideoCard video={item}/> }
          {item.id.videoId  && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.playlistId && <PlaylistCard playlistDetail={item}/>}
        </Box>
        ) : null
      ))}
      {console.log(videos)}
    </Stack>
  );
};

export default Videos;
