import React from 'react'
import { Grid, Paper, makeStyles, Container } from '@material-ui/core'
import { FaLightbulb } from 'react-icons/fa'
import '../App.css'

const useStyle = makeStyles((theme) => ({
    peper: {
        height: 'auto',
        marginTop: '-25px',
        marginBottom: "70px",
        padding: "30px",
        borderBottom: "2px solid blue",
    },
    peper2: {
        height: 'auto',
        marginTop: '-25px',
        marginBottom: "70px",
        padding: "30px",
        borderBottom: "2px solid red !important",
    },
    peper3: {
        height: 'auto',
        marginTop: '-25px',
        marginBottom: "70px",
        padding: "30px",
        borderBottom: "2px solid gold !important",
    },
    title: {
        fontSize: '30px',
        marginTop: theme.spacing(5),
        textAlign: 'center',
        fontWeight: '900',
    }
}))


export default function Services() {
    const classes = useStyle();
    return (
        <Container>
            <h5>WHAT I DO?</h5>
            <h3 style={{ marginBottom: "100px" }}>HERE ARE SOME OF MY EXPERTISE</h3>

            <Grid container spacing={3}>
                <Grid item lg={4} md={4} sm={12} xs={12} className={classes.justify}>
                    <div>
                        <div className="hexagon">
                            <FaLightbulb />
                        </div>
                        <Paper className={classes.peper}>
                            <h6 className={classes.title}>
                                Graphic Design
                            </h6>
                            <h6>

                            </h6>
                        </Paper>
                    </div>
                </Grid>

                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <div>
                        <div className="hexagon hex2">
                            <FaLightbulb />
                        </div>
                        <Paper className={classes.peper2}>
                            <h6 className={classes.title}>
                                Web Application
                            </h6>
                            <h6>

                            </h6>
                        </Paper>
                    </div>
                </Grid>

                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <div>
                        <div className="hexagon hex3">
                            <FaLightbulb />
                        </div>
                        <Paper className={classes.peper3}>
                            <h6 className={classes.title}>
                                Software
                            </h6>
                            <h6>

                            </h6>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
