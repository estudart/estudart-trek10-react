export default function ProductCard ( {product, onSelectedProduct} ) {
    return (
        <div className="flex itens-center justify-center max-w-[30%] p-[1.5%] border-2 border-white-600 rounded-md text-[14px] w-full  bg-slate-200" onClick={() => onSelectedProduct(product)}>
            <div className="flex flex-col justify-between h-full text-yellow-950 font-semibold">
                <img className="rounded-md self-center m-2" src={product.image}></img>
                <h3 className="text-left">{product.title}</h3>
                <div className="flex flex-col">
                    <div className="flex flex-row mt-2">
                        <h3>Price: U${product.price}.00</h3>
                        <div className="text-red-500">
                            {product.discount && `\u00A0-${product.discount}%`}
                        </div>
                    </div>
                    <div>Model: {product.model}</div>
                    <div>Brand: {product.brand}</div>
                </div>
            </div>
        </div>
    );
};