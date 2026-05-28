const Login = () => {
  return (
    <div
      className="flex h-screen justify-center items-center  
      bg-[url('https://images.unsplash.com/photo-1530533718754-001d2668365a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
    >
      <div className="absolute inset-0  backdrop-blur-lg"></div>

      <div className="relative z-10 bg-white h-160 w-120 flex flex-col justify-between items-center rounded-2xl shadow-2xl shadow-white/50">
        <h1 className="mt-10 text-3xl font-bold bg-linear-to-r from-purple-500 to-blue-400 text-transparent  bg-clip-text">
          Login Form
        </h1>
        <form className="flex flex-col gap-y-10 w-full p-10 mt-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b-3 border-blue-500 focus:outline-none focus:border-blue-700 py-2 bg-transparent"
          ></input>

          <input
            className="mb-20"
            type="password"
            placeholder="Password"
            className="w-full border-b-3 border-blue-500 focus:outline-none focus:border-blue-700 py-2 bg-transparent"
          ></input>
        </form>
        <button className="h-12 w-1/2 text-white text-[15px] bg-linear-to-r from-purple-500 to-blue-400 rounded">
          Login Account
        </button>
        <h6 className="mb-20 mt-1.5">
          Don't Have An Account? <a href="#">Register</a>
        </h6>
      </div>
    </div>
  );
};

export default Login;
