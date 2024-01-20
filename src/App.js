import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Game from './Game';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/Tic-Tac-Toe" element={<Game/>} />
    </Routes>
    </div>
  )
}

export default App