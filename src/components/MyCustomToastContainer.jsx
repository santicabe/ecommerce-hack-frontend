import React from "react";

import { DefaultToastContainer } from "react-toast-notifications";

export const MyCustomToastContainer = (props) => (
  <DefaultToastContainer {...props} style={{ zIndex: 9999 }} />
);
