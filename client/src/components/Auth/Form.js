import React,{useState} from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

function Form() {

      // const history = useHistory()
      const navigate = useNavigate();
      const gotoSignUp= ()=>{
        navigate("/SignUp");
      }
      const [user,setUser] = useState({
        email: "",
        password: "",
      })

      const handleChange = e =>{
        // setUser(e.target.value);
        const {name,value} = e.target
        setUser({
          ...user,
          [name]: value
        })
      }
      const login=()=>{
         axios.post("http://localhost:8000/Login",user)
         .then(res=>navigate("/"))
      }
  return (
    <>
      <div className="bg-white px-10 py-20 rounded-3xl border-gray-200">
        <h1 className="text-5xl font-semibold">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome back! Please enter your details.
        </p>
        <div className="mt-8">
            {console.log("User",user)}
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              type="email"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Password</label>
            <input
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mt-8 flex justify-end item-center">
            <button className="font-medium text-base text-violet-700 justify-center">
              Forgot Password??
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4 ">
            <button onClick={login} className="bg-violet-600 text-white text-lg font-bold p-3 rounded-xl hover:bg-violet-500">
              Sign in
            </button>
            <button className="flex items-center justify-center font-bold bg-gray-100 rounded-xl p-2 hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
              Sign in with Google
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center ">
            <p className="font-medium text-base">Don't Have an Account ?</p>
            <button  onClick={gotoSignUp}className="text-violet-500 text-base font-medium ml-2">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Form;