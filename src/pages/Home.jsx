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

    function handleCardClick(card) {
        setChoosedCard(card.id);
    };

    return (
        <div className="mx-auto">
            <h1 className="text-center text-[26px] font-mono">My Tech Store</h1>
            <div className="flex flex-wrap justify-center gap-4 p-5 max-w-full">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onSelectedProduct={handleCardClick}/>
                ))}
            </div>
        </div>
    )
}