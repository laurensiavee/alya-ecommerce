import Title from "./base/Title";
import ProductCard from "./ProductCard";

export default function ProductList() {
    return (
        <div>
            <h1 className="text-l-text font-bold">All Products</h1>
            <div className="flex mb-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
  }
  