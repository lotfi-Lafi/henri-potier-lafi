import React from 'react';
import '../style/Card.css';
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { addPanier } from '../actions/panier';
import { FiPlusCircle } from "react-icons/fi";

class CardBook extends React.Component{
    constructor(props) {
        super(props);
    }
    handelAddPanier = (book) => {
        this.props.addPanier(book);
    };
    render() {
        return (
            <div className="card">
                <Container fluid="md">
                    <Row>
                        <Col xs lg="4"><img src={this.props.book.cover} className="cover" alt="image"/></Col>
                        <Col xs lg="4">
                            <h6>{this.props.book.title}</h6>
                            <h4>{this.props.book.price}&nbsp;€</h4>
                        </Col>
                        <Col xs lg="4" className="btn">
                            <span
                                    onClick={() => this.handelAddPanier(this.props.book)}>
                                <FiPlusCircle className="btnPlus" color="#212E53" size="40px"/>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
const  mapStateToProps = (state) => ({
    panier: state.panier
});

export default connect(mapStateToProps, {addPanier})(CardBook);
