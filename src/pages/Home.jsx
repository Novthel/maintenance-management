import { useEffect } from 'react'
import FormLogin from '../components/form/FormLogin'
import Header from '../components/header/Header'


export default function Home() {

  useEffect(()=> {
    window.localStorage.removeItem('token')
  },[])

  return (
    <div className='container'>
        <Header />
        <section className='sec-form'>
            <FormLogin />
        </section>
    </div>
  )
}
