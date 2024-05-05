import './Login.scss';
import { FiUser } from "react-icons/fi";
import { GoLock } from "react-icons/go";

function Login(){

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === 'admin' && password === 'admin') {
            alert('admin')
        } else {
            alert('student');
        }
    }

    return(
        <div className='login'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__title'>MDC Works Login</h2>
                <div className='form__container'>
                    <FiUser className='form__container-icon' />
                    <input className='form__container-input' type="text" id="username" name="username" placeholder="Username" required />
                </div>                
                <br />
                <div className='form__container'>
                    <GoLock className='form__container-icon' />
                    <input className='form__container-input' type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <br />
                <button className='form__button' type="submit">LOGIN</button>

            </form>
        </div>
    )
}

export default Login;