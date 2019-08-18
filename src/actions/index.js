const productsLoaded = (newBooks) => {
    return {
        type: `FETCH_ITEMS_SUCCESS`,
        payload: newBooks
    }
};

const productsRequested = () => {
    return {
        type: `FETCH_ITEMS_REQUEST`
    }
};

const productsError = (error) => {
    return {
        type: `FETCH_ITEMS_ERROR`,
        payload: error
    }
};

const addedToCart = (id) => {
    return {
        type: `ITEM_ADDED_TO_CART`,
        payload: id
    }
};

const removedFromCart = (id) => {
    return {
        type: `ITEM_REMOVED_FROM_CART`,
        payload: id
    }
};

const itemsRemovedFromCart = (id) => {
    return {
        type: `ITEMS_REMOVED_FROM_CART`,
        payload: id
    }
};

const clearCart = () => {
    return {
        type: `CLEAR_CART`
    }
};

const newProductAdded = (id) => {
    return {
        type: `PRODUCT_ADDED_TO_LIST`,
        payload: id
    }
};

const showAlert = (id, text) => {
    return {type: 'SHOW_ALERT', payload: {id, text}}
};

const hideAlert = (id) => {
    return {type: 'HIDE_ALERT', payload: {id}}
};

let nextNotificationId = 0;

const showAlertWithTimeout = (text) => {
    return function (dispatch) {
        const id = nextNotificationId++;
        dispatch(showAlert(id, text));

        setTimeout(() => {
            dispatch(hideAlert(id))
        }, 3000)
    }
};

export {
    productsRequested,
    productsError,
    productsLoaded,
    addedToCart,
    removedFromCart,
    itemsRemovedFromCart,
    clearCart,
    newProductAdded,
    showAlertWithTimeout
}
