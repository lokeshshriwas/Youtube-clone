import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
    }
    setSearchTerm("")
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 3 , xs: 2},
        width:{xs: "70vw", md: "40vw"},
        ml: {xs: "10px"},
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <input
        className="search-bar "
        placeholder="Search..."
        sx={{fontSize : {xs: 10, sm: 12, md: 16}}}
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <IconButton type="submit" sx={{p: {xs: "5px" ,sm: "10px"}, color: "red"}} >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
