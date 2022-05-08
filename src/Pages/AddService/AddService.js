import React from "react";
import { useForm } from "react-hook-form";

const AddService =()=>{
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data);
      const url = `https://limitless-lake-40817.herokuapp.com/book`;
      fetch(url,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
          console.log(result);
      })
    }
    return (
        <div className="w-50 mx-auto">
		<h4> Add a service…</h4>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2" placeholder="Book Title"{...register("name")} />
      <input className="mb-2" placeholder="Origin"{...register("type")} />
      <input className="mb-2" placeholder="Author"{...register("author")} />
      <input className="mb-2" placeholder="Price"{...register("price")} />
      <input className="mb-2" placeholder="Quantity"{...register("quantity")} />
      
      <textarea className="mb-2" placeholder="Description"{...register("description")} />
      
      <input className="mb-2" placeholder="Photo URL" type="text"{...register("img")} />
      
      <input type="submit" value="Add Service" />
    </form>
        </div>
    );
};

export default AddService;
