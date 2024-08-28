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

      const token = loginUser(credentials);

      setToken(token);
      setCookie('token', token, 14);
    } catch (err) {
      console.log(err, '---');
    }
  }

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
