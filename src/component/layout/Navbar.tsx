'use client'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "@/store/authSlice";
import ProfileTooltip from "../ProfileTooltip";

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
    <nav className="fixed top-0 z-50 w-full px-5 py-3 bg-gradient-to-r from-l-primary to-l-secondary text-d-text font-semibold flex justify-between">
      <div className="flex p-1" onClick={handleHome}>
        Alya
      </div>
      <div className=" mx-5 w-1/2 flex">
        <input type="text" placeholder="Search..." className="bg-white/70 border border-l-primary/40 text-l-text text-sm rounded-lg block w-full p-2.5" />
        <button className="ms-5 rounded-xl p-3 px-5 bg-l-accent text-d-text font-bold hover:shadow-2xl hover:shadow-l-accent/70">
          Filter
        </button>
      </div>
      <div className="flex gap-5">
        {isLoggedIn &&
          <>
            <ProfileTooltip />
          </>
        }
        {!isLoggedIn &&
          <>
            <div className="p-1" onClick={handleRegister}>
              Register
            </div>
            <div className="p-1" onClick={handleLogin}>
              Login
            </div>
          </>
        }
      </div>
    </nav>
  );
}
