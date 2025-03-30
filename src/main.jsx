import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from './BlogPage.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Door_to_Mountains/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
