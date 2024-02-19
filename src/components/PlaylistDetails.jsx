import { Box, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { demoProfilePicture } from "../utils/constants";

function PlaylistDetails() {
  const { id } = useParams();

  let [playlistDetail, setPlaylistDetail] = useState(null);
  let [video, setVideo] = useState([]);

  useEffect(() => {
    FetchFromAPI(`playlists?id=${id}&part=snippet`).then((data) =>
      setPlaylistDetail(data?.items[0])
    );

    FetchFromAPI(
      `playlistItems?playlistId=${id}&part=snippet&maxResults=50`
    ).then((mainData) => setVideo(mainData?.items));
  }, [id]);

  if (!playlistDetail?.snippet) return "loading...";
  return (
    <Box minHeight="95vh">
      <Box>
        <CardMedia
          image={
            playlistDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={playlistDetail?.snippet?.title}
          style={{
            zIndex: "10",
            objectFit: "cover",
            marginBottom: "40px",
            opacity: ".5",
          }}
          sx={{ height: { xs: "70px", sm: "150px", md: "200px" } }}
        />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={video} />
      </Box>
    </Box>
  );
}

export default PlaylistDetails;
