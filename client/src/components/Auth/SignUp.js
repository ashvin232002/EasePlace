import React,{useState} from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();
  const gotoLogin = ()=>{
    navigate("/Login");
  }
  const [user,setUser] = useState({
     name: "",
     email: "",
     password: "",
     reEnterPassword:""
  })

  const handleChange = e =>{
    // setUser(e.target.value);
    const {name,value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = ()=>{
    const {name,email,password,reEnterPassword } = user
    if(name && email && password && (password===reEnterPassword)){
      // alert('registere')
      axios.post("http://localhost:8000/SignUp",user)
      .then(res=>gotoLogin())
    }else{
      alert("invalid Details");
    }
  }
  return (
    <>
      <div className="flex w-full  h-screen">
        {console.log("user",user)}
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className="bg-white px-10 py-20 rounded-3xl border-gray-200">
            <h1 className="text-5xl font-semibold items-center justify-center text-center">Welcome!!</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
              Create an Account To use Our Features.
            </p>
            <div className="mt-8">
               <div>
                <label className="text-lg font-medium">Name</label>
                <input
                  onChange={handleChange}
                  value={user.name}
                  name="name"
                  type="text"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  onChange={handleChange}
                  value={user.email}
                  name="email"
                  type="email"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Password</label>
                <input
                  onChange={handleChange}
                  value={user.password}
                  name="password"
                  type="password"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your Password"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Re-Password</label>
                <input 
                  onChange={handleChange}
                  value={user.reEnterPassword}
                  name="reEnterPassword"
                  type="password"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Re-Enter Your Password"
                />
              </div>
              <div className="mt-8 flex justify-between item-center">
                <button className="font-medium text-base text-violet-700">
                   
                </button>
              </div>
              <div className="mt-1 flex flex-col gap-y-4 ">
                <button onClick={register} className="bg-violet-600 text-white text-lg font-bold p-3 rounded-xl hover:bg-violet-500">
                  Create an Account
                </button>
              </div>
              <div className="mt-5 flex justify-center items-center ">
                <p className="font-medium text-base">Already Have an  Account ?</p>
                <button onClick={gotoLogin} className="text-violet-500 text-base font-medium ml-2">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr from-pink-700 to-violet-500 rounded-full animate-bounce "></div>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
        </div>
      </div>
    </>
  );
};
export default SignUp;