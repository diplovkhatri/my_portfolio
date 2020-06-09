import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    tex: {
        marginLeft: "20px",
        marginRight: theme.spacing(12),
        marginTop: "20px",
        marginBottom: "20px",
        letterSpacing: "0.2rem",
        fontWeight: "800",
        height: theme.spacing(5),
        color: "black !important",
        '&:hover': {
            backgroundColor: 'blue !important',
            color: "white !important",

            width: "90%",
            textAlign: "center",
            borderRadius: "10px 10px 10px 10px"
        }
    },

}))

export default function Head() {
    const classes = useStyle();

    return (
        <Navbar expand="md" collapseOnSelect style={{
            margin: "0px", padding: "0px", flexDirection: "column", zIndex: "1000", position: "fixed", top: "40px", bottom: "auto"
        }}>


            <Navbar.Toggle id="#responsive-navbar-nav" style={{
                backgroundColor: "whiteSmoke", position: "fixed", left: "10px", top: "5px", zIndex: "200"
            }} />

            < Navbar.Collapse id="responsive-navbar-nav" style={{ backgroundColor: "whiteSmoke", zIndex: "100", width: "100%", right: "0", height: "100vh" }}>

                <Nav style={{ flexDirection: "column", textAlign: "left" }} >

                    <Nav.Link className={classes.tex} href="#">HOME</Nav.Link>
                    <Nav.Link className={classes.tex} href="#">PAGES</Nav.Link>
                    <Nav.Link className={classes.tex} href="#">PORTFOLIO</Nav.Link>
                    <Nav.Link className={classes.tex} href="#">BLOG</Nav.Link>
                    <Nav.Link className={classes.tex} href="#">ELEMENTS</Nav.Link>

                </Nav>
            </Navbar.Collapse >
        </Navbar >

    )
}
