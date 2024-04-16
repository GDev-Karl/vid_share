import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./Sidebar";
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI('search?part=snippet&q=${selectedCategory}')
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 
    'column', md: 'row'}}}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright"
        variant="body2" sx={{ mt: 1.5, 
        color: '#fff'}}>
          Copyright @ 2024 Kouam Karl
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          <span style={{ color: "#008CFF" }}>{selectedCategory} </span>
          <span style={{ color: "#B70000" }}>videos</span>
        </Typography>
        
        <Videos videos={[videos]}/>
      </Box>
    </Stack>
  )
}

export default Feed