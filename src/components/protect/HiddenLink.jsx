/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";

// ../../redux/authSlice
export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};




// eslint-disable-next-line react/prop-types
export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};