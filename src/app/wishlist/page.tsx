'use client'

import { GetWishlistReqBody } from "@/entities/wishlist/GetWishlist.interface";
import { WishlistService } from "@/services/wishlist/wishlist.service";
import { selectToken, selectUserId, setLoading } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/component/base/Card";
import { DeleteWishlistReqParams } from "@/entities/wishlist/DeleteWishlist.interface";

const WishlistPage = () => {
  const wishlistService = new WishlistService();

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);
  const [wishlist, setWishlist] = useState<Wishlist[]>([]);

  useEffect(() => {
    getWishlist()
    
    return () => {
        console.log('Component unmounted');
    };
  }, []); 

  function getWishlist() {
    dispatch(setLoading(true))

    const req: GetWishlistReqBody = {
        users_id: userId
    }
    
    wishlistService.getWishlist(req, token)
    .then((resp) => {
      if(resp.status === 200){
        showToast(resp.message, "success")
        setWishlist(resp.data? resp.data : [])
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

  const handleDeleteFromWishlist = (wishId: string) => {
    deleteFromWishlist(wishId)
  };

  function deleteFromWishlist(wishId: string) {
        dispatch(setLoading(true))

        const req: DeleteWishlistReqParams = {
            wish_id: wishId,
        }
        
        wishlistService.deleteFromWishlist(req, token)
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
            getWishlist()
        });
    }

  return (
    <>
        <h1>tes</h1>
        {wishlist.map((item, index) => (
            <div key={index} className="mt-2">
                <Card>
                    <div className="flex justify-between">
                        <h1 className="font-bold text-l-text-secondary">{item.products.product_name}</h1>
                        <div>
                            <button onClick={() => handleDeleteFromWishlist(item.id)} className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                                Delete
                            </button>
                            {/* <button onClick={() => handleEditCategory(item.id)} className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                                Checkout
                            </button> */}
                        </div>
                    </div>
                </Card>
            </div>
        ))}
    </>
  )
}

export default WishlistPage;
