import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GameBoard from '../components/GameBoard'
import StartGame from '../components/StartGame'
import NextGame from '../components/NextGame'
import DescribeGame from '../components/DescribeGame'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<GameBoard />} />
      <Route path='/start' element={<StartGame />} />
      <Route path='/next' element={<NextGame />} />
      <Route path='/play' element={<DescribeGame />} />
    </Routes>
  )
}

export default AllRoutes
