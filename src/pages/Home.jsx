import FormLogin from '../components/form/FormLogin'
import Header from '../components/header/Header'


export default function Home() {
  return (
    <div className='container'>
        <Header />
        <section className='sec-form'>
            <FormLogin />
        </section>
    </div>
  )
}
