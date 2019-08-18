import {updateProducts} from './product-list';
import {updateCart} from './cart';
import {updateAlerts} from './alerts';

const reducer = (state, action) => {
    return {
        productList: updateProducts(state, action),
        cart: updateCart(state, action),
        alertList: updateAlerts(state, action)
    };
};

export default reducer;