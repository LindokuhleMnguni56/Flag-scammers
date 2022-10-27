import { doc, setDoc } from "firebase/firestore";

await setDoc(doc(db, "flags", ), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
