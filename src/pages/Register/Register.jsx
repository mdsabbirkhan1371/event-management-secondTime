import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero bg-red-200  font-medium">
            
            <form className="card-body md:w-1/2 text-cyan-600">
                <h3 className="text-3xl font-bold">Please Register to Your Account....</h3>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
    
                        <h3 >Already Have An Account? <Link className="text-success font-bold"  to="/login">Login Here</Link></h3>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-active btn-secondary">Register</button>



                    </div>
                </form>
        </div>
    );
};

export default Register;