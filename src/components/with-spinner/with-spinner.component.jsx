import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay></SpinnerOverlay>
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps}></WrappedComponent>
    );
  };
  return Spinner;
};

export default WithSpinner;
