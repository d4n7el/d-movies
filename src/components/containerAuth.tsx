import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import FormAuthUserComponent from './formAuthUserComponent';
import { UserSignUp } from 'src/interfaces/auth.interface';

export interface Props {
  submitFormHandle: (newUser: UserSignUp) => any;
  isLogin: boolean;
}

export const ContainerAuth = ({ submitFormHandle, isLogin }: Props) => {
  return (
    <div className='container flex m-auto p-10 '>
      <div
        className=' bg-white w-full md:w-8/12 lg:w-6/12 h-[90vh] flex justify-center
       items-center shadow-xl rounded-s-lg overflow-hidden border border-black-alpha-1'
      >
        <div className='w-6/12'>
          <div className=''>
            {isLogin && (
              <strong className='text-3xl'>Log in to your account</strong>
            )}
            {!isLogin && (
              <strong className='text-3xl'>Create your account</strong>
            )}

            <small className='mb-6 mt-1 block text-md text-black-alpha'>
              Welcome Back! Select method to login.
            </small>
            <section className='mb-8 flex gap-4'>
              <Button
                className='w-full border-1  border-black-alpha-1 rounded-md py-6'
                variant='ghost'
                startContent={
                  <span className='icon-[logos--google-icon]'></span>
                }
              >
                Google
              </Button>
              <Button
                className='w-full border-1  border-black-alpha-1 rounded-md py-6'
                variant='ghost'
                startContent={<span className='icon-[logos--facebook]'></span>}
              >
                Facebook
              </Button>
            </section>
            <section className='border-t-1 border-black-alpha-1 h-4 relative flex justify-center mb-6'>
              <span className='text-xs text-black-alpha-8 bg-white mt-[-8px] px-4'>
                Or continue with email.
              </span>
            </section>
            <FormAuthUserComponent
              submitFormHandle={submitFormHandle}
            ></FormAuthUserComponent>
            {isLogin && (
              <Link
                to='/register'
                className='mt-6 text-black-alpha-8 text-sm text-center block'
              >
                Don't have a account ?
                <span className='ml-2 text-boston-blue-600 tracking-wide'>
                  Create an account
                </span>
              </Link>
            )}
            {!isLogin && (
              <Link
                to='/login'
                className='mt-6 text-black-alpha-8 text-sm text-center block'
              >
                I have a account ?
                <span className='ml-2 text-boston-blue-600 tracking-wide'>
                  Sing in
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        className='sm:w-4/12 lg:w-6/12 bg-login-default
        rounded-e-lg overflow-hidden shadow-xl lg:bg-cover bg-center lg:bg-top '
      ></div>
    </div>
  );
};
