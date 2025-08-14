export default function ProductCard ( {product} ) {
    return (
        <div className="card">
            <div className="card-info">
                <h3>Product: {product.title}</h3>
                <img src={product.image}></img>
                <div>Price: {product.price}</div>
            </div>
        </div>
    );
};