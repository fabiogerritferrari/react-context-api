import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import style from './SinglePage.module.css'

export default function SinglePageProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    const { singleCardSection } = style;



    const fetchProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        setTimeout(fetchProduct, 10000);
    }, []);

    return (
        <section className={`${singleCardSection} container`}>
            {product ? (
                <div className="card" key={id}>
                    <img src={product.image} alt={product.title}
                    />
                    <section className="card-description">
                        <h2>{product.title}</h2>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                    </section>
                    <span>{product.price} &euro;</span>
                </div>)
                :
                (<button className="btn btn-success btn-lg" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span className='ts-1' role="status">Loading...</span>
                </button>
                )
            }
        </section>

    )
}