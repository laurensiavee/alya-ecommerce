'use client'
import { useEffect, useState } from 'react';
import Card from '../../component/base/Card';
import Label from '../../component/base/Label';
import Title from '../../component/base/Title';
import 'react-toastify/dist/ReactToastify.css';
// import { useSession } from 'next-auth/react';
import { PostLoginReqBody } from '@/entities/auth/PostLoginReq.interface';
import { AuthService } from '@/services/auth/auth.service';
import LoadingScreen from '@/component/base/LoadingScreen';
import { showToast } from '@/utils/toastNotify';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '@/store/authSlice';
import { RootState } from '@/store/store';


const LoginPage = () => {
  // const { data: session, status } = useSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [isLoading, setLoading] = useState(false);

  // useEffect(()=>{
  //   console.log('Session Status:', status);
  //   console.log('Session Data:', session);
    
  //   if(status === 'authenticated' ){
  //     const access_token = session?.accessToken
  //     const user = session?.user
  //     console.log(access_token);
  //     console.log(user)
  //     if(access_token){
  //       sessionStorage.setItem('access_token',access_token)
  //     }

  //     if(user){
  //       sessionStorage.setItem('user_data',JSON.stringify(user));
  //     }

  //     window.location.href='/';
  //   }   
  // },[session,status]);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

    // const result = await signIn('credentials', {
    //   redirect: true,
    //   username,
    //   password
    // });

    // if (result?.error) {
    //   console.log("Login: "+result?.error)
    //   toast.error(result?.error, {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //   });
    // }
    // else {
    //   // console.log("Session: "+session,"Status: "+status)
    //   // window.location.href = "/"
    // }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login()
  }

  const authService = new AuthService();
  
  const router = useRouter();
  const dispatch = useDispatch()
  
  function login() {
    setLoading(true)
    const body: PostLoginReqBody = {
        username: username,
        password: password,
    }

    authService.postLogin(body)
    .then((resp) => {
      if(resp.status === 200){
        showToast(resp.message, "success")
        dispatch(setToken(resp.data))
        router.push('/')
      }
      else
        showToast(resp.message, "error")
    })
    .catch((error) => {
      showToast(error.message, "error")
      console.error(error.message);
    }).finally(() => {
      setLoading(false)
    });
  }

  return (
    <> 
      {isLoading && <LoadingScreen  />}
      <div className='flex justify-center align-center h-[calc(100vh-10rem)] '>
        <div className='w-1/3 m-auto'>
          <Card>
            <div>
              <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1053/2024/06/23/Anime-Tokidoki-Bosotto-Rushiago-de-Dareru-Tonari-no-Alya-san-4097435345.jpg" 
                alt="alya" className='object-cover h-[10rem] w-full'></img>
              <Title className="my-3">Login</Title>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <Label>Username</Label>
                  <input
                    placeholder="Username" 
                    className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <Label>Password</Label>
                  <input
                    placeholder="Password" 
                    className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className='flex justify-center'>
                  <a href="/register">
                    <button type="button" className="rounded-xl py-2 px-5 me-2 bg-gradient-to-br from-l-secondary to-l-accent text-d-text font-bold hover:from-l-accent hover:to-l-secondary hover:shadow-2xl hover:shadow-l-secondary/50">
                      Register
                    </button>
                  </a>
                  <div className='flex justify-center '>
                    <button className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                      Login
                    </button>
                  </div>
                </div>
                <a href='/forget-password'>
                  <div className='mt-2 text-end text-l-text-secondary hover:underline'>
                    Forget Password? 
                  </div>
                </a>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;