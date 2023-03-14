// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore"; 

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCSNoMOvtojK8avoxikkJCkcSV7DLzjYp8",
//   authDomain: "stretchg-4b206.firebaseapp.com",
//   projectId: "stretchg-4b206",
//   storageBucket: "stretchg-4b206.appspot.com",
//   messagingSenderId: "85032107729",
//   appId: "1:85032107729:web:0b5a0a1f951682074e8ff0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function queryDocs(){

//   const querySnapshot = await getDocs(collection(db, "back"));
// querySnapshot.forEach((doc) => {
//   let description = doc.data().description
//   let stretch = doc.id
//   console.log(`${doc.id} => ${description}`);
//   return <div>{doc.id}{description}</div>
// });}

// queryDocs()
// export default queryDocs