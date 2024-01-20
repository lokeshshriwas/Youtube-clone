import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {Box} from "@mui/material"
import { Feed, VideoDetails, ChannelDetails, SearchFeed, Navbar } from "./components"

function App() {  
 return ( <BrowserRouter>
    <Box sx={{backgroundColor: "#000"}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetails/>}/>
        <Route path="/channel/:id" element={<ChannelDetails/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
 )
}

export default App
