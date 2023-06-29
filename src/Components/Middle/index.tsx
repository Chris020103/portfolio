import react from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai"
import SecondTab from './SecondTab'
const Middle = () => {
    return (
        <Row>
  
            <div className='middle-div'>
                <Col className='svgCol d-inline-block' xs={12} lg={6}>
                    <div className="svg">
                        <AiOutlineArrowRight size={150} />
                        <h3 className='col-md-5 offset-md-7 float-right'>
                            Since september 2021
                        </h3>
                    </div>

                </Col>
                <Col xs={12} lg={6}>
                    <Col className='informationTab' md={{ span: 9, offset: 2 }}>
                        <Carousel fade interval={null}>
                            <Carousel.Item>
                                <h2>Chris Moerman</h2>
                                <h3>Informatie over mijzelf</h3>
                                <p>Aangenaam ik ben Chris Moerman, ben 20 jaar oud en wonende in Krimpen aan den IJssel. <br />Momenteel woon ik nog onder het dak bij mijn ouders, daar zit ik voor nu even prima. </p>
                                <h3>Werkervaring</h3>
                                <p>Momenteel ben ik werkende als software developer bij Louvels.dev. Dit doe ik momenteel parttime aangezien ik naast het werk ook nog een opleiding doe. </p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>Opleidingen</h2>
                                <h3>Hogeschool Rotterdam (HBO)</h3>
                                <p>In de vorige slider heeft u kunnen lezen dat ik naast het werk ook nog een opleiding doe, op dit moment volg ik de opleiding "Creative media and game technologies(CMGT). Bij deze opleiding leer ik het vak programmeren en leer ik het designen achter een website.</p>
                                <h3>Grafisch Lyceum (MBO4)</h3>
                                <p>Voor deze opleiding heb ik een MBO4 afgerond op het Grafisch Lyceum Rotterdam(GLR). Deze opleiding heette destijds "Applicatie-media ontwikkelaar", deze  opleiding heb ik met een nette voldoende af weten te ronden.</p>

                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>Vrijetijds besteding</h2>
                                <h3>Sporten</h3>
                                <p>Buiten school en werk heb ik natuurlijk ook nog wat andere dingen te doen. Ik oefen namelijk de sport waterpolo uit dat doe ik 3 keer per week met veel plezier.</p>
                                <h3>Buiten het sporten om als ik geen werk/school heb</h3>
                                <p>Als ik niet met al dat andere bezig ben, ben ik vaak met vrienden en mijn vriendin op pad ergens een drankje doen of wat afleiding ergens zoeken.</p>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Col>
            </div >
            <SecondTab />
        </Row >
    )
}
export default Middle;