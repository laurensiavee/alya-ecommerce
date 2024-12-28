'use client'
import { Product } from "@/entities/product/Product.interface";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { ProductService } from "@/services/product/product.service";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setLoading } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import styles from '@/style/ProductListStyles.css'; // Import the CSS file

export default function ProductList() {
    const [productList, setProductList] = useState<Product[]>([]);

    const productService = new ProductService();

    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    useEffect(() => {
        getProductList()
        
        return () => {
            console.log('Component unmounted');
        };
    }, []); 

    function getProductList() {
        dispatch(setLoading(true))
        
        productService.getProductList(token)
        .then((resp) => {
          if(resp.status === 200){
            setProductList(resp.data? resp.data : [])
          }
          else
            showToast(resp.message, "error")
        })
        .catch((error) => {
          showToast(error.message, "error")
          console.error(error.message);
        }).finally(() => {
          dispatch(setLoading(false))
        });
    }

    return (
      <div>
        <h1 className="text-l-text font-bold">All Products</h1>
        {/* <div className={styles.grid}> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
      </div>
    );
  }
  