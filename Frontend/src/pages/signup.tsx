import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useState } from "react";
import { signupUser } from "@/services/user";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const navigate = useNavigate();
  async function onSignup() {
    if (firstName.length === 0) {
      toast.error("Enter first name");
    } else if (lastName.length === 0) {
      toast.error("Enter Last name");
    } else if (email.length === 0) {
      toast.error("Enter email");
    } else if (!email.includes("@") || !email.includes(".")) {
      toast.error("Enter a valid email");
    } else if (password.length === 0) {
      toast.error("Enter password");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const result = await signupUser(firstName, lastName, email, password);
      if (result["status"] === "success") {
        toast.success("Successfuly registred the user");
        navigate("/signin");
      } else {
        toast.error(result["error"]);
      }
    }
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 justify-center mx-5">
      <div className="flex flex-col col-start-2 gap-2">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              placeholder="Jhon"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="ml-1">
              Last Name
            </Label>
            <Input
              type="text"
              id="lastName"
              placeholder="Doe"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="ml-1">
            Email
          </Label>
          <Input
            type="text"
            id="email"
            placeholder="jhon@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <Label htmlFor="password" className="ml-1">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <Label htmlFor="passwordCnf" className="ml-1">
            Password Confirm
          </Label>
          <Input
            type="password"
            id="passwordCnf"
            placeholder="password"
            onChange={(e) => {
              setConfrimPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="col-start-2">
        <p className="ml-1 ">
          Alredy have an account?{" "}
          <Button variant="link" className="m-0 p-0 text-blue-800">
            <Link to="/signin">Sign In</Link>
          </Button>
        </p>
        <Button variant="secondary" className="w-full" onClick={onSignup}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Signup;
