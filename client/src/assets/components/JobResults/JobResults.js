import './JobResults.scss';
import CircleSpinner from '../../CircleSpinner/CircleSpinner';

export default function JobResults({ jobPostings, loading }) {

    return (
        <section className='job__results results'>
            {
                loading && <CircleSpinner loading={loading}/>
            }
        </section>
    )
}