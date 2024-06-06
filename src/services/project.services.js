import { db } from "../firebase";
import {
  deleteDoc,
  updateDoc,
  doc,
  collection,
  addDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";

const projectCollectionRef = collection(db, "projects");

class ProjectDataService {
  addProject = (newProject) => {
    return addDoc(projectCollectionRef, newProject);
  };

  updateProject = (id, updatedProject) => {
    const projectDoc = doc(db, "projects", id);
    return updateDoc(projectDoc, updatedProject);
  };

  deleteProject = (id) => {
    const projectDoc = doc(db, "projects", id);
    return deleteDoc(projectDoc);
  };

  getAllProjects = () => {
    return getDocs(projectCollectionRef);
  };

  getProject = (id) => {
    const projectDoc = doc(db, "projects", id);
    return getDoc(projectDoc);
  };
}
export default new ProjectDataService();
