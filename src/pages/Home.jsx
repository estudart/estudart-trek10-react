import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "../components/ProductCard";


export default function Home() {
    const [products, setProducts] = useState([]);
    const [choosedCard, setChoosedCard] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            const result = await axios.get(
                'https://fakestoreapi.in/api/products'
            );
            const products = result.data.products
            console.log(products);
            setProducts(products);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <h1 className="page-title">Products Store</h1>
            <div className="cards">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </>
    )
}