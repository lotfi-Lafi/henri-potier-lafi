import React from 'react';
import {connect} from 'react-redux'
import { addPanier } from '../actions/panier';
import {
    Link
} from "react-router-dom";
import '../style/panier.css';
import {FiShoppingCart } from "react-icons/fi";


class Panier extends React.Component{

    render(){
        console.log('Panier comp this.props  ===> ',this.props);
        return(
            <div className='panier'>
                <Link to="/panier" className="count">
                    <span  className="styleCounterText">
                        Cliquez ici pour voir le panier
                    </span>
                    <FiShoppingCart color="#212E53" size="30px"/>
                    <span  className="styleCounter">
                        {this.props.panier.counter}
                    </span>
                </Link>
            </div>
        );
    }
}

const  mapStateToProps = (state) => ({
    panier: state.panier
});

export default connect(mapStateToProps, {addPanier})(Panier);
