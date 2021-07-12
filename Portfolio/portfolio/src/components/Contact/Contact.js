import React from 'react'
import {  Containercontact } from './contactStyle'
import {  useFormik } from 'formik';

function Contact() {

    const {handleSubmit, handleBlur, handleChange, values, errors, touched} = useFormik({
        initialValues: {
            name: "",
            email: "",
            description: "",
        },
        onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values, null))
        }

    })
    return (
        <Containercontact>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>

                <input 
                name= "name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="İsim Soyisim"
                />
                {errors.name && touched.name && (
                    <div className="error">{errors.name}</div>
                )}
                <br></br>
                <br></br>
                
                <input 
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                />
                {errors.email && touched.email && <div className="error">{errors.email}</div>}
                <br></br>
                <br></br>
                <textarea 
                name= "description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Görüşleriniz..."
                className="textarea"></textarea>
                <br></br>
                <br></br>
                <button type="submit">Gönder</button>
            </form>
        </Containercontact>
    )
}

export default Contact
