import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Appointment from "./Appointment"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment"element={<Appointment />} />
        </Routes>
    </>
  )
}
export default App
