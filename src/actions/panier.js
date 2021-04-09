import {CALCUL_PANIER, ADD_PANIER, DELETE_PANIER, CALCUL_PRICE_TOTLAE} from "../constants/panier";
import axios from 'axios';
import {GET_BOOKS} from "../constants/books";

export function addPanier(book) {
    return (dispatch) => {
        dispatch({
            type: ADD_PANIER,
            panier: book,
        });

    }
}
function calculOffre(result, priceTotale) {
    let percentage = 0;
    let minus = 0;
    let slice = 0;
    let listOffreMin = [];
    if (result && result.data && result.data.offers){
        result.data.offers.map((offre) => {
            switch(offre.type) {
                case "percentage":
                    percentage = priceTotale - ((priceTotale * offre.value) / 100 );
                    listOffreMin.push(percentage);
                    return percentage;
                case "minus":
                    minus = priceTotale - offre.value;
                    listOffreMin.push(minus);
                    return minus;
                case "slice":
                    if (priceTotale >= offre.sliceValue){
                        let rest  = priceTotale - offre.sliceValue;
                        slice = (offre.sliceValue -  offre.value) + rest;
                        listOffreMin.push(slice);
                        return slice;
                    }
                    slice = priceTotale;
                    listOffreMin.push(slice);
                    return slice;
            }
        });
        console.log(' calculOffre  listOffreMin = ',  listOffreMin);
        console.log(' calculOffre  Math.min(...listOffreMin) = ', Math.min(...listOffreMin) );
        return Math.min(...listOffreMin);
    }


}

export function calcul(listBooks) {
    //console.log('calcul listBooks = ',listBooks);

    let listIdOfBooks = [];
    let priceTotale = 0;

    if (listBooks){
        listBooks.map((ele) => {
            listIdOfBooks.push(ele.isbn);
            priceTotale = priceTotale + ele.price;
        });
    }
    //console.log('calcul listIdOfBooks = ', listIdOfBooks);
    return (dispatch, state) => {
        axios.get(`https://henri-potier.techx.fr/books/${listIdOfBooks}/commercialOffers`).then((result) => {
            console.log(' CALCUL_PANIER res = ', result );

            let priceTotaleAfterDiscount =  calculOffre(result, priceTotale);
            dispatch({
                type: CALCUL_PANIER,
                offre: result.data,
                priceTotale: priceTotale,
                priceTotaleAfterDiscount: priceTotaleAfterDiscount
            });
        });
    }
}
