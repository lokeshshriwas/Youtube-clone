import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {Videos} from "./"
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from 'react-router-dom';

function SearchFeed() {
  const {searchTerm} = useParams()
  const [videos , setVideos] = useState([])

useEffect(()=>{
  FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
  .then((data)=> setVideos(data.items))
}, [searchTerm])

console.log(videos)

  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          <span>Search Results from:</span> &nbsp;
          <span style={{ color: "#F31503" }}>{searchTerm}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
  );
}

export default SearchFeed




