import React from 'react'
import './App.css'
import ToDos from './components/ToDos'

const App: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <ToDos/>
    </div>
  )
}

export default App
