import ContactForm from "./ContactForm";
import {useState, useEffect} from 'react'
import firebase from '../firebase'
function Contacts() {
    const [contactObjects, setContactObjects] = useState({}); //{{}, {}, {}}
    const [currentId, setCurrentId] = useState('');
    
    useEffect(() => {
      firebase.database().ref('contacts').on('value', snapShot => {
         console.log(snapShot)
         if(snapShot.val() != null) {
            setContactObjects( {
               ...snapShot.val()
            })
         } else {
            setContactObjects({})
         }
      })
    }, []) //Similar to componentDidMount

    function addOrEdit(obj) {
       console.log(obj)
       if(currentId === '') 
       firebase.database().ref('contacts').push(
          obj, 
          err => {
             if(err)
               console.log(err)
             else
               setCurrentId('')
          }
          )
         else 
         firebase.database().ref(`contacts/${currentId}`).set(
             obj,
             err => {
                if(err)
                  console.log(err)
               else
                  setCurrentId('')
             }
          )
    }

    function onDelete(key) {
        if(window.confirm('Are you sure to delete this record'))
        firebase.database().ref(`contacts/${key}`).remove(
           err => {
              if(err) {
                 console.log(err)
              } else {
                 setCurrentId('')
              }
           }
        )
    }
    return (
        <>
<div className="jumbotron jumbotron-fluid">
   <div className="container">
      <h1 className="display-4 text-center">Contact Register</h1>
   </div>
</div>
<div className="row">
   <div className="col-md-5">
      <ContactForm  {...({addOrEdit, currentId, contactObjects})} />
   </div>
   <div className="col-md-7">
      <table className="table table-borderless table-stripped">
         <thead className="thead-light">
            <tr>
               <th>Full Name</th>
               <th>Mobile</th>
               <th>Email</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody> 
            {console.log(contactObjects)}
             {
                 Object.keys(contactObjects).map(id => {
                     return <tr key={id}>
                     <td>{contactObjects[id].fullName}</td>
                     <td>{contactObjects[id].mobile}</td>
                     <td>{contactObjects[id].email}</td>
                     <td>
                        <a className="btn text-primary" 
                           onClick={() => { setCurrentId(id) }}
                        >
                        <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a className="btn text-danger" 
                           onClick={() => { onDelete(id)}}
                        >
                        <i className="far fa-trash-alt"></i>
                        </a>
                     </td>
                  </tr>
                 })
                }
         </tbody>
      </table>
   </div>
</div>
</>
    )
}

export default Contacts;