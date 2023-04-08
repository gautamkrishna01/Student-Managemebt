import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { authPost } from "../Service/Createapi";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const { mutateAsync } = useMutation("authApi",authPost,{
    onSuccess:()=>{
        navigate("/read")
    }
  });

  return (
    <>
      <div className="  text-center  pt-[200px]  ">
        <header>
          <h1 className="text-2xl  font-bold">Login</h1>
          <p>See your growth and get consulting supports</p>
          <button className=" p-2 border border-gray-900 w-1/5 m-3 rounded-full bg-blue-700 text-white">
            See in with google
          </button>
        </header>
        <hr />
        <section className="mix-w-[500px]">
          <form
            onSubmit={handleSubmit((values: any) =>
              mutateAsync(values, { onSuccess: () => reset() })
            )}
          >
            <input
              type="text"
              placeholder="User name"
              className="border border-gray-600 p-2 w-1/5 m-4 text-center text-lg rounded-lg"
              {...register("username")}
            />
            <br />

            <input
              type="password"
              placeholder="Password"
              className="border border-gray-600  p-2 w-1/5 m-4 text-center text-lg rounded-lg"
              {...register("password")}
            />
            <div className="space-x-9 ">
              <span>Remember me</span>
              <span>Forget password</span>
            </div>
            <button
              className="text-center p-1 m-2 w-1/5 bg-blue-700 rounded-full text-white hover:bg-blue-800"
              type="submit"
            >
              Login
            </button>
          </form>
        </section>
        <footer className="flex justify-center m-4">
          <span>Not registered yet?</span>
          <span className="text-purple-600 mx-2 cursor-pointer">
            Create an Account
          </span>
        </footer>
      </div>
      <span>Username:kminchelle</span>
      <span>Password:0lelplR</span>
    </>
  );
};

export default Login;
