import { Button, Input } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/auth.context';
import { ChangeEvent, useEffect, useState } from 'react';
import { UserSignUp } from '@interfaces/auth.interface';

export interface Props {
  submitFormHandle: (newUser: UserSignUp) => any;
}

export default function FormAuthUserComponent({ submitFormHandle }: Props) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [error, setError] = useState<any>({
    email: false,
    password: false,
  });
  const [user, setUser] = useState<UserSignUp>({
    email: '',
    password: '',
  });
  const passwordLength = 7;

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (isAuthenticated) navigate('/home');
  }, [isAuthenticated]);

  const formChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const validateEmail = (email: string): boolean => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const isValidPass = (password: string): boolean => {
    return password.length > passwordLength;
  };

  const sendForm = () => {
    const errorEmail = !validateEmail(user.email);
    const errorPass = !isValidPass(user.password);
    setError({
      ...error,
      email: errorEmail ? 'Please enter a valid email' : false,
      password: errorPass
        ? `Please enter a valid password - minimum length ${passwordLength} characters `
        : false,
    });
    if (!errorEmail && !errorPass) submitFormHandle(user);
  };

  const styles = {
    inputWrapper: [
      'border',
      'rounded-md',
      'border-black-alpha-2',
      'bg-white-alpha',
    ],
  };

  return (
    <>
      <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 rounded-sm border-boston-blue-950'>
        <Input
          className='mb-3'
          classNames={styles}
          type='email'
          placeholder='Email'
          name='email'
          labelPlacement='outside'
          required
          isInvalid={error.email}
          errorMessage={error.email}
          startContent={
            <span
              className='icon-[material-symbols--mail] m-2
              text-2xl text-default-400 pointer-events-none flex-shrink-0'
            ></span>
          }
          onChange={formChangeHandle}
        />
      </div>
      <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
        <Input
          classNames={styles}
          name='password'
          placeholder='Password'
          labelPlacement='outside'
          isInvalid={error.password}
          errorMessage={error.password}
          startContent={
            <span
              className='icon-[solar--lock-password-unlocked-bold] m-2
              text-2xl text-default-400 pointer-events-none flex-shrink-0'
            ></span>
          }
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <span className='icon-[mdi--eye] text-2xl text-default-400 pointer-events-none mt-1'></span>
              ) : (
                <span className='icon-[mdi--eye-off] text-2xl text-default-400 pointer-events-none mt-1'></span>
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
          onChange={formChangeHandle}
        />
      </div>
      <div className='w-full'>
        <Button
          className='w-full rounded-md mt-10 mb-10 bg-boston-blue-600 text-boston-blue-100'
          onClick={sendForm}
        >
          Login
        </Button>
      </div>
    </>
  );
}
