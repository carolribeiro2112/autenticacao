import React, { useRef, useState } from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const [authorized, setAutorized] = useState<Boolean>(false)

  const Cadastrar = () =>{
    const request = {
      email: inputEmail.current?.value,
      password: inputPassword.current?.value
    }
  
    axios.post('http://localhost:4000/users', request)
      .then(response => {localStorage.setItem("token", response.data.accessToken)
      setAutorized(true)
    })
  }
 

  return(
    <>
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <main>
        <h1>Cadastro</h1>
        <form action="">
          <input type="text" placeholder="email" ref={inputEmail}/>
          <input type="password" placeholder="senha" ref={inputPassword}/>
          <button onClick={Cadastrar}>Cadatrar</button>
          {
            authorized === true &&
            <Redirect to="/produtos"/>
          }
        </form>
      </main>
    </>
  )
}

export default Home;
