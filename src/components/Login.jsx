import { useState } from 'react';

const API_ENDPOINT = 'http://localhost:8080/panel/login';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    try {
      const respons = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await respons.json();
      return data;
    } catch (err) {
      console.log(err, '---');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!username || !password) return;

      const credentials = {
        username,
        password,
      };

      const token = await loginUser(credentials);

      setToken(token);
      setCookie('token', token, 14);
    } catch (err) {
      console.log(err, '---');
    }
  }

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>

      <form className='grid pt-20' onSubmit={handleSubmit}>
        <Input
          state={username}
          setterFunction={setUserName}
          label='user name'
          id='user_name'
        />

        <Input
          state={password}
          setterFunction={setPassword}
          type='password'
          label='password'
          id='password'
        />

        <button
          className='text-black bg-yellow py-2 cursor-pointer rounded-xl my-4'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function Input({ state, setterFunction, type = 'text', label, id }) {
  return (
    <div className='grid grid-cols-10 gap-2 mt-4'>
      <label
        className='bg-white dark:bg-black text-sm col-span-3 p-1'
        htmlFor={id}
      >
        {label}
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
