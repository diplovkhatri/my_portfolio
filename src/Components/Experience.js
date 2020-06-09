import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    prg: {
        textAlign: 'justify',
    },
    margins: {
        marginBottom: "200px",
    }
}))

export default function Experience() {
    const classes = useStyle();
    return (
        <Container className={classes.margins}>
            <h5>EXPERIENCE</h5>
            <h4>WORK EXPERIENCE</h4>
            <div className="timeline">
                <div className="container right">
                    <div className="content">
                        <h2>Until Now <h6>...2020</h6></h2>
                        <h6 className={classes.prg}>Dont have any Experiences of Work</h6>
                    </div>
                </div>

            </div>
        </Container>
        // </Container>
    )
}
