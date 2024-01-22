import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Tooltip, IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoPlaylistUrl,
} from "../utils/constants";

function PlaylistCard({
  playlistDetail: {
    id: { playlistId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: "95vw", sm: "280px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
      style={{position: "relative"}}
    >
      <Link to={playlistId ? `/playlist/${playlistId}` : demoPlaylistUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
            },
            height: 180,
          }}
        />
      
         <PlaylistAddIcon style={{position: "absolute", top: "0px", left: "5px", color: "white", zIndex: "100", fontSize: "50px"}}/>
        
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "80px" }}>
        <Link to={playlistId ? `/playlist/${playlistId}` : demoPlaylistUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default PlaylistCard;
