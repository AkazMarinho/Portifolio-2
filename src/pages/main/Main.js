import { useEffect } from "react";
import { DarkComponent } from "../layouts/DarkComponent";
import { LightComponent } from "../layouts/LightComponent";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import ProfessionalExperience from "./ProfessionalExperience";
import Profile from "./Profile";
import { Projects } from "./Projects";
import Skils from "./Skils";


export function Main() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Rolar para o topo ao montar o componente
  }, []);
  return (
    <div>
        <DarkComponent element={<Profile/>}/>
        <LightComponent element={<AboutMe/>} />
        <DarkComponent element={<Projects/>}/>
        <LightComponent element={<Skils/>} />
        <DarkComponent element={<ProfessionalExperience/>}/>
        <LightComponent element={<Contact/>} />
      </div>
  )
}
