import './Login.scss';
import { FiUser } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import Header from '../../components/Header/Header';
import blue from '../../images/blueimg.jpg'

function Login() {

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

    return (
        <>
            <Header />
            <main className='main'>
                {/* <img className='image' src={blue} /> */}
                <div className='main__hero'>
                    <h1 className='main__heading'>MDC WORKS Career Studio</h1>
                    <p>MDC WORKS Career Studio is a professional development resource giving MDC students the skills they need to successfully launch their careers and create meaningful futures</p>
                </div>
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
            </main>
        </>
    )
}

export default Login;