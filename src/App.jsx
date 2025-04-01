import { useState, useEffect, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material"

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    if(count>10){
      setCount(10)
      alert("Alcanzaste el limite del contador")
    }
  },[count])

  const usersList = [
    {
      name: "Saul", 
      lastName: "Valenzuela",
      age: "15"
    },
    {
      name: "Antonio", 
      lastName: "Medina",
      age: "17"
    },
    {
      name: "Jesus", 
      lastName: "Valverde",
      age: "22"
    }
  ]

  return(
    <TableContainer component={Paper}>
    <Table>
    <TableHead>
    <TableRow>
      <TableCell>Nombre</TableCell>
      <TableCell>Apellido</TableCell>
      <TableCell>Edad</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
      {usersList.map((user, index) => (
        <TableRow key={index}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.lastName}</TableCell>
          <TableCell>{user.age}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    </Table>
    </TableContainer>
  )
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
