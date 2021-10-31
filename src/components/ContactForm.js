import {useState, useEffect} from 'react';
import { FaUserAlt, FaMobile } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


function ContactForm(props) {
   console.log(props);
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
    const [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
      if(props.currentId === '')
         setValues({
            ...initialFieldValues
         })
         else 
            setValues({
               ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    function handleInputChange(event) {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name] : value
        })
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        props.addOrEdit(values)
    }
    return (
        <form autoComplete='off' onSubmit={handleFormSubmit}>
   <div className="form-group input-group">
      <div className="input-group-prepend">
         <div className="input-group-text py-3">
            <FaUserAlt />
         </div>
      </div>
      <input className="form-control" 
                placeholder="Full Name" 
                name="fullName"
                value={values.fullName}
                onChange={handleInputChange}
         />
   </div>
   <div className="form-row">
      <div className="form-group input-group col-md-6 py-3">
         <div className="input-group-prepend">
            <div className="input-group-text py-3">
               <FaMobile/>
            </div>
         </div>
         <input className="form-control" 
                placeholder="Mobile" 
                name="mobile"
                value={values.mobile}
                onChange={handleInputChange}
            />
      </div>
      <div className="form-group input-group col-md-6">
         <div className="input-group-prepend">
            <div className="input-group-text py-3">
               <MdEmail />
            </div>
         </div>
         <input className="form-control" 
                placeholder="Email" 
                name="email"
                value={values.email}
                onChange={handleInputChange}
            />
      </div>
   </div>
   <div className="form-group py-3">
      <textarea className="form-control" 
                placeholder="Address" 
                name="address"
                value={values.address}
                onChange={handleInputChange}
         />
   </div>
   <div className="form-group">
      <input type="submit" value={props.currentId === '' ? 'Submit' : 'Update' } className="btn btn-primary btn-block" />
   </div>
</form >
    )
}

export default ContactForm;