import { db } from "../firebase";
import { doc, collection, getDocs, getDoc } from "firebase/firestore";

const educationCollectionRef = collection(db, "education");

class EducationDataService {
  getAllEducations = () => {
    return getDocs(educationCollectionRef);
  };

  getEducation = (id) => {
    const education = doc(db, "education", id);
    return getDoc(education);
  };
}
export default new EducationDataService();
