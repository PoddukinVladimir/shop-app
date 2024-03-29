import {
    ITEM_ADDED_TO_CART,
    ITEM_REMOVED_FROM_CART,
    ITEMS_REMOVED_FROM_CART,
    CLEAR_CART
} from '../actions/action-types';

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        // remove item
        return cartItems.filter((cItem) => cItem.id !== item.id);
    }
    if (idx === -1) {
        // add new item
        return [
            ...cartItems,
            item
        ]
    } else {
        // update existing collection
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ]
    }
};

const updateCartItem = (product, item = {}, quantity) => {
    const {
        id = product.id,
        count = 0,
        price = product.price,
        name = product.name,
        total = 0
    } = item;

    return {
        id,
        name,
        price,
        count: count + quantity,
        total: total + quantity * product.price
    };
};

const updateOrder = (state, productId, quantity) => {
    const {productList: {products}, cart: {cartItems}} = state;

    const product = products.find(({id}) => id === productId);
    const itemIndex = cartItems.findIndex(({id}) => id === productId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(product, item, quantity);

    return {
        ...state.cart,
        totalPrice: state.cart.totalPrice + newItem.price * quantity,
        totalCount: state.cart.totalCount + quantity,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};

const defaultState = {
    cart: {
        cartItems: [
            {
                id: 1,
                name: `Secrets Of The JavaScript Ninja`,
                count: 1,
                price: 45,
                total: 45
            }
        ],
        totalPrice: 45,
        totalCount: 1
    }
};

export const updateCart = (state = defaultState, action) => {
    switch(action.type) {
        case ITEM_ADDED_TO_CART:
            return updateOrder(state, action.payload, 1);
        case ITEM_REMOVED_FROM_CART:
            return updateOrder(state, action.payload, -1);
        case ITEMS_REMOVED_FROM_CART:
            const item = state.cart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        case CLEAR_CART:
            return {
                ...state.cart,
                cartItems: [],
                totalPrice: 0,
                totalCount: 0
            };
        default:
            return state.cart;
    }
};