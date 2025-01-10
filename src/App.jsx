import { Routes, Route } from "react-router-dom"
import "./App.css"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={
        // check if user is authorized
        <Authorized>

          {/* ApplicationViews is the child component of Authorized. 
          If Authorized finds the user login object in local storage, 
          then allow access to the application view. */}
          <ApplicationViews />

        </Authorized>
      } />
    </Routes>
  )
}
