import { DarkComponent } from "../layouts/DarkComponent";
import { LightComponent } from "../layouts/LightComponent";
import { AboutMe } from "./AboutMe";
import ProfessionalExperience from "./ProfessionalExperience";
import { Projects } from "./Projects";
import Skils from "./Skils";


export function Main() {
  return (
    <div>
        <LightComponent element={<AboutMe/>} />
        <DarkComponent element={<Projects/>}/>
        <LightComponent element={<Skils/>} />
        <DarkComponent element={<ProfessionalExperience/>}/>
      </div>
  )
}
