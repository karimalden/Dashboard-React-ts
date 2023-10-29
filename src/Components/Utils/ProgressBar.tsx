import React from "react";
import { Progress } from "reactstrap";

const ProgressBar = ({ value,isLoading, isSuccess, isError  }:any) => {
  let color = "";
  if (!isLoading && isSuccess) {
    color = "success";
  }
  if (!isLoading && isError) {
    color = "danger";
  }
  return (
    <div className="my-1">
      <Progress color={color} style={{ height: "1rem" }} className=" mt-4" value={value}>
        {value}%
      </Progress>
    </div>
  );
};


export default ProgressBar;
