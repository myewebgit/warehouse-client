import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import  './ManageServices.css';

import { useForm } from "react-hook-form";


  

const ManageServices = () => {
    const [services,setServices] = useServices();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



   
    
    
const navigate = useNavigate();



    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if (proceed){
            const url = `http://localhost:5000/book/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id!==id);
                setServices(remaining);
            })

        }
    }
    return(
        <Container className='d-flex flex-row bd-highlight mb-2'>
            
            <div className='p-2 bd-highlight w-75'>
            <h5>Manage Services</h5>
            <div className='order-cart'>
            {
            
                services.map(service => <div key={service._id}><img src={service.img} alt=""/> 
                <h6>Quantity:{service.quantity}</h6>
                    <h6>{service.name}<br></br>
                    <Button
                     onClick={()=> handleDelete(service._id)}>Delete</Button>
                     <Button onClick={(_id)=>navigate('/myitems')} > Order
                        </Button></h6>

                        
                    
                </div>)
            }
            </div>


        </div>
        <div className='p-2 bd-highlight w-25' >
    <h5>Reload Section</h5>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="Book Title" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  defaultValue="Item Quantity"  {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" value="Reload" />
    </form>
</div>
        </Container>
    )
}
    
   

export default ManageServices;
