import { useState, useEffect } from 'react'
import DropdownSearch from '../components/DropdownSearch'
import '../CSS/Dropdown.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSNoMOvtojK8avoxikkJCkcSV7DLzjYp8",
  authDomain: "stretchg-4b206.firebaseapp.com",
  projectId: "stretchg-4b206",
  storageBucket: "stretchg-4b206.appspot.com",
  messagingSenderId: "85032107729",
  appId: "1:85032107729:web:0b5a0a1f951682074e8ff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



function DropdownSearchPage() {
  const [selected, setSelected] = useState(null)
  const [stretchList, setStretchList] = useState([])



useEffect(() => {
console.log(selected)

const queryDb = async() => {
  const querySnapshot = await getDocs(collection(db, selected.value));
    querySnapshot.forEach((doc) => {
    let description = doc.data().description
    let stretch = doc.id
    console.log(`${stretch} => ${description}`);
    setStretchList([{stretch, description}])
})}
if(selected === null){
  return
}else{
  queryDb()
}
}, [selected])


  const handleSelect = (option) => {
    setSelected(option)
  }
  
  const options = [
    {label: 'Neck', value: 'neck'},
    {label: 'Shoulders', value: 'shoulders'},
    {label: 'Bicep', value: 'bicep'},
  ]

  return(
    <div>
      <DropdownSearch onChange={handleSelect} value={selected} options={options}/>
      {stretchList.map((stretch) => {
        return <div>{stretch.stretch}{stretch.description}</div>
      })}
    </div>
  )
}


export default DropdownSearchPage