import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card sx={{width :{xs: "95vw",sm: "280px", md: "320px"}, boxShadow:"none", borderRadius: 0}}>
      <Link to={(videoId || snippet.resourceId.videoId) ? `/video/${videoId || snippet.resourceId.videoId}` : demoVideoUrl} >
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {
            xs: "100%", sm: "100%", md: "100%"
          }, height: 180, } }

        />
      </Link>
      <CardContent sx={{ backgroundColor: "#0F0F0F", height: "80px", border: "none"}}>
        <Link to={(videoId || snippet.resourceId.videoId) ? `/video/${videoId || snippet.resourceId.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}  
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}  
            <CheckCircle sx={{fontSize: 12, color: "gray", ml:"5px"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
