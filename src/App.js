import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Feed } from '@mui/icons-material';

import {Navbar, VideoDetail, SearchFeed, ChannelDetail} from './componennts'
const App = () => (
  <BrowserRouter>
    <Box sx={ {backgroundColor: '#000'}}>
      <Navbar>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail/>} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Navbar>
    </Box>
  </BrowserRouter>
) 

export default App 