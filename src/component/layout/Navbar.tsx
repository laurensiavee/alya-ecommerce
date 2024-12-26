'use client'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "@/store/authSlice";
import ProfileTooltip from "../ProfileTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="fixed z-50 top-0 w-full px-9 py-3 bg-gradient-to-r from-l-primary to-l-secondary text-d-text font-medium flex justify-between">
      <div className="flex w-full">
        <button onClick={handleHome} className="me-5">
          Alya
        </button>
        <div className="mx-5 w-1/2 flex">
          <input type="text" placeholder="Search..." className="border-0 text-l-text text-sm rounded-md block w-full p-1.5" />
          <button className="ms-5 rounded-xl p-1.5 px-5 bg-l-accent text-d-text font-bold hover:shadow-2xl hover:shadow-l-accent/70">
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
          <div className="flex gap-5">
            <button onClick={handleRegister}>
              Register
            </button>
            <button onClick={handleLogin}>
              Login
            </button>
          </div>
        }
      </div>
    </nav>


    
  );
}
