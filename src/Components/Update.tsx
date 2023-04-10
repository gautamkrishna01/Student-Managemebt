import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { studentData, updateStudent } from "../Service/Createapi";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Update = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutateAsync } = useMutation(["update"], updateStudent, {
    onSuccess: () => {
      toast.success("Update succesfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/read");
    },
  });
  const { id } = useParams();
  return (
    <>
      <div> 
        <header>
          <h2 className="text-center mt-4 ">Update Student Details</h2>
          <form
            onSubmit={handleSubmit((values: unknown) => {
              mutateAsync({ id: id!, newData: values as studentData });
            })}
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
              <button
                className="bg-blue-600 w-1/2 text-white rounded-full p-1  "
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </header>
        <ToastContainer />
      </div>
    </>
  );
};

export default Update;
