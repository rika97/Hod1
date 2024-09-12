import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Box, AppBar, Toolbar, Button } from '@mui/material';

import Home from './pages/Home';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="sm">
        <Box textAlign="center" my={4}>
          <Typography variant="h3" gutterBottom>
            Hod1
          </Typography>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
