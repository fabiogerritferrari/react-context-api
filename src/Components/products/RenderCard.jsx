
export default function RenderCard({ product }) {

    const { id, title, price, category, image } = product;


    return (
        <>
            <div className="card" key={id}>
                <img src={image} alt={title}
                />
                <section className="card-description">
                    <h2>{title}</h2>
                    <p>{category}</p>
                </section>
                <span>{price} &euro;</span>
            </div>
        </>

    )

}