import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const { logo, linklist } = styles

    return (
        <>
            <figure className={logo}>
                <img src="https://t3.ftcdn.net/jpg/02/41/39/06/360_F_241390620_hihddCG15N7I8HyPWUiv1eUH85D2SN9z.jpg" alt="E-commerce logo" />
            </figure>
            <ul className={linklist}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Product'>Product</NavLink>
                <NavLink to='/About'>About us</NavLink>
                <Link type='button'>Budget mode </Link>
            </ul>
        </>
    )

}