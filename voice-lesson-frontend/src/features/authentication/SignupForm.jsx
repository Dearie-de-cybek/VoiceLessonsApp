import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/auth/api/register", {
        name,
        email,
        phone,
        password,
        confirmpassword,
      })
      .then((result) => {
        if (result.data) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Full Name" error={""}>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="Phone Number" error={""}>
        <Input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="Email address" error={""}>
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

      <FormRowVertical label="Password (min 8 characters)" error={""}>
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="Repeat password" error={""}>
        <Input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          autoComplete="current-password"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical>
        {/* type is an HTML attribute! */}
        <Button>Create new user</Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignupForm;
