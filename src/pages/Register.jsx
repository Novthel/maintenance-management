import { useContext, useState, useEffect } from 'react'
import NavigatePage from '../components/common/navigate/NavigatePage';
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
      <div className='container pag-register'>
          <Header registerView={ registerView } userRole={ userRole } />
          <div className='nav-history'>
            <NavigatePage />
          </div>
      
          <section className='sec-form'>
    
            { formView === 'bussines' && <FormRegisterCompany /> }
            { formView === 'users' && <FormRegister /> }
         
          </section>
      </div>
  )
}
