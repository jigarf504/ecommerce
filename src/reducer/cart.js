const reducer = (cart = [],action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...cart,action.payload]
        case "REMOVE_FROM_CART" :
            return cart.filter(c => c.id != action.payload)
        case "ADDITION_ITEM_CART":
            return cart.map(c => {
                console.log(c,action.payload)
                if (c.id === action.payload) {
                    c.qty = +c.qty + 1
                }
                return c
            })
            return cart
        case "SUBTRACT_ITEM_CART":
            let carts = cart.map(c => {
                if (c.id === action.payload) {
                    c.qty = +c.qty - 1
                }
                return c
            })
            return carts.filter(c => c.qty > 0)
        default:
            return cart;
    }
}
export default reducer