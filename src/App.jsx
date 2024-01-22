import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {Box} from "@mui/material"
import { Feed, VideoDetails, ChannelDetails, SearchFeed, Navbar, PlaylistDetails } from "./components"

function App() {  
 return ( <BrowserRouter>
    <Box sx={{backgroundColor: "#000"}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetails/>}/>
        <Route path="/channel/:id" element={<ChannelDetails/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        <Route path="/playlist/:id" element={<PlaylistDetails/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
 )
}

export default App
