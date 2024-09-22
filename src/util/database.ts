import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "percent-afbd5.firebaseapp.com",
  projectId: "percent-afbd5",
  storageBucket: "percent-afbd5.appspot.com",
  messagingSenderId: "1064361148582",
  appId: "1:1064361148582:web:5990dd74307767f8687467",
  measurementId: "G-V1FTQ7SBN5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addData(collectionName:string, data:any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id; // Mengembalikan ID dokumen yang baru ditambahkan
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function getData(collectionName:string, docId:any) {
    try {
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return docSnap.data(); // Mengembalikan data dokumen
      } else {
        console.log("No such document!");
        return null; // Dokumen tidak ditemukan
      }
    } catch (e) {
      console.error("Error getting document: ", e);
    }
  }