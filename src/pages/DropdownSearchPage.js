import { useState, useEffect } from 'react'
import DropdownSearch from '../components/DropdownSearch'
import '../CSS/Dropdown.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

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
let i = []


function DropdownSearchPage({ handleListClick }) {
  const [selected, setSelected] = useState(null)
  const [stretchList, setStretchList] = useState([])



useEffect(() => {


const queryDb = async() => {
  const querySnapshot = await getDocs(collection(db, selected.value));
  if (querySnapshot === stretchList){
    return
  }else{
    querySnapshot.forEach((doc) => { 
      if(!i.includes(doc.id)){
        i.push(doc.id)
      }
    
    }
  )}
  setStretchList(i)
}
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
      <div className='stretch-list-wrapper'>
        {stretchList.map((stretch) => {
        return (
          <p key={stretch} onClick={() => handleListClick(stretch)} className='stretch-list'>{stretch}</p>
        )
      })}
      </div>
    </div>
  )
}


export default DropdownSearchPage