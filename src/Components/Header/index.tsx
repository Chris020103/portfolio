import react from 'react'
import { Row, Col } from 'react-bootstrap'
import ProfilePicture from "../../assets/img/Chrissie.jpg";
import { AiOutlineArrowDown } from "react-icons/ai"
import Middle from '../Middle';
import {Widget} from "../Widgets";
const Header = () => {
    return (
        <>
            <Row>
                <Row style={{ marginTop: '5%' }} md={12}>
                    <Col sm={6} md={3}><h3 className="headerText">Chris Moerman</h3></Col>
                    <Col sm={6} md={3}><h3 className="headerText">Medior Software Developer</h3></Col>
                    <Col sm={6} md={3}><h3 className="headerText">Krimpen aan den IJssel</h3></Col>
                    <Col sm={6} md={3}><h3 className="headerText">20 jaar</h3></Col>
                </Row>
                <div className='header-div'>
                    <Col xs={12} lg={6}>
                        <Col sm={12} md={{ span: 8, offset: 2 }} lg={12}>
                            <h1 className='h1Header' style={{ position: 'absolute' }}>Medior software developer</h1>
                            <img className="img-right" src={ProfilePicture} alt='Profile picture header' />
                        </Col>
                    </Col>
                    <Col style={{ float: 'right' }} className='svgCol d-inline-block' xs={12} lg={6}>
                        <AiOutlineArrowDown size={250} />
                    </Col>
                </div>
            </Row >
            <Middle></Middle>
            <Widget></Widget>
        </>
    )
}
export default Header;