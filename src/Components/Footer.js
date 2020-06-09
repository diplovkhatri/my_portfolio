import React from 'react'
import { Container, Grid, TextField, Button, TextareaAutosize, makeStyles } from '@material-ui/core'
import { FaPhone, FaMap, FaPeopleCarry } from 'react-icons/fa'


const useStyle = makeStyles((theme) => ({
    icon: {
        textAlign: "center",
        backgroundColor: '#e8e8e8',
        padding: theme.spacing(1),
        marginBottom: '30px',
        fontSize: '60px',
        borderRadius: "10px",
        '&:hover': {
            backgroundColor: "black",
            color: "white",
        }
    },
    text: {
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(9 - 3.5),
        width: "100%"
    },
    marg: {
        marginTop: '80px',
        paddingBottom: '20px'
    }
}))

export default function Footer() {
    const classes = useStyle();
    return (
        <Container>
            <Grid container className={classes.marg}>
                <Grid item lg={6} md={6} sm={12} xs={12}>

                    <Grid container fluid="true">
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container fluid="true" >
                                <Grid item lg={3} md={3} sm={3} xs={3}>
                                    <a href="#">
                                        <div className={classes.icon}>
                                            <FaMap />
                                        </div>
                                    </a>
                                </Grid>
                                <Grid item lg={9} md={9} sm={9} xs={9}>
                                    <div className={classes.text}>
                                        29 ward pardesh-4,gandaki Nepal
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container fluid="true">
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container fluid="true">
                                <Grid item lg={3} md={3} sm={3} xs={3}>
                                    <a href="#">
                                        <div className={classes.icon}>
                                            <FaPeopleCarry />
                                        </div>
                                    </a>
                                </Grid>
                                <Grid item lg={9} md={9} sm={9} xs={9}>
                                    <div className={classes.text}>
                                        Diplovkhatri99@gmail.com
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container fluid="true">
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container fluid="true">
                                <Grid item lg={3} md={3} sm={3} xs={3}>
                                    <a href="#">
                                        <div className={classes.icon}>
                                            <FaPhone />
                                        </div>
                                    </a>
                                </Grid>
                                <Grid item lg={9} md={9} sm={9} xs={9}>
                                    <div className={classes.text}>
                                        +977-9846029863
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="name"
                            type="text"
                            id="name"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="subject"
                            label="subject"
                            type="text"
                            id="subject"
                        />
                        <TextareaAutosize
                            rowsMin={4}
                            variant="filled"
                            style={{ width: "100%", borderRadius: "5px", marginBottom: "20px", marginTop: "20px", padding: "10px", background: "#e8e8e8", outline: "none", borderBottom: "1px solid gray" }}
                            label="message"
                            type="text"
                            id="message"
                            name="message"
                            placeholder="message*"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            SEND
                        </Button>

                    </form>
                </Grid>
            </Grid>
        </Container >
    )
}
