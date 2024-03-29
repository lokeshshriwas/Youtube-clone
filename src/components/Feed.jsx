import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {Videos, Sidebar} from "./"
import { FetchFromAPI } from "../utils/FetchFromAPI";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos , setVideos] = useState([])

useEffect(()=>{
  FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  .then((data)=> setVideos(data.items))
}, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} bgcolor={"#0F0F0F"} >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          border: "none",
          px: { sx: 0, md: 2 },

        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          copyright
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          <span>{selectedCategory}</span> &nbsp;
          <span style={{ color: "#F31503" }}>VIDEOS</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
