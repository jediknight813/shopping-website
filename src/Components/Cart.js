import '../Styles/Styles.css'
import React from 'react';

var show_cart = false
var cart_class = 'cart_background';

var price = 0

function Cart(data) {
    console.log(data)
    Updatecart()
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    get_cost_of_all_items_in_cart() 


    function ShowCart() {
        if (show_cart === false){
            show_cart = true
            cart_class = 'cart_background_hidden';
        }

        else {
            show_cart = false
            cart_class = 'cart_background';
        }
        console.log(cart_class)
        forceUpdate()
     }

     function get_cost_of_all_items_in_cart() {
        price = 0 
        data['data'].map(Element => (
            price += Element.image.price
         ))
     }


    function Updatecart() {
        return (
            <div className={cart_class} > 
                {data['data'].map(items =>
                    <div key={Math.random()}>
                        <img className="cart_item_image" alt={items.image.price} src={items.image.image} /> 
                        <h1 className="cart_item_text" > {"$"+items.image.price} </h1>
                        <button className="remove_item_from_cart_button"> remove item</button>
                    </div> )}
                
                <h1 className="checkout_price"> total: {price} </h1>
            </div>
        )
    }

    return(
        <div> 
            <button onClick={() => ShowCart()} className="cart">🛒</button>

                <Updatecart /> 

        </div>
    );
}


export default Cart