import { db } from "../firebase";
import {
  getDoc,
  updateDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";

const ViewCollectionRef = collection(db, "pageViews");

class ViewDataService {
  updateView = (id, updatedView) => {
    const viewDoc = doc(db, "pageViews", id);
    return updateDoc(viewDoc, updatedView);
  };
  getView = (id) => {
    const viewDoc = doc(db, "pageViews", id);
    return getDoc(viewDoc);
  };

  getAllView = () => {
    return getDocs(ViewCollectionRef);
  };
}

export default new ViewDataService();
