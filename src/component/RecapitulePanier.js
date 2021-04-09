import React from 'react';
import {connect} from 'react-redux'
import Panier from './Panier';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import '../style/Card.css';
import '../style/panier.css';
import {
    Link
} from "react-router-dom";
import { calcul } from '../actions/panier';
import { FiArrowLeft } from "react-icons/fi";


class RecapitulePanier extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
         this.props.calcul(this.props.panier.panier);
    }
    render(){
        const {panier} = this.props || [];
        console.log('Panier comp this.props  ===> ',this.props);
        return(
            <Container>
                <Row>
                        <Col xs="8" md="8" xl="8" sm="8" lg="8">
                            <div className='panier'>
                                <Link to="/"> <FiArrowLeft className="btnPlus" color="#212E53" size="40px"/> </Link>
                            </div>
                        </Col>
                        <Col xs="4" md="4" xl="4" sm="2" lg="4">
                            <Panier />
                        </Col>
                </Row>
                <Row>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>
                    <Col xs="10" md="10" xl="10" sm="10" lg="10">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.panier.panier.length > 0 ?

                                    this.props.panier.panier.map(ele => {
                                        return <tr key={ele.isbn}>
                                            <td><img src={ele.cover} className="cover" alt="image"/></td>
                                            <td>{ele.title}</td>
                                            <td>{ele.price}</td>
                                        </tr>
                                    })

                                    : null
                            }
                            <tr>
                                <td> </td>
                                <td> </td>
                                <td>Total: {panier.priceTotale}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>

                </Row>
                <Row>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>
                    <Col xs="10" md="10" xl="10" sm="10" lg="10">
                            {
                                panier.priceTotale && panier.priceTotale !== 0 ?
                                    <div className="priceTotaleAfterDiscount">
                                        <Button variant="info">Payer {panier.priceTotaleAfterDiscount}&nbsp;€</Button>
                                        &nbsp; &nbsp; &nbsp;
                                        au lieu de &nbsp;&nbsp;
                                        <span className="linethrough">{panier.priceTotale}&nbsp;€</span>
                                    </div>
                                : null
                            }
                    </Col>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>
                </Row>
            </Container>
        );
    }
}

const  mapStateToProps = (state) => ({
    panier: state.panier,
});

export default connect(mapStateToProps, {calcul})(RecapitulePanier);
