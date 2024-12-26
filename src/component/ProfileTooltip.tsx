import { AuthService } from "@/services/auth/auth.service";
import { selectToken, setLoading, setToken } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileTooltip() {
  const authService = new AuthService();

  const dispatch = useDispatch()
  
  const token = useSelector(selectToken);
  const router = useRouter();

    const handleLogout = () => {
        postLogout()
    };

    
  function postLogout() {
    dispatch(setLoading(true))
    authService.postLogout(token)
    .then((resp) => {
      if(resp.status === 200){
        showToast(resp.message, "success")
        dispatch(setToken(""))
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
    <Tooltip
        title={
            <React.Fragment>
                <div className="p-3 text-sm">
                    <div className="hover:text-blue-300" onClick={handleLogout}>
                        Logout
                    </div>
                </div>
            </React.Fragment>
        }
    >
    <div>Profile</div>
    </Tooltip>
  )
}