import axios from "axios";
import { useState, useEffect } from "react";
import RenderCard from '../products/RenderCard'
import { Link } from "react-router-dom";
import style from './ProductPage.module.css'
import { useBudget } from "../contexts/BudgetContext";

export default function ProductPage() {

    const { maxPrice } = useBudget();

    const { title, productSection } = style;

    const [products, setProducts] = useState([]);


    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error))
    }

    useEffect(fetchProducts, []);


    return (
        <div className="container">
            <h1 className={`clPurple ${title}`}>Prodotti</h1>
            <section className={`${productSection}`}>
                {products.map((product) => {
                    if (maxPrice === null || maxPrice === '') {
                        return (
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <RenderCard
                                    product={product}
                                />
                            </Link>
                        )
                    } else {
                        if (parseInt(product.price) <= maxPrice) {
                            return (

                                <Link to={`/product/${product.id}`} key={product.id}>
                                    <RenderCard
                                        product={product}
                                    />
                                </Link>
                            )
                        }
                    }
                })}
            </section>
        </div>
    )
}