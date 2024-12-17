import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/product-detail/' + product.id)}  
            className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/1_kny.png" alt="Sunset in the mountains" />
            <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">{product.product_name}</div>
                <p>{product.description}</p>
            </div>
            <div className="px-6 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rp. {product.product_price}</span>
            </div>
        </div>
    );
  }
  