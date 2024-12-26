'use client'
import Card from "@/component/base/Card";
import Label from "@/component/base/Label";
import Title from "@/component/base/Title";
import { Category } from "@/entities/product/Category.interface";
import { DeleteProductReqParams } from "@/entities/product/DeleteProduct.interface";
import { GetProductReqParams } from "@/entities/product/GetProduct.interface";
import { PatchProductReqBody, PatchProductReqParams } from "@/entities/product/PatchProduct.interface";
import { Product } from "@/entities/product/Product.interface";
import { ProductCategoryService } from "@/services/product/product-category.service";
import { ProductService } from "@/services/product/product.service";
import { selectToken, setLoading } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditProductCategoryPage = () => {
  const [productName, setProductName] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [error] = useState<string | null>(null);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const productService = new ProductService();
  const productCategoryService = new ProductCategoryService();

  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const params = useParams()

  useEffect(() => {
    getProductCategoryList()
    getProduct()
    
    return () => {
        console.log('Component unmounted');
    };
  }, []); 

  const handleSelectCategory = (event) => {
    setCategory(event.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    patchProduct();
  }

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    deleteProduct();
  }
  
  function getProduct() {
    dispatch(setLoading(true))

    const productId: string = Array.isArray(params.id) ? params.id[0] : params.id.toString();
    
    const req: GetProductReqParams = {
        product_id: productId
    }
    
    productService.getProduct(req, token)
    .then((resp) => {
      if(resp.status === 200){
        if(resp.data){
            setProductData(resp.data)
        }
        showToast(resp.message, "success")
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

  function getProductCategoryList() {
    dispatch(setLoading(true))
    
    productCategoryService.getProductCategoryList(token)
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

  function patchProduct() {
    dispatch(setLoading(true))
    const productId: string = Array.isArray(params.id) ? params.id[0] : params.id.toString();

    const req: PatchProductReqParams = {
        product_id: productId
    }
    const body: PatchProductReqBody = {
        product_name: productName,
        product_price: + price,
        product_stock: + stock,
        product_category_id: + category,
        discount: + discount,
        description: description,
    }
    
    productService.patchProduct(req, body, token)
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

  function deleteProduct() {
    dispatch(setLoading(true))
    const productId: string = Array.isArray(params.id) ? params.id[0] : params.id.toString();

    const req: DeleteProductReqParams = {
        product_id: productId
    }
    
    productService.deleteProduct(req, token)
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

  function setProductData(product: Product){
    setProductName(product.product_name)
    setStock(product.product_stock.toString())
    setCategory(product.product_category_id.toString())
    setDescription(product.description)
    setPrice(product.product_price.toString())
    setDiscount(product.discount.toString())
  }

  return (
    <div className='flex justify-center align-center h-[calc(100vh-10rem)] '>
        <div className='w-1/2 m-auto'>
            <Card>
                <div>
                    <Title className="my-3 align-middle text-center">Edit Product</Title>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <Label>Product Name</Label>
                            <input
                            placeholder="Input Product Name" 
                            className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                            id="productName"
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                            />
                        </div>
                        <div className='mb-3'>
                            <Label>Stock</Label>
                            <input
                            placeholder="Input Stock" 
                            className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                            id="stock"
                            type="stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                            />
                        </div>
                        <div className='mb-3'>
                            <Label>Category</Label>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={category}
                            onChange={handleSelectCategory}>
                            <option value="" disabled selected>Choose a category</option>
                            {categoryList.map((category, index) => (
                                <option key={index} value={category.id}>{category.category_name}</option>
                            ))}
                            </select>
                        </div>
                        <div className='mb-3'>
                            <Label>Description</Label>
                            <input
                            placeholder="Input Description" 
                            className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                            id="description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            />
                        </div>
                        <div className='mb-3'>
                            <Label>Price</Label>
                            <input
                            placeholder="Input Price" 
                            className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                            id="price"
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            />
                        </div>
                        <div className='mb-3'>
                            <Label>Discount</Label>
                            <input
                            placeholder="Input Discount" 
                            className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                            id="discount"
                            type="string"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            required
                            />
                        </div>
                        <div className='mb-3'>
                            <Label>Product Image</Label>
                            {/* <input
                            placeholder="address" 
                            className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                            id="address"
                            type="string"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            /> */}
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={handleDelete} type="button" className="rounded-xl py-2 px-5 me-2 bg-gradient-to-br from-l-secondary to-l-accent text-d-text font-bold hover:from-l-accent hover:to-l-secondary hover:shadow-2xl hover:shadow-l-secondary/50">
                                Delete Product
                            </button>
                            <button type='submit' className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                                Save
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

export default EditProductCategoryPage;
