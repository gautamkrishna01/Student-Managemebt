import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { createStudent } from "../Service/Createapi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "rsuite";
import { getCountryapi } from "../Service/Createapi";

const CreateStudent = () => {
  const navigate = useNavigate();
  const { data } = useQuery("getCountry", getCountryapi);
  console.log(data);

  const { register, handleSubmit, reset } = useForm();
  const { isLoading, mutateAsync } = useMutation("post", createStudent, {
    onSuccess: () => {
      toast.success("Post succesfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/");
    },
  });
  if (isLoading) {
    return <h2 className="text-center text-cyan-600">Loading Data</h2>;
  }
  return (
    <>
      <div>
        <header className="text-center text-2xl  mt-5  ">
          <h4>Apply as a Student</h4>
        </header>
        <form
          onSubmit={handleSubmit((values: any) =>
            mutateAsync(values, { onSuccess: () => reset() })
          )}
        >
          <div className="grid grid-cols-2   w-1/2  m-auto h-full  gap-3  my-12">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 outline-none text-center"
              placeholder="Frist name"
              {...register("fristname")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 outline-none text-center"
              placeholder="Your Email"
              {...register("email")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-5 text-center"
              placeholder="Last Name"
              {...register("lastname")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 outline-none text-center"
              placeholder="Your Phone"
              {...register("phone")}
            />
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg text-center"
              placeholder="Your Password"
              {...register("password")}
            />
            <input
              type="password"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 outline-none text-center"
              placeholder="Confirm Password"
              {...register("confirmpassword")}
            />
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 outline-none text-center">
              {data?.data?.map((option: any, id: number) => (
                <option key={option.id} value={option.region} className="text-purple-400">
                  {option.region}
                </option>
              ))}
            </select>
            <div className="my-3">
            <button
              className="bg-blue-600 w-1/2 text-white rounded-full p-1  "
              type="submit"
            >
              Register
            </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateStudent;
