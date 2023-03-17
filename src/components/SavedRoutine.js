import {db}  from "../firebase/Firebase-config";
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";

export default function SavedRoutine({}) {
  const [routineList, setRoutineList] = useState([])

  useEffect(() => {

  
  const queryDb = async() => {
    const querySnapshot = await getDocs(collection(db, '/Routines/donovan/saved-routines'));
    
      setRoutineList(querySnapshot.docs.map((doc) => {
        return {name: doc.id}
      }))
    }
    queryDb()
    }, [])
    console.log(routineList)
  
  return (
    <div>{routineList.map((item) => {
      return (
        <div>{item.name}</div>
      )
    })}</div>
  )
}