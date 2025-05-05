'use client'

import { GetCartReqParam } from "@/entities/cart/GetCart.interface";
import { CartService } from "@/services/cart/cart.service";
import { selectToken, selectUserId, setLoading } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/component/base/Card";
import { CartItem } from "@/entities/cart/Cart.interface";

const CartPage = () => {
  const cartService = new CartService();

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    getCart()
    
    return () => {
        console.log('Component unmounted');
    };
  }, []); 

  function getCart() {
    dispatch(setLoading(true))

    const req: GetCartReqParam = {
        users_id: Number(userId)
    }
    
    cartService.getCart(req, token)
    .then((resp) => {
      if(resp.status === 200){
        showToast(resp.message, "success")
        setCart(resp.data? resp.data : [])
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

  const handleEmptyCart = () => {
    deleteAllCartItems()
  };

  function deleteAllCartItems() {
        dispatch(setLoading(true))

        const req: GetCartReqParam = {
            users_id: Number(userId),
        }
        
        cartService.deleteAllCartItem(req, token)
        .then((resp) => {
        if(resp.status === 200){
            showToast(resp.message, "success")
        }
        else
            showToast(resp.message, "error")
        })
        .catch((error) => {
        showToast(error.message, "error")
        console.error(error.message);
        }).finally(() => {
            getCart()
        });
    }

  return (
    <>
        <button onClick={() => handleEmptyCart()} className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
            Empty Cart
        </button>
        {cart.map((item, index) => (
            <div key={index} className="mt-2">
                <Card>
                    <div className="flex justify-between">
                        <h1 className="font-bold text-l-text-secondary">{item.products.product_name}</h1>
                        <h1 className="font-bold text-l-text-secondary">{item.qty}</h1>
                        <h1 className="font-bold text-l-text-secondary">{item.products.product_price}</h1>
                    </div>
                </Card>
            </div>
        ))}
    </>
  )
}

export default CartPage;
