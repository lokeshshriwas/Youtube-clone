import { useEffect, useState } from "react";
import { Videos } from "./";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

function VideoDetails() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    FetchFromAPI(`search?part=snippet&relatedToVidoeoId=${id}&type=video`).then(
      (res) => setVideos(res.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "loading...";

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh" backgroundColor="#0F0F0F" border={"none"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", postion: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Stack py={1} px={2} onClick={handleShowMore} bgcolor={"#212121"} borderRadius={"20px"} >
              <Typography variant="subtitle2" color="#fff" >
                  {showMore ? (description) : (description.slice(0, 250) + "...more")}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetails;
