import React from 'react'
import { Container, Typography, makeStyles, Grid, Collapse } from '@material-ui/core'
import { FaPlus, FaMinus } from 'react-icons/fa'


const useStyle = makeStyles((theme) => ({
    title: {
        fontSize: '16px',
        height: 'auto',
        padding: '10px',
        marginBottom: '10px',
        cursor: 'pointer',
    },
    collaps: {
        padding: '20px',
        fontSize: '18px',
        fontWeight: '500',
        letterSpacing: '0.07rem',
        textAlign: 'justify',
    },

}))


export default function Education() {
    const classes = useStyle();

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClick = (e) => {
        setOpen(!open);
        setOpen1(false);
        setOpen2(false);
    }
    const handleClick1 = (e) => {
        setOpen1(!open1);
        setOpen(false);
        setOpen2(false);
    }
    const handleClick2 = (e) => {
        setOpen2(!open2);
        setOpen(false);
        setOpen1(false);
    }

    return (
        <Container>
            <h5>EDUCATION</h5>
            <h3>EDUCATION</h3>
            <Grid container style={{ marginBottom: "300px" }}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.title} onClick={handleClick} aria-controls="Degree" aria-expanded={open}>
                        <Grid container>
                            <Grid item lg={11} md={11} sm={11} xs={11}>
                                BACHELOR DEGREE EDUCATION
                            </Grid>
                            <Grid item lg={1} md={1} sm={1} xs={1}>
                                {open ? <FaMinus /> : <FaPlus />}
                            </Grid>
                        </Grid>

                    </Typography>
                    <Collapse in={open}>
                        <Grid id="Degree" className={classes.collaps}>
                            Studying the BACHELOR in Computer Engineering at Everest Engineering College Since 2016.
                        </Grid>
                    </Collapse>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.title} onClick={handleClick1} aria-controls="highersecondary" aria-expanded={open1}>
                        <Grid container>
                            <Grid item lg={11} md={11} sm={11} xs={11}>
                                HIGHER SECONDARY EDUCATION
                            </Grid>
                            <Grid item lg={1} md={1} sm={1} xs={1}>
                                {open1 ? <FaMinus /> : <FaPlus />}
                            </Grid>
                        </Grid>
                    </Typography>
                    <Collapse in={open1}>
                        <Grid id="highersecondary" className={classes.collaps}>
                            Graduated in 2016 from chhorepatan higher secondary school
                        </Grid>
                    </Collapse>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.title} onClick={handleClick2} aria-controls="secondary" aria-expanded={open2}>
                        <Grid container>
                            <Grid item lg={11} md={11} sm={11} xs={11}>
                                SECONDARY EDUCATION
                            </Grid>
                            <Grid item lg={1} md={1} sm={1} xs={1}>
                                {open2 ? <FaMinus /> : <FaPlus />}
                            </Grid>
                        </Grid>
                    </Typography>
                    <Collapse in={open2}>
                        <Grid id="secondary" className={classes.collaps}>
                            Graduated in 2014 from Balodaya English Boading School
                        </Grid>
                    </Collapse>
                </Grid>

            </Grid>

        </Container>
    )
}


