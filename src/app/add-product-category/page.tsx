'use client'
import Card from "@/component/base/Card";
import Label from "@/component/base/Label";
import Title from "@/component/base/Title";
import { PostAddProductCategoryReqBody } from "@/entities/product/PostAddProductCategory.interface";
import { ProductCategoryService } from "@/services/product/product-category.service";
import { selectToken, setLoading } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddProductCategoryPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [error] = useState<string | null>(null);

  const productCategoryService = new ProductCategoryService();

  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    postAddProductCategory();
  }

  function postAddProductCategory() {
    dispatch(setLoading(true))
    const body: PostAddProductCategoryReqBody = {
        category_name: categoryName,
    }
    
    productCategoryService.postAddProductCategory(body, token)
    .then((resp) => {
      if(resp.status === 200){
        showToast(resp.message, "success")
        router.push('/')
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
        <div className='w-1/2 m-auto'>
            <Card>
                <div>
                    <Title className="my-3 align-middle text-center">Add Product Category</Title>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <Label>Category Name</Label>
                            <input
                            placeholder="Input Category Name" 
                            className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                            id="categoryName"
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            required
                            />
                        </div>
                        <div className='flex justify-end'>
                            <button type='submit' className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                            Add Product Category
                            </button>
                        </div>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default AddProductCategoryPage;
