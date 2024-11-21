import { useForm } from "react-hook-form";
import axios from "axios";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        data
      );

      if (response.status === 200) {
        alert("Login Successful");
      } else {
        alert("Invalid Username / password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <input {...register("email")} placeholder="Email" type="email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;
