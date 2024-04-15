import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Feed } from '@mui/icons-material';

const App = () => (
  <BrowserRouter>
    <Box sx={ {backgroundColor: '#000'}}>
      <Narbar>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoFeed />} />
          <Route path='/channel/:id' element={<ChannelFeed />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Narbar>
    </Box>
  </BrowserRouter>
)

export default App