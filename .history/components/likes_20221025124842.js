import { doc, setDoc } from "firebase/firestore";

await setDoc(doc(db, "", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
