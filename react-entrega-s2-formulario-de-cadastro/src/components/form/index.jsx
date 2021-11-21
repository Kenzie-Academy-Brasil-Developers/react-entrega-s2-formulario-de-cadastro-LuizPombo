import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [info, setInfo] = useState([]);
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup.string().required("Name required"),
    email: yup.string().required("E-mail required").email("E-mail invalid"),
    password: yup
      .string()
      .required("Password required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Must Contain 8 Characters, One Number and One Special Case Character"
      ),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords doesnt matches")
      .required("Confirm your passord please"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    setInfo(data);
    history.push(`/logged/${data.name}`);
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        {errors.name?.message}
        <input placeholder="E-mail" {...register("email")} />
        {errors.email?.message}
        <input placeholder="Password" {...register("password")} />
        {errors.password?.message}
        <input placeholder="Confirm Password" {...register("confirmPass")} />
        {errors.confirmPass?.message}
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Form;
