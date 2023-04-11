import React, { memo } from "react";

const Small = React.memo(({ value }) => {
  console.log("regenerando");
  return (
    <>
      <small>{value}</small>
    </>
  );
});

export default Small;
