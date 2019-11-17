import React from 'react'
import './_contact.scss'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Contact = props => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const CustomerSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'Too short')
      .max(12, 'Too long')
      .required('Phone number is required'),
    firstName: Yup.string()
      .max(50, 'Too long')
      .required('First Name is required'),
    lastName: Yup.string()
      .max(50, 'Too long')
      .required('Last Name is required'),
    company: Yup.string()
      .max(50, 'Too long')
      .required('Company is required'),
    description: Yup.string().required('Description is required'),
    field: Yup.string().required('Please choose your interest')
  })
  const handleSubmit = values => {
    axios
      .post('https://acexis-sver.herokuapp.com/acexis/customer', values)
      .then(res => alert('Thanks for your information!'))
      .catch(err => alert(err))
  }
  return (
    <Formik
      initialValues={{
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        company: '',
        field: '',
        description: ''
      }}
      validationSchema={CustomerSchema}
      onSubmit={(values, props) => {
        handleSubmit(values)
        props.resetForm(props.initialValues)
      }}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
        <section
          id="contact-acexis"
          className="form-wrap form-wrap-contact-section"
          ref={props.ref}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-sm-6 contact-about">
                <h2>Tell us about your project</h2>
                <div className="contact-about-stats">
                  <div className="stat-item">
                    <div className="stat-num">8</div>
                    <span className="stat-des">Years in operation</span>
                  </div>
                  <div className="stat-item">
                    <div className="stat-num">300</div>
                    <span className="stat-des">Clients</span>
                  </div>
                  <div className="stat-item">
                    <div className="stat-num">2</div>
                    <span className="stat-des">Offices</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-sm-6 form-wrap-contact">
                <Form>
                  <div className="form-group">
                    <select
                      className="form-select"
                      name="field"
                      value={values.field}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" style={{ color: 'rgb(132,132,132)' }}>
                        I am interested in
                      </option>
                      <optgroup label="Services">
                        <option value="Mobile App Development">
                          Mobile App Development
                        </option>
                        <option value="Enterprise Software Development">
                          Enterprise Software Development
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="Dedicated Team">Dedicated Team</option>
                        <option value="IT Consulting">IT Consulting</option>
                        <option value="Other">Other</option>
                      </optgroup>
                      <optgroup label="Technologies">
                        <option value="Internet of Things">
                          Internet of Things
                        </option>
                        <option value="Blockchain">Blockchain</option>
                      </optgroup>
                    </select>
                    {errors.field && touched.field ? (
                      <div className="elm2 Invalid"> {errors.field}</div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="form-group">
                    <Field type="text" name="email" placeholder="Email" />
                    {errors.email && touched.email ? (
                      <div className="elm2 Invalid"> {errors.email}</div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="form-group">
                    <Field type="text" name="phone" placeholder="Work Phone" />
                    {errors.phone && touched.phone ? (
                      <div className="elm2 Invalid"> {errors.phone}</div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="form-group">
                    <Field type="text" placeholder="Company" name="company" />
                    {errors.company && touched.company ? (
                      <div className="elm2 Invalid"> {errors.company}</div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="form-box">
                    <div className="form-group">
                      <Field
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                      />
                      {errors.firstName && touched.firstName ? (
                        <div className="elm2 Invalid"> {errors.firstName}</div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="form-group">
                      <Field
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                      />
                      {errors.lastName && touched.lastName ? (
                        <div className="elm2 Invalid"> {errors.lastName}</div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  <div className="form-group form-group-description">
                    <textarea
                      className="form-textarea"
                      name="description"
                      maxLength="65000"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Project Description"
                    />

                    {errors.description && touched.description ? (
                      <div className="elm2 Invalid"> {errors.description}</div>
                    ) : (
                      ''
                    )}
                  </div>
                  <button
                    className="form-submit-contact"
                    type="submit"
                    value="Submit"
                  >
                    Talk To Our Team
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  )
}

export default Contact
