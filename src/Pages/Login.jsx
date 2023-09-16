import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'
function Login() {
  return (
    <section className='h-screen flex justify-center items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4'>
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="EMAIL" name="identifer" defaultValue="test@gmail.com"/>
        <FormInput type="password" label="PASSWORD" name="password" defaultValue="secret"/>
        <div className='mt-4'>
          <SubmitBtn text='login'/>
        </div>
        <div>
          <button type='button' className='btn btn-secondary btn-block'>Guest User</button>
          <p className='mt-2'>
            Not a remember yet? 
            <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>
              register 
            </Link>
          </p>
        </div>
      </Form>
    </section>
  )
}

export default Login