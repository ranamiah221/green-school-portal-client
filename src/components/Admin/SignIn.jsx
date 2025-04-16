import bg from '../../assets/1700317760482.jpg'

const SignIn = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="hero bg-base-200 min-h-screen">  
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-medium text-center my-5">Login</h1> 
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral bg-red-400 text-white border-0 mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
           
        </div>
    );
};

export default SignIn;