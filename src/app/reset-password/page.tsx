'use client'
import { useEffect, useState } from 'react';
import Card from '../../component/base/Card';
import Label from '../../component/base/Label';
import Title from '../../component/base/Title';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import { AuthService } from '@/services/auth/auth.service';
import { toast, ToastContainer } from 'react-toastify';
import { PostForgetPasswordReqBody } from '@/entities/auth/PostForgetPasswordReq.interface';
import LoadingScreen from '@/component/base/LoadingScreen';
import { PostResetPasswordReqBody } from '@/entities/auth/PostResetPasswordReqBody.interface';
import { PostCheckPasswordTokenReqBody } from '@/entities/auth/PostCheckPasswordTokenReq.interface';
import { useRouter } from 'next/navigation';

const ResetPasswordPage = () => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isTokenValidated, setTokenValidated] = useState(false);
  
  const { data: session, status } = useSession();
  const router = useRouter();

  const authService = new AuthService();

  const notify = (message: string, type: string) => {
    if (type === "success") {
      toast.success(message);
      router.push('/login')
    } else if (type === "error") {
      toast.error(message);
    } 
  };

  
//   const router = useRouter();
//   const { tokenUrl } = router.query;


//   useEffect(()=>{
//     console.log('Session Status:', status);
//     console.log('Session Data:', session);
    
//     if(status === 'authenticated' ){
//       const access_token = session?.accessToken
//       const user = session?.user
//       console.log(access_token);
//       console.log(user)
//       if(access_token){
//         sessionStorage.setItem('access_token',access_token)
//       }

//       if(user){
//         sessionStorage.setItem('user_data',JSON.stringify(user));
//       }

//       window.location.href='/';
//     }   
//   },[session,status]);

    useEffect(() =>{
        const searchParams = new URLSearchParams(window.location.search);
        const tokenUrl = searchParams.get('token');
        setToken(tokenUrl? tokenUrl: "");
        validateToken(tokenUrl? tokenUrl: "")
    }, [])

    function validateToken(token: string) {
        setLoading(true)
        const body: PostCheckPasswordTokenReqBody = {
            token: token,
        }
    
        authService.postCheckPasswordToken(body)
        .then((resp) => {
          if(resp.status === 200){
            notify(resp.message, "success")
            setTokenValidated(true)
          }
          else
            notify(resp.message, "error")
        })
        .catch((error) => {
          notify(error.message, "error")
          console.error(error.message);
        }).finally(() => {
          setLoading(false)
        });
    }

  function resetPassword() {
    setLoading(true)
    const body: PostResetPasswordReqBody = {
        token: token,
        password: password,
    }

    authService.postResetPassword(body)
    .then((resp) => {
      if(resp.status === 200)
        notify(resp.message, "success")
      else
        notify(resp.message, "error")
    })
    .catch((error) => {
      notify(error.message, "error")
      console.error(error.message);
    }).finally(() => {
      setLoading(false)
    });
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword()
  };

  return (
    <> 
      {isLoading && <LoadingScreen  />}
      <div className='flex justify-center align-center h-[calc(100vh-10rem)] '>
        <ToastContainer position="top-center"/>
        <div className='w-1/3 m-auto'>
          <Card>
            {isTokenValidated && 
                <div>
                <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1053/2024/06/23/Anime-Tokidoki-Bosotto-Rushiago-de-Dareru-Tonari-no-Alya-san-4097435345.jpg" 
                    alt="alya" className='object-cover h-[10rem] w-full'></img>
                <Title className="my-3">Reset Password</Title>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <Label>New Password</Label>
                        <input
                            placeholder="password" 
                            className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='text-end'>
                    <button className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                        Submit
                    </button>
                    </div>
                </form>
                </div>
            }
            {!isTokenValidated &&
                <div>
                    <Title className="my-3">Reset Password expired or not valid!</Title>
                    <a href='/forget-password'>
                        <div className='mt-2 text-end text-l-text-secondary hover:underline'>
                            Retry Reset Password
                        </div>
                    </a>
                </div>
            }
          </Card>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;