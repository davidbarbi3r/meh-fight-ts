import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import { useNavigate } from "react-router-dom"

export default function Home (){
    const navigate = useNavigate()

  return (
    <div>
        <h1>MEH FIGHT GAME</h1>
        <button onClick={() => navigate("/meh-fight-ts/game")}>PLAY MEH</button>
    </div>
  )
}