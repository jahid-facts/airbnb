import { ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from './theme'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
          <Route index path='/' element={<Home />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

    </ThemeProvider>
  )
}

