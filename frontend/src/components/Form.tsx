import { SignedUpInput } from "@shivamdevs12/common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Form = ({ type }: { type: "signin" | "signup" }) => {
  const [postInputs, setPostInputs] = useState<SignedUpInput>({
    email:"",
    password:"",
    name:"",

  });
  const navigate = useNavigate();
 
  async function sendRequest(){
  try{
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/${type === "signup" ? "signup": "signin"}`,postInputs)
  const jwt = response.data;
  localStorage.setItem("token",jwt)
      navigate("/blogs")
  }
  catch(e)
  {
    alert("Error while logging in");
  }
}


  
  
  return (
    <div className=" h-screen flex-col flex justify-center items-center px-5">
      <div className="text-3xl font-bold mb-2">Create an account</div>
      <div className="text-slate-400 ml-3">
      {type ==="signin"?"Don't have an Account ?":  "Already have an Account ?"}<Link className="pl-2 underline" to={type==="signin"? "/signup": "/signin"}>{type ==="signin"? "Sign Up" : "Sign In"}</Link>
      </div>
      <LabelledInput
        label="UserName"
        placeholder="Enter Your Username"
        onChange={(e) => {
           setPostInputs({
            ...postInputs,
            email:e.target.value,
        })
        }}
      />
    { type ==="signup" && <LabelledInput
        label="Name"
        placeholder="Enter Your Name"
        onChange={(e) => {
          setPostInputs({
            ...postInputs,
            name:e.target.value,
        })
        }}
      />}
      <LabelledInput
        label="Password"
        type={"password"}
        placeholder="Enter Your password"
        onChange={(e) => {
          setPostInputs({
            ...postInputs,
            password:e.target.value,
        })
        }}
      />
      <button onClick={sendRequest}
        type="button"
        className="w-full md:w-1/2 text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {type ==="signin"? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="w-full md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-4 mb-2">
        {label}
      </label>
      <input
        onChange={onChange}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type={type || "text"}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
