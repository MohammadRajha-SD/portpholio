import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const skillsCollectionRef = collection(db, "skills");

class SkillsDataService {
  getAllSkills = () => {
    return getDocs(skillsCollectionRef);
  };
}
export default new SkillsDataService();
