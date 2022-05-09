import styled from "styled-components";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <div style={{ height: "50px", backgroundColor: "blue" }}></div>
      {children}
    </>
  );
};
