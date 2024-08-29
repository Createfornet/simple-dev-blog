import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const apiPosetCredentials = 'http://localhost:3000/login';

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  async function loginUser(credentials) {
    const response = await fetch(apiPosetCredentials, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('request faild');

    const data = await response.json();
    if (data.status === 'fail') throw new Error(data.message);
    if (data.status === 'success') return data.token;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // check inputs have value or not
      if (!username || !password) {
        toast.error('inputs should be empty');

        setUserNameError(username ? false : true);
        setPasswordError(password ? false : true);
        return;
      }

      const credentials = {
        username,
        password,
      };

      const token = await loginUser(credentials);

      if (token) {
        setCookie('token', token, 14);
        setToken(token);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <section className='login-wrapper'>
      <h1>Please Log In</h1>

      <form className='grid pt-20' onSubmit={handleSubmit}>
        <Input
          state={username}
          setterFunction={setUserName}
          label='user name'
          id='user_name'
          error={usernameError}
        />

        <Input
          state={password}
          setterFunction={setPassword}
          type='password'
          label='password'
          id='password'
          error={passwordError}
        />

        <button
          className='text-black bg-yellow py-2 cursor-pointer rounded-xl my-4'
          type='submit'
        >
          Submit
        </button>
      </form>
      <Toaster />
    </section>
  );
}

function Input({ state, setterFunction, type = 'text', label, id, error }) {
  return (
    <div className='grid grid-cols-10 gap-2 mt-4'>
      <label
        className='bg-white dark:bg-black text-sm col-span-3 p-1'
        htmlFor={id}
      >
        {label}
        {error && <span className='text-[#F00]'> !</span>}
      </label>

      <input
        className='bg-lightGray dark:bg-darkGray py-1 px-4 rounded-xl text-xl col-span-7'
        type={type}
        id={id}
        name='last name'
        value={state}
        onChange={(e) => setterFunction(e.target.value)}
      />
    </div>
  );
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
