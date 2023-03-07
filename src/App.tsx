import React, { useState, useEffect } from "react";
import Axios from "./service/axios";
interface post{
  id: number;
  title: string;
  category: string;
  content: string;
  minimumAge: string;
}
function App() {
  const [list, setList] = useState<post[]>([])
  const age = 2;

  useEffect(()=>{
    const getList = async () => {
      try {
        if(age < 18) {
          const response = await Axios.get(`post?minimumAge=kids`);
          console.log(response.data)
          setList(response.data)
        }else{
          const response = await Axios.get(`post?minimumAge=young`);
          console.log(response.data)
          setList(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getList()
  },[])
  return (
    <h1>Ola</h1>
  )
}

export default App
