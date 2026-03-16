import style from './HomePage.module.css'
import { Link } from 'react-router-dom'

export default function HomePage() {

    const { jumbotron, buttonLIst } = style;


    return (
        <div className="container">
            <div className={jumbotron}>
                <h1>Welcome to my shop</h1>
                <span>Website description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dicta exercitationem recusandae quis labore odio reprehenderit eligendi, voluptates minus possimus iste voluptas. Non quisquam alias maiores velit. Nulla, possimus earum.
                    Tenetur nostrum quis rem tempora, dolore autem fugit rerum saepe doloremque vero in quos ipsa nesciunt, voluptate nobis ut a. Ducimus numquam blanditiis eaque consequatur corporis vel fuga suscipit pariatur.
                    Dignissimos vitae possimus architecto voluptatibus ratione, quas veniam, saepe, nam sapiente cupiditate deserunt modi voluptatum explicabo. Aspernatur numquam voluptatibus veritatis modi nesciunt, expedita adipisci odio ipsum incidunt itaque non velit?
                    Eaque, nam itaque. Quos reiciendis quam laboriosam beatae eligendi iste alias in eius? Illo nobis quibusdam consequuntur voluptatum odit harum iste pariatur saepe exercitationem minus quaerat fugit hic, veritatis vel!
                    Doloribus neque facilis numquam aliquid perferendis tenetur vitae aliquam, exercitationem veniam reprehenderit illum reiciendis recusandae debitis rerum in necessitatibus, ipsa, accusantium harum non. Fugit totam labore nemo dolore dolorum vero.</span>
                <section className={buttonLIst}>
                    <Link to='/product'>To the products</Link>
                    <Link to='/about'>About us</Link>
                </section>
            </div>
        </div>
    )
}