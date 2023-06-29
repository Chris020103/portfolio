import React, { useState } from "react";
import "./styles.css";
import {Col, Row} from "react-bootstrap";

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
    "--menu-height"
);

const buttons = ["Game CLE4", "Game CLE3", "MoermanJansen", "Insights"];

export const Widget = () => {
    const [activeBlock, setActiveBlock] = useState(0);

    const toggleMenuBlock = (index: number) => {
        setActiveBlock(index);
    };

    return (
        <article className="card2 w-100">
            <div className="buttons">
                {buttons.map((button, index) => (
                    <button
                        className={index === activeBlock ? "active" : ""}
                        onClick={() => toggleMenuBlock(index)}
                    >
                        {button}
                    </button>
                ))}
            </div>
            <div className="wrapper">
                <div
                    className="content"
                    style={{ translate: `0 calc(0px - ${menuHeight} * ${activeBlock})` }}
                >
                    <div className="block">
                        <h2>Game CLE4</h2>
                        <Row>
                            <Col md={12}>
                                <p>
                                    Voor CLE4 heb ik gezamelijk met Baruch Geuze, Frans Fouad en Sander den Butter een game gemaakt wat een endless runner geworden is.
                                    Mijn taak binnen dit project was het programmeren van dit project en het bijhouden van de planning. Hierbij de link:
                                </p>
                            </Col>
                            <Col md={12}>
                                <a style={{color: 'white'}} href="#">Game</a>
                            </Col>
                        </Row>
                    </div>
                    <div className="block">
                        <h2>Game Programmeren 4</h2>
                        <Row>
                            <Col md={12} className={"d-flex justify-content-center"}>
                                <p >
                                    Voor dit project heb ik zelf een game moeten ontwikkelen dus heb ik ook alles zelf gedaan.
                                </p>
                            </Col>
                            <Col md={12}>
                                <a style={{color: 'white'}} href="https://chris020103.github.io/PROG-4-game/">Game</a>
                            </Col>

                        </Row>
                    </div>
                    <div className="block">
                        <h2>MoermanJansen</h2>
                        <Row>
                            <Col md={12} className={'d-flex justify-content-center'}>
                                <p>Buiten de projecten van school heb ik ook projecten gedaan voor klanten, zo heb ik door middel van een CMS de website van MoermanJansen in elkaar gezet.</p>
                            </Col>
                            <Col md={12}>
                                <a style={{color: 'white'}} href="https://moermanjansen.nl">MoermanJansen</a>
                            </Col>

                        </Row>
                    </div>
                    <div className="block">
                        <h2>Offerte tool Kraakman</h2>
                        <Row>
                            <Col md={12} className={'d-flex justify-content-center'}>
                                <p>Daarbij heb ik ook voor de grootste John Deere dealer een project mogen maken gezamelijk met Louvels.dev</p>
                            </Col>
                            <Col md={12}>
                                <a style={{color: 'white'}} href="https://offerte.kraakman.nl">Kraakman</a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </article>
    );
};