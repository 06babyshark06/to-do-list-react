import './App.css';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
import { useState } from 'react';

function App() {
  const [toDoList,setToDoList]=useState([{id:1,task:"Do coding challenge",done:false}]);
  return (
    <Box>
      <NavBar/>
      <Routes>
        <Route path='/' element={<All toDoList={toDoList} setToDoList={setToDoList}/>}/>
        <Route path='/active' element={<Active toDoList={toDoList} setToDoList={setToDoList}/>} />
        <Route path='/completed' element={<Completed toDoList={toDoList} setToDoList={setToDoList}/>}/>
      </Routes>
    </Box>
  );
}

export default App;
