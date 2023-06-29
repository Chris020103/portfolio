import React from "react";
import { ProgressBar, Card, CardGroup } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import Data from "./data.json";
import HTML5 from "../../../assets/img/html5.webp"
import CSS from "../../../assets/img/CSS3.png"
import JS from "../../../assets/img/JS.png"
import PHP from "../../../assets/img/PHP.png"
import Docker from "../../../assets/img/docker.png";
const Cards = (project: any) => {
    let IMG = '';
    let imgStyling = { width: '40px' }
    if (project.project.title === 'HTML5') {
        IMG = HTML5;
        imgStyling = { width: '40px' }
    }
    if (project.project.title === 'CSS3') {
        IMG = CSS;
        imgStyling = { width: '40px' }
    }
    if (project.project.title === 'JS') {
        IMG = JS;
        imgStyling = { width: '40px' }
    }
    if (project.project.title === 'PHP') {
        IMG = PHP;
        imgStyling = { width: '40px' }
    }
    if (project.project.title === 'Docker') {
        IMG = Docker;
        imgStyling = { width: '90px' }
    }

    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <ReactCardFlip containerClassName="col-md-3 col-sm-6 col-xs-12" isFlipped={isFlipped} flipDirection="horizontal">
            <div
                onMouseEnter={() => setIsFlipped((prev) => !prev)}
                className="CardFront"
            >
                <Card>
                    <Card.Img style={imgStyling} className={"workImages m-auto"} alt={project.project.alt} variant="top" src={IMG} />
                    <Card.Body>
                        <p style={{ color: project.project.color }}>{project.project.title}</p>
                        <Card.Text>
                            <ProgressBar variant={"progress-bar-" + project.project.title} now={project.project.experiencePercent} label={`${project.project.experiencePercent}%`} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div
                onMouseLeave={() => setIsFlipped((prev) => !prev)}
                className="CardBack"
            >
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <p style={{ color:'white', fontSize: '0.7rem' }}>{project.project.description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </ReactCardFlip>
    );
};


const Projects = () => {
    return (
        <CardGroup>
            {
                Data.map((item, index) => {
                    return (
                        <Cards project={item} key={`card-${index}`} />
                    )
                })
            }
        </CardGroup >
    );
};

export default Projects;
