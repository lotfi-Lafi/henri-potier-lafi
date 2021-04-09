import React from 'react';
import {connect} from 'react-redux'
import { getBooks } from '../actions/books';
import CardBook from './CardBook';
import Panier from './Panier';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/panier.css';
import 'font-awesome/css/font-awesome.min.css';

class Books extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }
    handelOnChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    };
    componentDidMount() {
        this.props.getBooks();
    }
    render(){
        const {books} = this.props || [];
        return(
            <Container>
                <Row>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>
                    <Col xs="7" md="7" xl="7" sm="7" lg="7">

                    </Col>
                    <Col xs="4" md="4" xl="4" sm="2" lg="4">
                        <Panier />
                    </Col>
                </Row>
                <Row>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>
                    <Col xs="10" md="10" xl="10" sm="10" lg="10">
                        <h1 className="title">La bibliothèque d'Henri Potier</h1>
                        <br/>
                    </Col>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>

                </Row>
                <Row>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>
                    <Col xs="10" md="10" xl="10" sm="10" lg="10">
                        <input
                            type="text"
                            className="input"
                            placeholder="Search..."
                            onChange={(event) => {
                                this.handelOnChange(event);
                            }}
                        />
                    </Col>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>
                </Row>
                <Row>
                    <Col xs="1" md="1" xl="1" sm="1" lg="1">
                    </Col>
                    <Col xs="10" md="10" xl="10" sm="10" lg="10">
                    {
                        books.length > 0 ?
                            books.filter((val) => {
                                if ( this.state.searchTerm === ""){
                                    return val;
                                }else if (val.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
                                    return val;
                                }
                            }).map((book) => {
                                return  <CardBook key={book.isbn} book={book}/>
                            }) : null
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
    books: state.books
});

export default connect(mapStateToProps, {getBooks})(Books);
