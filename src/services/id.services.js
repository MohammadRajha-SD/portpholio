import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const idCollectionRef = collection(db, "id");

class IdDataService {
  getId = (id) => {
    const data = doc(db, "id", id);
    return getDoc(data);
  };
  getAll = () => {
    return getDocs(idCollectionRef);
  };
}

export default new IdDataService();
