import React from 'react'
import { Button, Grid, Paper, Container, makeStyles, Card, CardContent, CardActions } from '@material-ui/core'
import { FaLightbulb, FaGlobe, FaDatabase, FaMobile } from 'react-icons/fa'
import '../App.css'

const useStyles = makeStyles((theme) => ({
    top: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8)
    },
    card: {
        backgroundColor: 'gold',
        height: theme.spacing(35),
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(4),
        marginBottom: theme.spacing(10),
    },
    cardcontain: {
        letterSpacing: '0.2rem',
        fontSize: '22px',
        textAlign: 'left',
        marginLeft: theme.spacing(6),
        fontWeight: '800',
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(3),
    },
    paper: {
        textAlign: 'center',
        fontSize: theme.spacing(8),
        borderBottom: '2px solid blue',
    },
    paper1: {
        textAlign: 'center',
        fontSize: theme.spacing(8),
        borderBottom: '2px solid red'
    }
    , paper2: {
        textAlign: 'center',
        fontSize: theme.spacing(8),
        borderBottom: '2px solid gold'
    },
    paper3: {
        textAlign: 'center',
        fontSize: theme.spacing(8),
        borderBottom: '2px solid purple'
    }
}))

export default function AboutMe() {
    const classes = useStyles();
    return (
        <Container>
            <div style={{ marginTop: "100px" }}>
                <h5>ABOUT US</h5>
                <h3>WHO AM I?</h3>
                <h6>
                    <b>Hi I'm <i>Diplo Khatri</i></b>.Born in 1996 A.D in midddle family.
                </h6>
                <h6>
                    Got graduate in secondary endcation in 2014,higher secondary education inn 2016 with Science subject and under graduate at BE computer
                </h6>
            </div>
            <Grid container spacing={4} className={classes.top}>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Paper >
                        <div className={classes.paper}>
                            <FaLightbulb />
                            <br />
                            <h4> graphic Design</h4>
                        </div>

                    </Paper>
                </Grid>

                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Paper>
                        <div className={classes.paper1}>
                            <FaGlobe />
                            <br />
                            <h4>Web Design</h4>
                        </div>
                    </Paper>
                </Grid>

                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Paper> <div className={classes.paper2}>
                        <FaDatabase />
                        <br />
                        <h4>Software</h4>
                    </div>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Paper> <div className={classes.paper3}>
                        <FaMobile />
                        <br />
                        <h4>Application</h4>
                    </div></Paper>
                </Grid>
            </Grid>
            <Card className={classes.card}>
                <CardContent className={classes.cardcontain}>
                    I am happy to know you<br />
                    that 5+ projects done sucessfully!
                </CardContent>
                <CardActions className={classes.cardcontain}>
                    <Button variant="contained"><b>HIRE ME</b></Button>
                </CardActions>
            </Card>
        </Container>
    )
}
