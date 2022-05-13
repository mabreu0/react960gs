function createActionSetPrice() {
    //define action to handle prices variations 

    function initialPriceAction() {
        return ({
                type : "SET_INITIAL_PRICE",
            });
    }

    function applyDiscountAction() {
        return ({
                type : "APPLY_OFFER",
            });
    }

    return [ initialPriceAction, applyDiscountAction ];
}

export default createActionSetPrice;