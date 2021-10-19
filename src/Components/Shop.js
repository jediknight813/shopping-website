import '../Styles/Styles.css'

import imageOne from './Images/ItemOne.png'
import imageTwo from './Images/ItemTwo.png'
import imageThree from './Images/itemThree.png'
import imageFour from './Images/itemFour.png'
import imageFive from './Images/ItemFive.png'
import imageSix from './Images/itemSix.png'
import imageSeven from './Images/itemSeven.png'
import imageEight from './Images/itemEight.png'
import imageNine from './Images/itemNine.png'
import imageTen from './Images/itemTen.png'



const item_list = [{image: imageOne, price: 199}, {image: imageTwo, price: 99}, {image: imageThree, price: 99}, {image: imageFour, price: 69}, {image: imageFive, price: 399}, {image: imageSix, price: 99}, {image: imageSeven, price: 199}, {image: imageEight, price: 80}, {image: imageNine, price: 499}, {image: imageTen, price: 299},   ]


function Shop( { addCartItem } ) {

    return(
        <div className="item_grid">
            {item_list.map(Element => (
                <div key={Element.image}>
                    <img className="item_image" alt={Element.image} src={Element.image} />
                    <button onClick={() => AddItemToCart({image: Element.image, price: Element.price })  } className="item_button"> Add to cart</button> <div className="item_price"> ⭐⭐⭐⭐⭐ {"$"+Element.price} </div>
                </div>
            ))}
        </div>
    )
    
    function AddItemToCart(image, price) {
        addCartItem( {image: image, price: price} )
    }

}


export default Shop
