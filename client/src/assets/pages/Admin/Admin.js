import './Admin.scss';

function Admin () {
    return(
        <div className='admin'>
            <ul>
                <li>Admin's side (form) where new jobs are being uploaded</li>
                <li>Options to show list of jobs in specific category</li>
                <li>Once jobs are listed next to each one of them to be 1. show more info 2. delete 3. update</li>
            </ul>
        </div>
    );
}

export default Admin;