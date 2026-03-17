import axios from "axios";
import { useState, useEffect } from "react";
import RenderCard from '../products/RenderCard'
import { Link } from "react-router-dom";
import style from './ProductPage.module.css'

export default function ProductPage() {

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
                    return (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <RenderCard
                                product={product}
                            />
                        </Link>
                    )
                })}
            </section>
        </div>
    )
}