import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/main/Main";
import { FrequencySystem } from "../pages/projectDocumentation/FrequencySystem/FrequencySystem";
import BalanceProject from "../pages/projectDocumentation/BalanceProject/BalanceProject";
import { Portfolio } from "../pages/projectDocumentation/PortFolio/Portfolio";
import InstaLinks from "../pages/projectDocumentation/InstaLinks/InstaLinks";

export function RouterApp() {
  return (
    <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/frequencySystem" element={<FrequencySystem/>}/>
        <Route path="/balance-project" element={<BalanceProject/>}/>
        <Route path="/portfolio-info" element={<Portfolio/>}/>
        <Route path="/page-links" element={<InstaLinks/>}/>
    </Routes>
  )
}
