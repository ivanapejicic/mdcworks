import './CircleSpinner.scss';
import CircleLoader from 'react-spinners/CircleLoader';

export default function CircleSpinner({ loading }) {
    return (
        <div className='loader'>
            <CircleLoader color="rgb(66, 133, 244)" loading={loading}/>
        </div>
    )
}
