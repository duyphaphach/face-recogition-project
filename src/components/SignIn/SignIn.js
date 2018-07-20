import React from 'react';
import './SignIn.css';

class SignIn extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    }
  }

  onEmailChange = (event) =>  {
    this.setState({
      userEmail: event.target.value
    })
    console.log(this.state.userEmail);
  }

  onPasswordChange = (event) => {
    this.setState({
      userPassword: event.target.value
    });
    console.log(this.state.userPassword);
  }

  signIn = () {
    this.props.onRouteChange('signin');
  }

  render(){
    return(
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw7 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw7 lh-copy f4" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  onChange={this.onEmailChange}
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw7 lh-copy f4" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  onChange={this.onPasswordChange}
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className={() => showWarning()}>
              <label className="db fw7 lh-copy f4" htmlFor="email-address">* Wrong username or password</label>
            </div>
            <div className="mv3">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                onClick={this.signIn}
                type="button"
              value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f4 dim black db"
                onClick={() => onRouteChange('register')}>
                Register
              </a>
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default SignIn;
