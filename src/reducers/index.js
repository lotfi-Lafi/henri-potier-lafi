import {combineReducers} from 'redux';
import books from './books';
import panier from './panier';


export default combineReducers({
    books,
    panier
});