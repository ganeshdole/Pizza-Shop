import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinUser } from "@/services/user";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();
  async function onSignin() {
    if (email.length === 0) {
      toast.error("Enter email");
    } else if (!email.includes("@") || !email.includes(".")) {
      toast.error("Enter a valid email");
    } else if (password.length === 0) {
      toast.error("Enter password");
    } else {
      const result = await signinUser(email, password);
      if (result["status"] == "success") {
        const token = result["data"]["token"];
        sessionStorage["token"] = token;
        toast.success("WelCome to the HUNGRY CRUST");
        naviagte("/");
      } else {
        toast.error(result["error"]);
      }
    }
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 justify-center mx-5">
      <div className="flex flex-col col-start-2 gap-2">
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
      </div>
      <div className="col-start-2">
        <p className="ml-1 ">
          Don't have an account?{" "}
          <Button variant="link" className="m-0 p-0 text-blue-800">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </p>
        <Button variant="secondary" className="w-full" onClick={onSignin}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Signin;
