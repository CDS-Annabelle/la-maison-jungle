import React from "react";
import styles from "./Cart.module.scss"

const Cart = () => {
    const priceMonstera = 8;
    const priceLierre = 10;
    const priceFlowers = 15;
    return(
        <>
            <div className={styles.cart}>
                <h2>Panier</h2>
                <ul>
                    <li> Monstera : {priceMonstera}</li>
                    <li> Lierre : {priceLierre}</li>
                    <li> Bouquet de fleurs : {priceFlowers}</li>
                </ul>
                 <div>
                    Total : {priceMonstera + priceLierre + priceFlowers} €
                </div>
            </div>
        </>
    )

    
}

export default Cart;