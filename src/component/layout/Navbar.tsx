'use client'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "@/store/authSlice";
import ProfileTooltip from "../ProfileTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

  const router = useRouter();

  const isLoggedIn = useSelector(selectLoggedIn);

  const handleLogin = () => {
    router.push('/login')
  };
  
  const handleRegister = () => {
    router.push('/register')
  };

  const handleHome = () => {
    router.push('/')
  };

  return (
    <nav className="fixed z-50 top-0 w-full px-9 py-3 bg-gradient-to-r from-l-primary to-l-secondary text-d-text font-medium flex justify-between items-center">
      <div className="flex w-full">
        <button onClick={handleHome} className="me-5">
          Alya
        </button>
        <div className="mx-5 w-1/2 flex">
          <input type="text" placeholder="Search..." className="border-0 text-l-text text-sm rounded-md block w-full p-1.5" />
          <button className="ms-1 rounded-md p-1.5 px-5 border border-text-d-text text-d-text font-bold">
            Filter
          </button>
        </div>
      </div>
      <div>
        {isLoggedIn &&
          <div className="flex gap-7">
            <FontAwesomeIcon icon={faCartShopping} />
            <ProfileTooltip />
          </div>
        }
        {!isLoggedIn &&
          <div className="flex gap-7">
            <button onClick={handleRegister} className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPlus} />
              Register
            </button>
            <button onClick={handleLogin} className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faRightToBracket} />
              Login
            </button>
          </div>
        }
      </div>
    </nav>


    
  );
}
