'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Card from '../../component/base/Card';
import Label from '../../component/base/Label';
import Title from '../../component/base/Title';
import { Button, Theme } from '@radix-ui/themes';
import axios from "axios";
import { API_DEV_URI, ACCESS_TOKEN } from '../../const/token';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState<string | null>(null);

  function register() {
    console.log("bro")
    const newUser = {
        username: username,
        password: password,
        fullname: fullname,
        email: email,
        phone: phone,
        address: address,
    }

    const headers = { 'Authorization': ACCESS_TOKEN }; 

    const uri = API_DEV_URI + 'register-users';
    axios
      .post(uri, newUser, { headers })
      .then((res) => {
        console.log(res)
      })
      .finally(() => {
      });
  }

  return (
    <>
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
                <Button color="crimson" variant="soft">
                  <a href="/login">Login</a>
                </Button>
                <div className='flex justify-center '>
                  {/* <Button variant='surface' type="submit" 
                    onClick={() => register()}>
                    Register
                  </Button> */}

                <button
                  type="button"
                  onClick={() => register()}
                  >
                  Register
                </button>
                </div>
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