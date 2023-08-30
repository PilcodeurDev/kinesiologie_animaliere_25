import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Appointment from "./Appointment"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment"element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
