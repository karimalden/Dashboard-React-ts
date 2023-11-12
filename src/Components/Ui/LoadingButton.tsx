import React from "react";
import { Button, Spinner } from "reactstrap";

const LoadingButton = ({ isLoading = false, ...props }) => {
  return (
    <Button className="btn-primary" disabled={isLoading} {...props}>
      {isLoading ? <Spinner style={{ marginRight: "10px" }} size="sm" /> : null}
      <span >{props.children}</span>
    </Button>
  );
};

export { LoadingButton };
