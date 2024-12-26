import { AuthService } from "@/services/auth/auth.service";
import { selectToken, setLoading, setToken } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { styled } from "@mui/material/styles";

export default function ProfileTooltip() {
  const authService = new AuthService();

  const dispatch = useDispatch()
  
  const token = useSelector(selectToken);
  const router = useRouter();

  const handleLogout = () => {
    postLogout()
  };

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

    
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
    <LightTooltip
      title={
        <div className="text-start text-base text-l-text">
          <div>
            <h1 className="font-semibold py-5 ps-3 pe-10 ">FirstName LastName</h1>
            <hr />
          </div>
          <ul className="pb-5 ps-3 pe-10 ">
            <li className="hover:text-l-text-secondary mt-2">
              <button onClick={handleLogout}>
                <FontAwesomeIcon icon={faIdBadge} className="me-3"/>
                My Profile
              </button>
            </li>
            <li className="hover:text-l-text-secondary mt-2">
              <button onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} className="me-2"/>
                Logout
              </button>
            </li>
          </ul>
        </div>
      }
    >
      <FontAwesomeIcon icon={faUser} />
    </LightTooltip>
  )
}