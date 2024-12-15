'use client'

import Card from "@/component/base/Card";
import Title from "@/component/base/Title";
import { Category } from "@/entities/product/Category.interface";
import { ProductService } from "@/services/product/product.service";
import { selectToken, setLoading } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCategoryListPage = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  
  const productService = new ProductService();

  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    getProductCategoryList()
    
    return () => {
        console.log('Component unmounted');
    };
  }, []); 

  const handleAddCategory = () => {
    router.push('/add-product-category')
  };

  const handleDeleteCategory = (event) => {
  };

  const handleEditCategory = (event) => {
  };

  function getProductCategoryList() {
    dispatch(setLoading(true))
    
    productService.getProductCategoryList(token)
    .then((resp) => {
      if(resp.status === 200){
        setCategoryList(resp.data? resp.data : [])
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
        <div className='flex justify-center align-center h-[calc(100vh-10rem)] '>
            <Card>
                <div className="flex justify-between items-center mx-5">
                    <Title className="text-center">Product Category List</Title>
                    <button onClick={handleAddCategory} className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                        Add New Product Category
                    </button>
                </div>
                <div className="mt-5 mx-5">
                  {categoryList.map((category, index) => (
                    <Card key={index}>
                        <div className="flex justify-between">
                            <h1 className="font-bold text-l-text-secondary">{category.category_name}</h1>
                            <div>
                                <button onClick={handleDeleteCategory} className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                                    Delete
                                </button>
                                <button onClick={handleEditCategory} className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </Card>
                  ))}
                </div>
            </Card>
        </div>
    )
}

export default ProductCategoryListPage;