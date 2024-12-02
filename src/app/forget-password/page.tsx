'use client'
import { useEffect, useState } from 'react';
import Card from '../../component/base/Card';
import Label from '../../component/base/Label';
import Title from '../../component/base/Title';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import { AuthService } from '@/services/auth/auth.service';
import { toast } from 'react-toastify';
import { PostForgetPasswordReqBody } from '@/entities/auth/PostForgetPasswordReq.interface';
import LoadingScreen from '@/component/base/LoadingScreen';
import { showToast } from '@/utils/toastNotify';


const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);
  
  const { data: session, status } = useSession();

  const authService = new AuthService();

  useEffect(()=>{
    console.log('Session Status:', status);
    console.log('Session Data:', session);
    
    if(status === 'authenticated' ){
      const access_token = session?.accessToken
      const user = session?.user
      console.log(access_token);
      console.log(user)
      if(access_token){
        sessionStorage.setItem('access_token',access_token)
      }

      if(user){
        sessionStorage.setItem('user_data',JSON.stringify(user));
      }

      window.location.href='/';
    }   
  },[session,status]);

  function forgetPassword() {
    setLoading(true)
    const body: PostForgetPasswordReqBody = {
        email: email,
    }

    authService.postForgetPassword(body)
    .then((resp) => {
      if(resp.status === 200)
        showToast(resp.message, "success")
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    forgetPassword()
  };

  return (
    <> 
      {isLoading && <LoadingScreen  />}
      <div className='flex justify-center align-center h-[calc(100vh-10rem)] '>
        <div className='w-1/3 m-auto'>
          <Card>
            <div>
              <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1053/2024/06/23/Anime-Tokidoki-Bosotto-Rushiago-de-Dareru-Tonari-no-Alya-san-4097435345.jpg" 
                alt="alya" className='object-cover h-[10rem] w-full'></img>
              <Title className="my-3">Forget Password</Title>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <Label>Enter your email</Label>
                  <input
                    placeholder="email" 
                    className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='text-end'>
                  <button className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordPage;