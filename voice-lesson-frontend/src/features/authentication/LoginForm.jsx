import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { useLogin } from "./useLogin";
// import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/api/auth/api/login', {
      email, password
    })
    .then(result => {if(result.data) {
      navigate('/dashboard')
    }
    })
    .catch(err => console.log(err))
    // if (!email || !password){
    //   console.error('Please fill in both fields');
    //   return;
    // } 
    // login(
    //   { email, password },
    //   {
    //     onSettled: () => {
    //       setEmail("");
    //       setPassword("");
    //     },
    //   }
    // );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          name="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" >
          {"Log in"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
