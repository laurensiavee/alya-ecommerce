import Title from "./base/Title";
import ProductCard from "./ProductCard";

export default function ProductList() {
    return (
        <div>
            <h1 className="text-l-text font-bold">All Products</h1>
            <div className="grid grid-cols-4 gap-4">
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
  