import React from 'react';
import './Register.css';

const Register = ({onRouteChange}) => {
  return(
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw7 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw7 lh-copy f4" htmlFor="email-address">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw7 lh-copy f4" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw7 lh-copy f4" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            <div className="mv3">
              <label className="db fw7 lh-copy f4" htmlFor="password">Confirm Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="mv3">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
              onClick={() => onRouteChange('signin')}
              type="submit"
              value="Register"/>
          </div>
          <div className="mv3">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
              onClick={() => onRouteChange('signin')}
              type="submit"
              value="Already have account"/>
          </div>
        </form>
      </main>
    </article>
  );
}

export default Register;
