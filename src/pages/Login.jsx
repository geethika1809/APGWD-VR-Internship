import React from 'react'

function Login() {

  return (
    <div>
      <form action="">
{/* 
<div class="imgcontainer">
    <img src="login-img.png" alt="Avatar" class="avatar"/>
</div> */}

<div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit" className='Login-b'>Login</button>
    <label>
    <input type="checkbox"  name="remember"/> Remember me
    </label>
</div>

<div class="container-f">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
</div>

</form>
    </div>
  )
}

export default Login
