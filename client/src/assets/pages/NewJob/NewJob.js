import './NewJob.scss';
import Header from '../../components/Header/Header';

function NewJob() {
    return (
        <div className='newjob'>
            <Header />
            <div className='company'>
                <h3 className='company__title'>ADD NEW JOB</h3>
                <h4 className='company__subtitle'>Company details</h4>
                <p className='company__text'>Please provide the company details</p>
                <div className='company__input'>
                    <label className='company__input-label' htmlFor="name">Company Name *</label>
                    <input className='company__input-field' type="text" id="name" name="name" placeholder="Name of your company" required />
                    <label className='company__input-label' htmlFor="website">Website</label>
                    <input className='company__input-field' type="text" id="website" name="website" placeholder="e.g. https://example.com" />
                </div>
            </div>
            <div className='job'>
                <h4 className='job__subtitle'>Job Details</h4>
                <p className='job__text'>Please provide a job details</p>
                <div className='job__input'>
                    <div className='job__input-container'>
                        <label className='job__input-container__label' htmlFor="title">Job Title *</label>
                        <input className='job__input-container__field' type="text" id="title" name="title" placeholder="e.g. Front End Developer" required />
                    </div>
                    <div className='job__input-container'>
                        <label className='job__input-container__label' htmlFor="category">Category *</label>
                        <select className='job__input-container__field' id="category" name="category" required>
                            <option value="">Select from options</option>
                            <option value="option1">AI</option>
                            <option value="option2">Cyber Security</option>
                            <option value="option3">Data Analyst</option>
                            <option value="option4">Information Systems</option>
                            <option value="option5">Software Engineer</option>
                        </select>
                        <label className='job__input-container__label' htmlFor="type">Type *</label>
                        <select className='job__input-container__field' id="type" name="type" required>
                            <option value="">Full-Time</option>
                            <option value="option1">Part-Time</option>
                            <option value="option2">Contract</option>
                            <option value="option3">Internship</option>
                        </select>

                    </div>
                    <div className='job__input-container'>
                        <label className='job__input-container__label' htmlFor="location">Location *</label>
                        <select className='job__input-container__field' id="location" name="location" required>
                            <option value="">City</option>
                            <option value="option1">Miami</option>
                            <option value="option2">Fort Lauderdale</option>
                            <option value="option3">Orlando</option>
                            <option value="option4">Tampa</option>
                        </select>
                        <label className='job__input-container__label' htmlFor="preference">Work Preference</label>
                        <select className='job__input-container__field' id="preference" name="preference" required>
                            <option value="">On-site</option>
                            <option value="option1">Remote</option>
                            <option value="option2">Hybrid</option>
                        </select>

                    </div>
                    <div className='job__input-container'>
                        <label className='job__input-container__label' htmlFor="url">Application URL *</label>
                        <input className='job__input-container__field' type="text" id="url" name="url" placeholder="URL where candidates should apply (e.g. https://example.com" required />
                    </div>
                </div>
            </div>
            <button className='newjob__button' type="submit">POST JOB</button>

        </div>
    )
}

export default NewJob;