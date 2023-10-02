import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../ContexProbidor/authProbidor";

const Login = () => {

    const { loginUser, googleLogin } = useContext(authContext)
    const navigate = useNavigate()

    const HandelLoginUser = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        // create login user
        loginUser(email, password)
            .then(res => {
                console.log(res)
                e.target.reset()
                navigate("/")
            })
            .catch(error => {
                console.error(error)
            })
    }


    const HandelGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                navigate("/")

            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={HandelLoginUser}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="Email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="mt-3">Don`t have account?<Link to="/registration">please Register</Link></p>
                        </form>
                        <p onClick={HandelGoogleLogin}>Login with <Link>Google</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;