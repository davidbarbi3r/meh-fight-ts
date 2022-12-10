import {styled} from "@stitches/react"

export const StyledNormalBtn = styled("button", {
    padding: "0.5em 0.75em",
    margin: "0 0.5em",
    fontSize: "1.25rem",
    border: "solid 2px black",
    borderRadius: "15px",
    backgroundColor:"rgba(219, 111, 9, 0.411)",
    transition: "all 200ms ease-out",
    fontFamily: "Acme",
    "&:hover": {
        cursor: "pointer",
        backgroundColor: "rgba(216, 168, 123, 0.438) "
    }
})