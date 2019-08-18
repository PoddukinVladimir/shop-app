const generateRandomId = () => Math.floor(Math.random() * 100000 + 5);

export const updateProducts = (state, action) => {
    if (state === undefined) {
        return {
            products: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case `FETCH_ITEMS_REQUEST`:
            return {
                products: [],
                loading: true,
                error: null
            };
        case `FETCH_ITEMS_SUCCESS`:
            return {
                products: action.payload,
                loading: false,
                error: null
            };
        case `FETCH_ITEMS_ERROR`:
            return {
                products: [],
                loading: false,
                error: action.payload
            };
        case `PRODUCT_ADDED_TO_LIST`:
            const newItem = {
                id: generateRandomId(),
                visible: true,
                ...action.payload
            };

            return {
                ...state.productList,
                products: [
                    ...state.productList.products,
                    newItem
                ]
            };
        default:
            return state.productList;
    }
};