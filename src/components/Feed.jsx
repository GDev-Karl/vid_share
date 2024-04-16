import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./Sidebar";
import Videos from './Videos'


const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 
    'column', md: 'row'}}}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <SideBar />

        <Typography className="copyright"
        variant="body2" sx={{ mt: 1.5, 
        color: '#fff'}}>
          Copyright @ 2024 Kouam Karl
        </Typography>
      </Box>
      <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4"
        fontWeight='Bold' mb={2} sx={{color: 'white'}}>
          <span style={{ color: '#008CFF'}}>New</span>
          <span style={{ color: '#B70000'}}> Videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed