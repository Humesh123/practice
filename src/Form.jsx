import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset,
    formState,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    // axios
    //   .put(`https://jsonplaceholder.typicode.com/users/`, data)
    //   .then((res) => {
    //     setMData(res.data);
    //     window.location.history.push("/dashboard");
    //   });
    
    history.push("/dashboard", data);
  };

  //   console.log(formState.dirty);
  //   console.log("isValid", formState.isValid);

  return (
    <>
      <form className="col-3" onSubmit={handleSubmit(onSubmit)}>
        <label>username</label>
        <input
          className="form-control"
          type="text"
          name="username"
          ref={register({ required: "required", minLength: 3 })}
        />
        {errors.username && <p style={{ color: "red" }}>username Invalid</p>}

        <label>password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          ref={register({ required: "required", minLength: 7 })}
        />
        {errors.password && <p>password Invalid</p>}

        <label>email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          ref={register({
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && <p>invalid email</p>}

        <label>gender</label>
        <select className="form-control" name="gender" ref={register}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        <label>age</label>
        <input
          className="form-control"
          name="age"
          type="number"
          ref={register({ min: 18, max: 99 })}
        />
        {errors.age && <p>Age Invalid</p>}

        <button className="form-control" type="submit">
          submit
        </button>

        <button
          type="button"
          onClick={() => {
            setValue("username", "humesh123");
          }}
        >
          setValue
        </button>
      </form>
    </>
  );
};

export default Form;
