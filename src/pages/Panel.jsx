import { useState } from 'react';
import Login from './../components/Login';
import Dashboard from '../components/Dashboard';

export default function App() {
  const [token, setToken] = useState(() => getCookie('token'));

  if (token) return <Login setToken={setToken} />;
  return <Dashboard />;
}

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
