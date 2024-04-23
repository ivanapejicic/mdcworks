import './Login.scss';

function Login(){
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className='login'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__title'>Login</h2>
                <label className='form__label' htmlFor="username">Username:</label>
                <input className='form__input' type="text" id="username" name="username" required />
                <br />
                <label className='form__label' htmlFor="password">Password:</label>
                <input className='form__input' type="password" id="password" name="password" required />
                <br />
                <button className='form__button' type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login;