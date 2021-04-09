import { GET_BOOKS, GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS} from "../constants/books";

const initialState = {
    books: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKS:
            return action.books;

        default:
            return state;
    }
}