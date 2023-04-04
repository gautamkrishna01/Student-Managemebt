import axios from "axios";

export interface studentData {
  id: number;
  fristname: string;
  email: string;
  lastname: string;
  phone: number;
  password: string;
  confirmpassword: string;
}
const header = { "Access-Control-Allow-Origin": "*" };
//post the data from server
export const createStudent = async (value: studentData) => {
  try {
    const data = await axios.post(
      "https://641aa217f398d7d95d5abd55.mockapi.io/studentapi",
      value
    );
    return data;
  } catch (error) {
    console.log("Unable to post Data");
  }
};
//get all data from server
export const getAlldata = async () => {
  try {
    const data = await axios.get(
      "https://641aa217f398d7d95d5abd55.mockapi.io/studentapi"
    );
    return data;
  } catch (error) {
    console.log("Unable to get Data");
  }
};
//delete the Data from server
export const deleteValue = async (id: number) => {
  try {
    const data = await axios.delete(
      `https://641aa217f398d7d95d5abd55.mockapi.io/studentapi/${id}`
    );
    return data;
  } catch (error) {
    console.log("Unable to delete data");
  }
};

//edit and update the data  from database
export const updateStudent = async (id:number) => {
  try {
    const data = await axios.patch(
      `https://641aa217f398d7d95d5abd55.mockapi.io/studentapi/${id}`
    );
    return data;
  } catch (error) {
    console.log("Unable to update the data");
  }
};

