import { useForm } from "react-hook-form";
import { useState } from "react";
// import * as yup from "yup";
// import { yupResolvers } from "@hookform/resolvers/yup";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState({})
  // const schema = yup.object().shape({
  //   fullname: yup.string.required("Full name is required"),
  //   email: yup.string.required("Email is required")
  // })
  const { register,formState:{errors}, handleSubmit } = useForm();
  const sendData = (data) => {
    let people ={
       id: new Date().toString(),
       ...data
    }
    setUsers(people)
  };
  return (
    <div className="App">
      <h1 className="header">Login Form</h1>
      <form onSubmit={handleSubmit(sendData)} autoComplete={false}>
        <div className="form-group">
          <label htmlFor="fullname">Enter Full Name</label>
          <input type="text" placeholder="fullname" {...register("fullname", {required: "Full Name is required"} )} />
          {errors.fullname?.type === 'required' && <p role="alert" className="alert">First name is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Enter Email Address</label>
          <input type="text" placeholder="email" {...register("email", {required: "Email is required"} )} />
          {errors.email && <p role="alert" className="alert">{errors.email?.message}</p>}
        </div>
        <input type="submit" value="submit" className="btn"/>
      </form>
      { users.length === 0 ? null:
       
            <div key={users.id} className="user">
              <h2 className="username">{users.fullname}</h2>
              <span className="useremail">{users.email}</span>
            </div>
        
      }
    </div>
  );
}
