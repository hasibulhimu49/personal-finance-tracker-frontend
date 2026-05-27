const Registration = () => {
  return (
    <div
      className="flex h-screen justify-center items-center  
  bg-[url('https://images.unsplash.com/photo-1530533718754-001d2668365a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
    >
      <div className="bg-white h-160 w-120 flex flex-col justify-between items-center rounded">
        <h1>Registration Form</h1>
        <form className="flex flex-col gap-y-10 w-full">
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email Address"></input>
          <input type="text" placeholder="Phone"></input>
          <input type="password" placeholder="Password"></input>
        </form>
        <button>Create Account</button>
        <h6>
          Already have Account?<a href="#">Sign in</a>
        </h6>
      </div>
    </div>
  );
};

export default Registration;
