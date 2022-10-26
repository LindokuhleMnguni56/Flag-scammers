import { doc, setDoc } from "firebase/firestore";

await setDoc(doc(db, "", ), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
