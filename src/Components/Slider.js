import React, { Component, useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import logo from '../photo/gallery.jpeg'
import '../App.css'


export default class Slider extends Component {
    render() {
        return (
            <div>
                {<Slide />}
            </div>
        )
    }
}
function Slide() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                />
                <Carousel.Caption className="fixed caption" >
                    <h2><b><p><i>Hi !</i></p></b></h2>
                    <h2><b><p>I'am Diplov</p></b></h2>
                    <Button variant="outlined" color="secondary" style={{ borderColor: "black", color: "black", fontWeight: "900", backgroundColor: "white", fontSize: "18px", marginTop: "30px" }}>Read More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                />
                <Carousel.Caption className="fixed caption">
                    <h2><b><p>I am</p></b></h2>
                    <h2><b><p>a Designer</p></b></h2>
                    <Button variant="outlined" color="secondary" style={{ borderColor: "black", color: "black", fontWeight: "900", backgroundColor: "white", fontSize: "18px", marginTop: "30px" }}>Read More</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );

}