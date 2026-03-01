import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
const playersData = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

function App() {
  const playersPromise = playersData()


  return (
    <>

     <Navbar/>

     <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
     </Suspense>

     <SelectedPlayers></SelectedPlayers>
      

    </>
  )
}

export default App
