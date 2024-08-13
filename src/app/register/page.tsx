'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Card from '../component/Card';
import Label from '../component/Label';
import Title from '../component/Title';
import { Button, Theme } from '@radix-ui/themes';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <div className='flex justify-center align-center h-[calc(100vh-10rem)] '>
        <div className='w-1/3 m-auto'>
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
                <div className='flex justify-center '>
                  <Button variant='surface' type="submit" className="rounded-xl p-3 px-5 my-2 bg-gradient-to-br from-l-secondary to-l-accent text-d-text font-bold hover:from-l-accent hover:to-l-secondary hover:shadow-2xl hover:shadow-l-secondary/50">
                    Login
                  </Button>
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