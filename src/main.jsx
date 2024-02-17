import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ListBook_All from './components/ListBook_All.jsx';
import ListBook_ID from './components/ListBook_ID.jsx';
import ListBook_Name from './components/ListBook_Name.jsx';
import ListBook_Writer from './components/ListBook_Writer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ListBook_All />
  },
  {
    path: "/listbook_id",
    element: <ListBook_ID />
  },
  {
    path: "/listbook_name",
    element: <ListBook_Name />
  },
  {
    path: "/listbook_writer",
    element: <ListBook_Writer />
  }
  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
