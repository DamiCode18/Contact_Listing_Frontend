import React, { Component } from 'react'
import axios from 'axios'


class New extends Component {
    state = {
        first_name: '',
        last_name:  '',
        address:  '',
        email: '',
        message: '',
        phone_no: ''
    }
    onChange=(e)=>{
    this.setState({[e.target.name]: e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault()
        const user_contact ={
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            email: this.state.email,
            message: this.state.message,
            phone_no: this.state.phone_no
        }
        const api = 'http://127.0.0.1:8000/api/contact/'
        axios.post(api, user_contact)
        .then(
            res=> res.data
        )
        .catch(err=> console.log(err))
    }
    render(){
        return (
            <div className="container form">
                   <form onSubmit={this.onSubmit}>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                           <label htmlFor="firstname">Firstname</label>
                           <input required value={this.state.first_name} onChange={this.onChange} name="first_name" type="text" className="form-control" id="firstname" placeholder="firstname"/>
                           </div>
                           <div className="form-group col-md-6">
                           <label htmlFor="lastname">Lastname</label>
                           <input required value={this.state.last_name} onChange={this.onChange} name="last_name" type="text" className="form-control" id="lastname" placeholder="lastname"/>
                           </div>
                       </div>
                       <div className="form-group">
                           <label htmlFor="address">Address</label>
                           <input required value={this.state.address} onChange={this.onChange} name="address" type="text" className="form-control" id="address" placeholder="Address"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="email">Email</label>
                           <input required value={this.state.email} onChange={this.onChange} type="email" name="email" className="form-control" id="email" placeholder="example@yahoo.com"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="phone_no">Phone No</label>
                           <input required value={this.state.phone_no} onChange={this.onChange} type="tel" name="phone_no" className="form-control" id="phone_no" placeholder="+2347051******"/>
                       </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="message">Message</label>
                            <textarea required value={this.state.message} onChange={this.onChange} type="text" name="message" className="form-control" id="message" placeholder="Enter your message" />
                        </div>
                       
                       <button type="submit" className="btn btn-primary">Add Contact</button>
               </form>
           </div>
       )
    }
    
}
export default New;