import React, { useState } from "react"
import { Col, ProgressBar, Card, CardGroup } from "react-bootstrap"
import HTML5 from "../../assets/img/html5.webp";
import CSS3 from "../../assets/img/CSS3.png";
import JS from "../../assets/img/JS.png"
import PHP from "../../assets/img/PHP.png";
import ReactCardFlip from "react-card-flip";
import Project from "../components/Card";
const SecondTab = () => {
    const CardStyle = {
        backgroundColor: 'transparent !important',
        border: "none"

    };

    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <Col className="WorkExperience" md={12}>
            <Project></Project>
        </Col >
    )
}
export default SecondTab