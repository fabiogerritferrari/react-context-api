import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useBudget } from '../contexts/BudgetContext'

export default function Navbar() {

    const { setMaxPrice } = useBudget();

    const { logo, linklist, budgetBtn, numberInput } = styles

    return (
        <nav>
            <figure className={logo}>
                <img src="https://t3.ftcdn.net/jpg/02/41/39/06/360_F_241390620_hihddCG15N7I8HyPWUiv1eUH85D2SN9z.jpg" alt="E-commerce logo" />
            </figure>
            <ul className={linklist}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/About'>About us</NavLink>
                <div className={numberInput}>
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type='number' id='maxPrice' onChange={(e) => setMaxPrice(e.target.value)}></input>
                </div>
            </ul>
        </nav>
    )

}