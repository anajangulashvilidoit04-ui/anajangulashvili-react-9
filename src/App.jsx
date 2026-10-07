import { useState } from "react";
import {useForm} from "react-hook-form"
import schema from "./validations/login"
import { yupResolver } from '@hookform/resolvers/yup';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

import "./App.css";
function App() {
  // const [password, setPassword] =useState("");
  const {register, handleSubmit, reset, formState:{errors, isValid},
} = useForm({mode: "onChange", resolver:yupResolver(schema)});
  const sendData = (data) => {
    // event.preventDefault();
    console.log(data);
    reset();
  }
   const [isVisible, setIsVisible] = useState(false);
  return (
    <> 
      <form
      onSubmit ={handleSubmit(sendData)}
        // onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-1/3 mx-auto mt-20"
      >
        <input
         {...register("email")}
        // {...register("email", {
        //   required: "მეილი სავალდებულო ველია",
        //   validate: (value) =>{
        //   if(value.includes("@")){
        //     return true;
        //   }
        //   return "აუცილებელია @-ს გამოყენება"}
        
        //  })}
          // type="email"
          placeholder="enter your email"

          // value={email}
          // onChange={handleChange}
          // name="email"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )} 
        <div className=" relative  my-4">
        <input 
        {...register("password")}
        // {...register("password", {
        //   required: "პაროლი სავალდებულო ველია",
        // minLength: {
        //   value:8,
        //   message: "პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან",
        // },
        // })}
          // type="password"
          type={isVisible ? "text" : "password"}
          placeholder="enter your password"
          // value={password}
          // onChange={handleChange}
          // required
          // name="password"
          // value ={password}
          // onChange ={(e)=> setPassword(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
        {/* <Eye />
         <EyeOff /> */}
         <button
         type="button"
            className="absolute top-2.5 right-5 cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          >
            {!isVisible ? <Eye /> : <EyeOff />}
          </button>
         </div>
         {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          disabled={!isValid}
          type="submit"
          className="py-2 px-4 rounded-md text-white bg-green-400"
          // style={{
          //   backgroundColor: isBtnDisabled ? "#888" : "#3b82f6",
          //   cursor: isBtnDisabled ? "not-allowed" : "pointer",
          // }}
           style={{
            backgroundColor: !isValid ? "#888" : "#3b82f6",
            cursor: !isValid ? "not-allowed" : "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
