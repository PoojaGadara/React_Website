import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [email ,setEmail] = useState()
    const [password ,setPassword]= useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email)
        formData.append("password",password)
    
     await axios.post('http://localhost:8000/company/userLogin',formData).then((res) => alert(res.data.message))
        navigate('/profile')
    }
  return (
    <>
        <div>
            <div className="my-5">
                <h1 className='text-center'>Login</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={handleSubmit} method="POST" encType='multipart/form-data' action='profile'>
                                <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">UserName</label>
                                <input type="text" 
                                 className="form-control" 
                                 id="exampleFormControlInput1"
                                 name="name"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder=" UserName"
                                 required 
                                 />
                                </div>
                               
                                <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1"   className="form-label">Password</label>
                                <input type="password"
                                 className="form-control" 
                                 id="exampleFormControlInput1"
                                 name="phone"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="Password"
                                 required/>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-outline-primary ml-78" type="submit">
                                        Login
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Login