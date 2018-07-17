import React from 'react';

const Navigation = ({onRouteChange, displayedUserName}) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <span className="f2 dim black pa3" style={{paddingLeft: 0}}>
        Hello {displayedUserName},</span>
      <p className="f2 link dim black pointer pa3 underline"
        onClick={() => onRouteChange('signin')}
      >
      Sign Out</p>

    </nav>
  )
}

export default Navigation;
