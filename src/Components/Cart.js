import '../Styles/Styles.css'


function Cart(data) {
   Updatecart()
   console.log(data)


    function Updatecart() {
        return (
            <div className="cart_background"> 
                {data['data'].map(items =>
                    <div key={Math.random()}>
                        <img className="cart_item_image" alt={items.image.price} src={items.image.image} /> 
                        <h1 className="cart_item_text" > {items.image.price} </h1>
                    </div> )}
            </div>
        )
    }

    return(
        <div> 
            <button onClick={() => Updatecart} className="cart">🛒</button>


            <div className="cart_background">
                <Updatecart /> 
            </div>

        </div>
    );
}


export default Cart