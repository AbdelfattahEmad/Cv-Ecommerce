import { authActions } from "@store/Slices/authSlice";
import { useDispatch } from "react-redux"

export const LoginPage = () => {

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login({name:"mohamedEmad"}));
  }

  return (
    <>
        <button onClick={loginHandler}>login</button>
    </>
  )
}
