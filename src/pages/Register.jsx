import { useContext, useState, useEffect } from 'react'
import FormRegister from '../components/form/FormRegister';
import FormRegisterCompany from '../components/form/FormRegisterCompany';
import Header from '../components/header/Header'
import { AppContext } from '../context/UserProvider';

export default function Register() {

    const [formView, setFormView] = useState(null);
    const { role } = useContext( AppContext );
    const [userRole, setUserRole] = useState(null);

    const registerView =(f)=>{
        setFormView(f)
    }

    useEffect(() => {
   setUserRole(role)
    }, [role]);

  return (
      <div className='container'>
          <Header registerView={ registerView } userRole={ userRole } />

          <section className='sec-form'>
            { formView === 'bussines' && <FormRegisterCompany /> }
            { formView === 'users' && <FormRegister /> }
         
          </section>
      </div>
  )
}
