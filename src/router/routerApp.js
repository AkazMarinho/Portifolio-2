import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/main/Main";

export function RouterApp() {
  return (
    <Routes>
        <Route exact path="/" element={<Main/>}/>
    </Routes>
  )
}
