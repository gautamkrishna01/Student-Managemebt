import React, { useState } from "react";
import { useMutation, useQuery, QueryClient } from "react-query";
import { getAlldata } from "../Service/Createapi";
import { studentData } from "../Service/Createapi";
import { deleteValue } from "../Service/Createapi";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Read = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { data, isLoading, refetch } = useQuery("get", getAlldata);
  console.log(data);
  const { mutateAsync } = useMutation("delete", deleteValue, {
    onSuccess: () => {
      toast.success("Delete Succesfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      refetch();
    },
  });

  if (isLoading) {
    return <h2 className="text-center text-cyan-600">Loading Data</h2>;
  }
  return (
    <>
      <div>
        <header className="text-2xl text-center  flex  justify-around my-2 ">
          <h5>Student Details </h5>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full text-center outline-none "
            value={search}
            onChange={(e) =>setSearch(e.target.value)}
          />
        </header>

        <button
          className="bg-black  hover:bg-blue-500 w-1/7 text-white rounded-full p-2 text-sm  mx-2"
          onClick={() => navigate("/create")}
        >
          Register Student
        </button>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-6">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  Frist Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Confirm Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data.filter((user:studentData)=>user.fristname.toLowerCase().includes(search)).map((value: studentData, index: number) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    key={index}
                  >
                    <td className="px-6 py-4">{value.id}</td>
                  </th>
                  <td className="px-6 py-4">{value.fristname}</td>

                  <td className="px-6 py-4">{value.email}</td>
                  <td className="px-6 py-4">{value.lastname}</td>
                  <td className="px-6 py-4">{value.phone}</td>
                  <td className="px-6 py-4">{value.password}</td>
                  <td className="px-6 py-4">{value.confirmpassword}</td>
                  <td className="px-6 py-4">
                    <Link to="/update">
                      <button className="bg-green-500 rounded-lg p-2 text-white">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-red-600 rounded-lg p-2 text-white"
                      onClick={() => mutateAsync(value.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Read;
