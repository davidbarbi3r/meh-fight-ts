import { useNavigate } from "react-router-dom"
import {styled} from "@stitches/react"
import { StyledNormalBtn } from "../style/StyledBtn"
import homeBackground from "../assets/homebackground.jpg"
import Footer from "../components/layout/Footer"


export const StyledPageContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    backgroundImage: `url(${homeBackground})`,
    backgroundColor: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(10px)",
})

const StyledTitle = styled("h1", {
    fontFamily: "Acme",
    fontSize: "3rem",
})

const TitleBack = styled("div", {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    padding: "3em",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: "20px",
})

export default function Home (){
    const navigate = useNavigate()

  return (
    <StyledPageContainer>
        <span/>
        <TitleBack>
            <StyledTitle>MEH FIGHT GAME</StyledTitle>
            <StyledNormalBtn onClick={() => navigate("/meh-fight-ts/game")}>PLAY MEH</StyledNormalBtn>
        </TitleBack>
        <Footer/>
    </StyledPageContainer>
  )
}