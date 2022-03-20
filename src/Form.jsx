

// Create a react app.
// Create a form that accepts employee details
// Name
// Age
// Address
// Department ( select tag )
// Salary
// marital state ( check box )
// on submit save the data into a database

import {useEffect, useState } from "react"
import axios from "axios"

// retrieve the data when user lands on the page and show it in a table
export const Form = () => {
    const [form , setForm] = useState({
        name:"",
        age:undefined,
        address:"",
        Department:"",
        Salary:"",
        Marital_Status:undefined,

    })
    const [list, setlist] = useState([])
    
    const handleChange = (e) =>{
        const {id, value}= e.target
      // console.log(e.target.value)
      
        setForm({...form, [id]:value})
        console.log(form)
    }

    const handleSubmit = () => {
        axios.post("http://localhost:3200/user", form).then(()=>{
           // console.log(res.data)
           alert("user created successfully")
           setForm({
            name:"",
            age:null,
            address:"",
            Department:"",
            Salary:"",
            Marital_Status:null,
           })
        })
    }

    useEffect(() =>{
        axios.get("http://localhost:3200/user").then(({data})=>{
           // console.log(data)
          setlist(data)
        })
    },[])

    return (
        <div>

         {
             console.log(list)
         }




{ 
                    list.map((e) =>{
                 return   <div >{e.id}. {e.name} {e.age} {e.address} {e.Department}
                     {e.Salary} {e.Marital_Status} </div> 
                     
                     
                    
             
            })    }  
             
          <form action="" onSubmit={handleSubmit}>
              
           <input type="text" 
           value={form.name}
       id= "name"
       onChange={handleChange}
       placeholder="enter your name" /><br />

       <input type="number"
       value={form.age}
       id= "age"
       onChange={handleChange}
       placeholder="enter your Age" /><br />

       <input type="text"
          value={form.address}
          id= "address"
          onChange={handleChange}
         placeholder="enter your Address" /><br />

       <input type="text"
          value={form.Department}
          id= "Department"
          onChange={handleChange}
         placeholder="enter your Department" /><br />

       <input type="number"
          value={form.Salary}
          id= "Salary"
          onChange={handleChange}
         placeholder="enter your Salary" /><br />

       <input type="checkbox"
          value={form.Marital_Status}
          id= "Marital_Status"
          onChange={handleChange}
         placeholder="enter your Marital_Status" /><br />

       <input type="submit"
         placeholder="submit" />
              
              </form> 



            <div>
                
               
            </div>
        </div>
    )
}