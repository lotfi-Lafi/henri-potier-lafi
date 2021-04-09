import {GET_PANIER, ADD_PANIER, DELETE_PANIER, CALCUL_PRICE_TOTLAE, CALCUL_PANIER} from "../constants/panier";

const initialState = {
    panier: [],
    counter: 0,
    offre: [],
    priceTotale: null,
    priceTotaleAfterDiscount: null
};

export default function(state = initialState, action) {
      console.log('action reducer ',action);
      console.log('state reducer ',state);

    switch(action.type) {
        case ADD_PANIER:
            return  {panier: [...state.panier, action.panier], counter: state.counter+1};
        case CALCUL_PANIER:
            return {
                ...state,
                offre: action.offre,
                priceTotale: action.priceTotale,
                priceTotaleAfterDiscount: action.priceTotaleAfterDiscount
            };
        /*case CALCUL_PRICE_TOTLAE:
            return {
                ...state,
                priceTotale: action.priceTotale
            };*/
        default:
            return state;
    }
}