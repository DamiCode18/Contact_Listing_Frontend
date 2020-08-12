import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import './Data.css'

class Data extends Component {
    state = {
		contacts: []
	}
	componentDidMount(){	
axios.get('http://127.0.0.1:8000/api/contact/').then(res=>{
	this.setState({contacts: res.data})
}).catch(err=>{
	console.log(err)
})
    }
    handleUpdate = (e) => {
		e.preventDefault();
		const user = localStorage.getItem('email');
		axios
			.put(`http://127.0.0.1:8000/api/contact/${this.state.id}/`, {
				description: this.state.description,
				title: this.state.title,
				agent: this.props.id,
				userId: user
			})
			.then((res) => {
				const data = this.state.activity.filter(i => i.id !== this.state.id)
				const newData = [res.data, ...data]
				this.setState({activity: newData, title: '', description: '', updateMsg: 'Updated Successfully'});
			})
			.catch((err) => {
				console.log(err);
				this.setState({ updateErr: 'Failed to update' });
			});
	};
    onEdit=(index)=>{
            this.setState({
                first_name : this.state.contacts[index].first_name,
                last_name       : this.state.contacts[index].last_name,
                email         : this.state.contacts[index].email,
                phone_no         : this.state.contacts[index].phone_no,
                message         : this.state.contacts[index].message,
                address    : this.state.contacts[index].address
            })
    }
    delete=(id)=>{
            const api = `http://127.0.0.1:8000/api/contact/${id}/`;
            axios
                .delete(api)
                .then((res) => {
                    const data = this.state.contacts.filter(i => i.id !== id)
                    this.setState({ contacts: data });
                    this.props.history.push('/')
                })
                .catch((err) => this.setState({ error: true, errorMessage: "Failed to Delete Log" }));        
            }
    render(){
		const { contacts } = this.state;
		return (
			<div className="App container">
				<Navbar/>
                    <div className="row container">
                        {contacts.length > 0 ? (
                            contacts.map((contact, index)=>(
                    
                        <div key={contact.id} className="card top text-center col-md-4 col-sm-6">
                            <div className="card-header">
                                {contact.phone_no}
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">{`${contact.first_name} ${contact.last_name}`}</h5>
                            <p className="card-text">{`${contact.email}`}</p>
                                <button onClick={()=> this.onEdit(index)} className="btn btn-primary mx-1">Edit</button>
                                <button onClick={()=> this.delete(contact.id)} className="btn btn-info mx-1">Delete</button>
                            </div>
                            <footer className="blockquote-footer">{`${contact.message}`}</footer>
                            <div className="card-footer text-muted">
                            {`${contact.address}`}
                            </div>
                        </div>					
                            ))):null}
                    </div>
            </div>
                        
                            

)
}
}
export default Data;