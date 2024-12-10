'use client'
import { useState } from 'react';
import Card from '../../component/base/Card';
import Label from '../../component/base/Label';
import Title from '../../component/base/Title';
import { useRouter } from 'next/navigation'
import { showToast } from '@/utils/toastNotify';
import { selectToken, setLoading } from '@/store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductService } from '@/services/product/product.service';
import { PostAddProductReqBody } from '@/entities/product/PostAddProduct.interface';

const RegisterPage = () => {
  const [productName, setProductName] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [error] = useState<string | null>(null);

  const productService = new ProductService();

  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    postAddProduct();
  }

  function postAddProduct() {
    dispatch(setLoading(true))
    const body: PostAddProductReqBody = {
        product_name: productName,
        product_price: price,
        product_stock: stock,
        product_category_id: category,
        discount: discount,
        description: description,
    }
    
    productService.postAddProduct(body, token)
    .then((resp) => {
      if(resp.status === 200){
        showToast(resp.message, "success")
        router.push('/login')
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
            <Title className="my-3 align-middle text-center">Add Product</Title>
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
                <input
                  placeholder="Input Category" 
                  className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                  id="category"
                  type="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
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
                <button type='submit' className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                  Add Product
                </button>
              </div>
              {error && <p>{error}</p>}
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;