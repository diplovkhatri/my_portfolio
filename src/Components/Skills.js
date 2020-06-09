import React from 'react'
import { Container, Slider, Grid, Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root: {
        marginBottom: '200px',
    },
    slide: {
        background: 'none',
        fontSize: '18px',
        fontWeight: '900',
        letterSpacing: "0.1rem",
    },
    prg: {
        fontSize: '18px',
        textAlign: 'justify',
        marginBottom: theme.spacing(10),
    },
}))

export default function Skills() {
    const classes = useStyle();
    return (
        <Container>
            <h5>My Speciality</h5>
            <h3>MY SKILLS</h3>
            <h6 className={classes.prg}>
                I learnd the Differents types of Skills some of them are as below:
            </h6>

            <Grid container className={classes.root}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography gutterBottom className={classes.slide}>
                        HTML
              </Typography>
                    <Slider color="primary"
                        value={75}
                        min={0}
                        max={100}
                        valueLabelDisplay="on"
                    />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography gutterBottom className={classes.slide}>
                        JS
              </Typography>
                    <Slider
                        color="secondary"
                        value={25}
                        min={0}
                        max={100}
                        valueLabelDisplay="on"
                    />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography gutterBottom className={classes.slide}>
                        CSS3
              </Typography>
                    <Slider
                        color="secondary"
                        value={65}
                        min={0}
                        max={100}
                        valueLabelDisplay="on"
                    />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography gutterBottom className={classes.slide}>
                        REACTJS
              </Typography>
                    <Slider
                        color="primary"
                        value={50}
                        min={0}
                        max={100}
                        valueLabelDisplay="on"
                    />
                </Grid>
            </Grid>

        </Container>
    )
}

