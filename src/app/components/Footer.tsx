import {styled} from "@stitches/react"
import OSIcon from "../assets/blackSeaIcon.png"

const StyledFooter = styled("footer", {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "beige",
  fontFamily: "acme",
  "& div":{
    display: "flex",
    "@media (max-width: 675px)": {
      flexDirection: "column"
    }
  },
  "& p ": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "@media (max-width: 675px)": {
      justifyContent: "center",
    }
  },
  "& i": {
    fontSize: "2em",
    padding: "0.2em"
  },
  "& img": {
    width: "2.3em",
    paddingTop: "2px",
    paddingLeft: "0.2em"
  }, 
  "& a": {
    textDecoration: "none",
    color: "black"
  },
  "& a:hover": {
    opacity: "0.7"
  }, 
  "@media (max-width: 675px)": {
    fontSize: "0.7rem",
    padding: "0" 
  }, 
  "& span": {
    "@media (max-width: 675px)": {
      display: "none"
    }
  }
})

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>
          Made by : @Gnark
          <a href="https://twitter.com/gnark_eth" target={"#"}>
          <i className="devicon-twitter-original"></i>
          </a>
          <a href="https://github.com/davidbarbi3r" target={"#"}>
            <i className="devicon-github-original"></i>
          </a>
        </p>
        <p>
          Assets/Art by : @edwardtheartist
          <a href="https://twitter.com/edwardtheartist" target={"#"}>
            <i className="devicon-twitter-original"></i>
          </a>
          <a href="https://edwardfduffy.com/" target={"#"}>
            <i className="devicon-chrome-plain"></i>
          </a>
          <a href="https://opensea.io/collection/mehs" target={"#"}>
            <img src={OSIcon} alt="opensea icon"></img>
          </a>
        </p>
      </div>
      <span>
        V.0.7.0
      </span>
    </StyledFooter>
  );
}
