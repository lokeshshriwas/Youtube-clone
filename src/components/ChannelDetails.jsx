import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { FetchFromAPI } from "../utils/FetchFromAPI";

function ChannelDetails() {
  const { id } = useParams();

  let [channelDetail, setChannelDetail] = useState(null);
  let [video, setVideo] = useState([]);

  console.log(channelDetail);

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideo(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(51deg, rgba(243,109,6,1) 0%, rgba(230,228,41,1) 100%)",
            zIndex: "10",
            height: "200px",
          }}
        />

        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
      </Box>
      <Box >
        <Videos videos={video}/>
      </Box>
    </Box>
  );
}

export default ChannelDetails;
