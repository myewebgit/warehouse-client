import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import  './ManageServices.css';


const ManageServices = () => {
    const [services,setServices] = useServices();


   
    
    
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
        <div className='w-50 mx-auto'>
            <h5>Manage Services</h5>
            <div className='order-cart'>
            {
                services.map(service => <div key={service._id}><img src={service.img} alt=""/>
                    <h6>{service.name}<br></br><Button
                     onClick={()=> handleDelete(service._id)}>Delete</Button>
                     <Button onClick={(_id)=>navigate('/myitems')} > Order
                        </Button></h6>
                    
                </div>)
            }
            </div>
        </div>
    )
}
    
   

export default ManageServices;
