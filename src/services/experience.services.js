import { db } from "../firebase";
import { doc, collection, getDocs, getDoc } from "firebase/firestore";

const experienceCollectionRef = collection(db, "experience");

class ExperienceDataService {
  getAllExperiences = () => {
    return getDocs(experienceCollectionRef);
  };

  getExperience = (id) => {
    const experience = doc(db, "experience", id);
    return getDoc(experience);
  };
}
export default new ExperienceDataService();
