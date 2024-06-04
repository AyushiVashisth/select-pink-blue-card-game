import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GameBoard from '../components/GameBoard'
import StartGame from '../components/StartGame'
import NextGame from '../components/NextGame'
import DescribeGame from '../components/DescribeGame'
import GameStart from '../components/GameStart'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<GameBoard />} />
      <Route path='/start' element={<StartGame />} />
      <Route path='/next' element={<NextGame />} />
      <Route path='/play' element={<DescribeGame />} />
      <Route path='/gamestart' element={<GameStart />} />
    </Routes>
  )
}

export default AllRoutes
