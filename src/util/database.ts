import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQAJqJyYWcvEOqhO7cBlsvlWWdeLtnqDQ",
  authDomain: "percent-afbd5.firebaseapp.com",
  projectId: "percent-afbd5",
  storageBucket: "percent-afbd5.appspot.com",
  messagingSenderId: "1064361148582",
  appId: "1:1064361148582:web:5990dd74307767f8687467",
  measurementId: "G-V1FTQ7SBN5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // spasi jadi -
    .replace(/[^\w\-]+/g, "") // hapus karakter tidak valid
    .replace(/\-\-+/g, "-"); // gabungan - jadi satu
}

export async function addData(collectionName: string, data: any) {
  try {
    let baseId = slugify(data.title || "untitled");
    let docId = baseId;
    let counter = 1;

    // Cek apakah dokumen dengan ID tersebut sudah ada
    let exists = await getDoc(doc(db, collectionName, docId));
    while (exists.exists()) {
      docId = `${baseId}-${counter}`;
      exists = await getDoc(doc(db, collectionName, docId));
      counter++;
    }

    await setDoc(doc(db, collectionName, docId), data);
    console.log("Document written with ID: ", docId);
    return docId;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function getData(collectionName: string, docId: any) {
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
