import ProductCard from "../../components/ProductCard/ProductCard";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { useProducts } from "../../hooks/useProducts";

import "./Home.css";

function Home() {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className="home">
            <HeaderBar />
            <section className="products-section">
                <h2>Productos destacados</h2>

                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;