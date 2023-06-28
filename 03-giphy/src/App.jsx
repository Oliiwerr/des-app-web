import {useState, useEffect} from 'react'
import './App.css'

function App() {
const[gifs, setGifs] = useState([])
const API_KEY = 'hN8CgmKNrDPLom6owujZJdr8hwcR5m72'
useEffect(() => {
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${AP_IKEY}&limit=25&offset=0&rating=g&lang=es&bundle=messaging_non_clips`)
}, [])
.then((response) => {
  return response.json()
}) .then((results) => {
  setGifs (results.data)
}) .catch((error) =>{
  console.error(error)
})
  return (
    <>
      <h1>Giphy App</h1>
    </>
  )
}

export default App
