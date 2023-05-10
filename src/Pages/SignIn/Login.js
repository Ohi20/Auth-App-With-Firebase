import React from 'react';
import Loading from '../../Shared/Loading';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


const Login = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const [SignInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const provider = new FacebookAuthProvider();

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || gLoading) {
    return <Loading></Loading>
  }

  if (error || gError) {
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = data => {
    console.log(data);
    SignInWithEmailAndPassword(data.email, data.password);

  }

  const loginFacebook = () => {
    signInWithPopup(provider, auth);
  }

  return (
    <div className='px-12 my-5'>
      <div class="hero lg:min-h-screen rounded" style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/181622.jpg")`

      }}>
        <div class="hero-content flex-col lg:flex-row-reverse">

          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text lg:text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      massage: 'email required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Please Give a Valid Email' // JS only: <p>error message</p> TS only support string
                    }
                  })}
                />
                <label class="label">
                  {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                </label>


              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text lg:text-xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      massage: 'password required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                    }
                  })}
                />
                <label class="label">
                  {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                  {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                </label>
              </div>
              {signInError}

              <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
              <p className='lg:text-xl'>New to Painting? <Link className='text-primary' to="/signup"><br></br>Create New Account</Link></p>
              <div class="divider">OR</div>
              <button onClick={() => signInWithGoogle()}
                className='btn btn-outline'>Continue with Google</button>
              <button onClick={loginFacebook}
                className='btn btn-outline'>Continue with Facebook</button>
              <button
                className='btn btn-outline'>Continue with Github</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;