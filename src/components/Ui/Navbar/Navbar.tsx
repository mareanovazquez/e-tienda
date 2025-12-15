
import Logo from "../../../assets/logo.svg"
import Cart from "../../../assets/cart.svg"
import styles from "./Navbar.module.css"
import { useState } from "react"
import { CartModal } from "../CartModal"

export const Navbar = () => {

    const [showCartModal, setShowCartmodal] = useState(false)

    const handleShowCartModal = () => {
        setShowCartmodal(!showCartModal)
    }

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarDetail}>
                <img src={Logo} alt="logo e-commerce" width={50} height={50} />
            </div>
            <div>
                <span>DH ecommerce</span>
            </div>
            <div className={styles.navbarCartContainer}>
                <p className={styles.navbarTextAmount}>2</p>
                <img src={Cart} alt="carrito de compras" onClick={handleShowCartModal} />
            </div>
            {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)}
        </div>
    )
}
