import { useState } from 'react'
import FormRegister from '../components/form/FormRegister';
import FormRegisterCompany from '../components/form/FormRegisterCompany';
import Header from '../components/header/Header'

export default function Register() {

    const [formView, setFormView] = useState(null);

    const registerView =(f)=>{
        console.log(f)
        setFormView(f)
    }

  return (
      <div className='container'>
          <Header registerView={ registerView } />

          <section className='sec-form'>
            { formView === 'bussines' && <FormRegisterCompany /> }
            { formView === 'users' && <FormRegister /> }
         
          </section>
      </div>
  )
}
