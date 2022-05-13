//always handling objects
const initialState = {
    price : 0.0,
};

function loadPrices(state) {
    return {
        price : state.price + 1600,
    };
}

function applyOffer(state) {
    return { 
        price : state.price * 0.40 / 100,
    };
}

function setPrice(state, newPrice) {
    return {
        //price : state.price,
        price : newPrice,
    };
}

const managerPrice = (state = initialState, action) => {

    switch (action.type) {
        case "SET_INITIAL_PRICE":
            return loadPrices(state);
        
        case "APPLY_OFFER":
           return applyOffer(state);

        case "SET_PRICE":
           return setPrice(state, action["payload"]) ;

        default:
            return state;
    }
};

export default managerPrice;