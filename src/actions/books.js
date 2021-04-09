import axios from 'axios';
import { GET_BOOKS, GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS} from "../constants/books";


export function getBooks() {
    return (dispatch) => {
        axios.get('https://henri-potier.techx.fr/books').then((result) => {
            console.log(' res = ', result );
            dispatch({
                type: GET_BOOKS,
                books: result.data
            });
        });
    }
}