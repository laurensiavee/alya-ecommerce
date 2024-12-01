'use client'
import { useState } from 'react';
import Card from '../../component/base/Card';
import Label from '../../component/base/Label';
import Title from '../../component/base/Title';
import { PostRegisterReqBody } from '@/entities/auth/PostRegisterReq.interface';
import { AuthService } from '@/services/auth/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import LoadingScreen from '@/component/base/LoadingScreen';

const LoginPage = () => {
  const router = useRouter();

  const notify = (message: string, type: string) => {
    if (type === "success") {
      toast.success(message);
      router.push('/login')
    } else if (type === "error") {
      toast.error(message);
    } 
  };
  const [isLoading, setLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState<string | null>(null);

  const authService = new AuthService();

  
  function login() {
    router.push('/login')
  }

  function register() {
    setLoading(true)
    const body: PostRegisterReqBody = {
        username: username,
        phone_number: phone,
        address: address,
        name: fullname,
        password: password,
        email: email,
    }

    authService.postRegister(body)
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

  return (
    <>
    {isLoading && <LoadingScreen  />}
      <ToastContainer position="top-center"/>
      <div className='flex justify-center align-center h-[calc(100vh-10rem)] '>
        <div className='w-1/2 m-auto'>
          <Card>
            <div>
              <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1053/2024/06/23/Anime-Tokidoki-Bosotto-Rushiago-de-Dareru-Tonari-no-Alya-san-4097435345.jpg" 
                alt="alya" className='object-cover h-[10rem] w-full'></img>
              <Title className="my-3 align-middle text-center">Register</Title>
              <form>
                <div className='mb-3'>
                  <Label>Username</Label>
                  <input
                    placeholder="username" 
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
                    placeholder="passport" 
                    className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <Label>Full Name</Label>
                  <input
                    placeholder="full name" 
                    className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                    id="fullname"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <Label>Email</Label>
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
                <div className='mb-3'>
                  <Label>Phone</Label>
                  <input
                    placeholder="phone" 
                    className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                    id="phone"
                    type="string"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <Label>Address</Label>
                  <input
                    placeholder="address" 
                    className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                    id="address"
                    type="string"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className='flex justify-center '
                  onClick={() => register()}>
                  <button className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                    Register
                  </button>
                </div>
                <a href='/login'>
                  <div className='text-end text-l-text-secondary hover:underline'>
                    Already has an account? Login instead 
                  </div>
                </a>
                {error && <p>{error}</p>}
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;