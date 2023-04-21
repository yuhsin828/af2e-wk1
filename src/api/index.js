import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import places from "../json/places.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const placesCollection = collection(db, "places");

export const feedPlaces = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(placesCollection);
  querySnapshot.forEach(async (place) => {
    await deleteDoc(doc(db, "places", place.id));
  });
  // ADD NEW DOCS
  places.forEach(async (place) => {
    const docRef = await doc(placesCollection);
    await setDoc(docRef, { ...place, id: docRef.id });
  });
};

export const getPlaces = async () => {
  const querySnapshot = await getDocs(placesCollection);
  // Convert query to a json array.
  let result = [];
  querySnapshot.forEach(async (place) => {
    await result.push(place.data());
  });
  console.log({ result });
  return result;
};

export const getPlaceById = async (id) => {
  const docRef = await doc(db, "places", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};