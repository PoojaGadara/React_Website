import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const url=`/company/createUser`;


const Contact = () => {
    const navigate = useNavigate();
   // const [user,setUser] = useState([])
    const [name ,setName] = useState();
    const [phone ,setPhone]=useState();
    const [email ,setEmail]=useState();
    const [password ,setPassword]=useState();

    const  formSubmit= async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('phone',phone);
        formData.append('email',email);
        formData.append('password',password);

    
         const result=await axios.post(url,formData) 
         console.log(result.data) 
            navigate('/Home');
    }
    return(
        <>
        <div>
            <div className="my-5">
                <h1 className='text-center'>Add User</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit} method="POST" encType='multipart/form-data' action='login'>
                                <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" 
                                 className="form-control" 
                                 name="name"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                                 placeholder="Enter Your Name"
                                 required 
                                 />
                                </div>
                               
                                <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1"   className="form-label">Phone</label>
                                <input type="number"
                                 className="form-control" 
                                 name="phone"
                                 value={phone}
                                 onChange={(e) => setPhone(e.target.value)}
                                 placeholder="Mobile Number"
                                 required  pattern="[7-9]{1}[0-9]{9}" />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email"
                                 className="form-control" 
                                 name="email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder="Enter Your Email address" required
                                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password"
                                 className="form-control" 
                                 name="password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="Enter Password" required
                                 />
                                </div>

                      
                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="submit">
                                        Submit form
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        </> 
    );

}
export default Contact;