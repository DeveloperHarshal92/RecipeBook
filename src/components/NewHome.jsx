import axios from "../utils/axios";
import React, { useEffect } from "react";

const NewHome = () => {
  const getData = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData()
  },[]);
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-1.5">
      <h1>NewHome</h1>
      <button onClick={getData} className="p-2 mt-2 bg-red-400 rounded-xl">
        Get data
      </button>
    </div>
  );
};

export default NewHome;
