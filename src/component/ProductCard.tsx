import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/product-detail/' + product.id)} className="relative max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://raw.githubusercontent.com/laurensiavee/portfolio/main/img/1_kny.png" alt="Sunset in the mountains" />
            {product.discount > 0 && (
                <div className="absolute top-0 right-0">
                    <span className="text-end bg-red-500 text-white p-2 ">ON SALE</span>
                </div>
            )}
            <div className="px-6 pt-4 pb-5">
                <div className="font-bold text-xl mb-2">{product.product_name}</div>
                <p>{product.description}</p>
                <div className="mt-2">
                    <span className={product.discount > 0 ? "font-semibold line-through decoration-red-600 decoration-font-black bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-400 me-2" : "bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 me-2"}>
                        Rp. {product.product_price}
                    </span>
                    {product.discount > 0 && (
                        <>
                        <span className="font-semibold bg-red-500 text-white px-1" >{product.discount}%</span>
                        <div className="flex items-center justify-between">
                            <span className="w-full block mt-3">
                                <span className="animate-pulse border border-red-500 rounded-full px-3 py-1 text-sm font-semibold text-red-500">Rp. {product.product_price * (100-product.discount)/100}</span>
                            </span>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
  }
  