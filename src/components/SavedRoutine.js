import {db}  from "../firebase/Firebase-config";
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SavedRoutine({handleRoutineListClick, queryDbList, selectedList}) {
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


    useEffect(()=> {
      queryDbList()
    }, [selectedList])
  

  return (
    <div>
    <h1 className="routine-header">Your Routines</h1>
    <div>{routineList.map((item) => {
      return (
        <div onClick={() => handleRoutineListClick(`/Routines/donovan/saved-routines/`, item.name)} className='routines-list' key={item.name} ><Link to='/routine'>{item.name}</Link></div>
      )
    })}</div>
    </div>
  )
}