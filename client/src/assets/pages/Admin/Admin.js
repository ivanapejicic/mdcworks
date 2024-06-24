import './Admin.scss';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import { TiUpload } from "react-icons/ti";

function Admin() {
    return (
        <div className='admin'>
            <HeaderAdmin />
            <div className='admin__body'>
                <h2 className='admin__body-title'>Add New Job</h2>

                <div className='company'>
                    <h4 className='company__title'>Company Details</h4>
                    <p className='company__text'>Please share additional details about company.</p>
                    <div className='company__form'>
                        <div className='company__form-top'>
                            <div className='field'>
                                <label className='field__label' htmlFor="companyname">Company Name *</label>
                                <input className='field__input' type="text" id="companyname" name="companyname" placeholder="Apple LLC" required />
                            </div>
                            <div className='field'>
                                <label className='field__label' htmlFor="website">Website</label>
                                <input className='field__input' type="text" id="website" name="website" placeholder="www.example.com" required />
                            </div>
                        </div>
                        <div className='company__form-bottom'>
                            <div className='company__form-bottom'>
                                <div className='field'>
                                    <label className='field__label' htmlFor="companylogo">Company Logo</label>
                                    <div
                                        className='field__upload'
                                        ondrop="dropHandler(event);"
                                        ondragover="dragOverHandler(event);">
                                        <TiUpload style={{ width: '1.5rem', height: '4rem' }} />
                                        <p className='text'><b>Drop your files here</b></p>
                                        <p className='text'>or click to choose from your device</p>
                                    </div>
                                    <button className='button'>Upload file</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='job-details'>
                    <h5 className='job-details__title'>Job Details</h5>
                    <p className='job-details__text'>Please provide a description of duties and obligations related to the position.</p>
                    <div className='job-details__form'>
                        <div className='job-details__form-top'>
                            <div className='field'>
                                <label className='field__label' htmlFor="jobtitle">Job Title *</label>
                                <input className='field__input' type="text" id="jobtitle" name="jobtitle" placeholder="Summer Intern" required />
                            </div>
                            <div className='field'>
                                <label className='field__label' htmlFor="employment">Job Type *</label>
                                <select className='field__input' id="employment" name="employment" required>
                                    <option value="full-time">Full-time</option>
                                    <option value="freelance">Freelance</option>
                                    <option value="internship">Internship</option>
                                    <option value="contract">Volunteer</option>
                                </select>
                            </div>
                        </div>
                        <div className='job-details__form-top'>
                            <div className='field'>
                                <label className='field__label' htmlFor="category">Job Category *</label>
                                <select className='field__input' id="category" name="category" required>
                                    <option value="full-time">Software Engineering</option>
                                    <option value="part-time">Data</option>
                                    <option value="freelance">Cyber Security</option>
                                    <option value="internship">IT & Network Support</option>
                                    <option value="contract">Cloud Computing</option>
                                    <option value="contract">UX/UI Design</option>
                                    <option value="contract">AI & Robotics</option>
                                    <option value="contract">Tech Sales & Marketing</option>
                                    <option value="contract">QA & Testing</option>

                                </select>
                            </div>
                            <div className='field'>
                                <label className='field__label' htmlFor="preference">Work Preferences</label>
                                <select className='field__input' id="preference" name="preference" required>
                                    <option value="full-time">On-site</option>
                                    <option value="part-time">Remote</option>
                                    <option value="freelance">Hybrid</option>
                                </select>
                            </div>
                        </div>
                        <div className='job-details__form-top'>
                            <div className='field'>
                                <label className='field__label' htmlFor="location">Job Location *</label>
                                <input className='field__input' type="text" id="location" name="location" placeholder="Fort Lauderdale" required />
                            </div>
                            <div className='field'>
                                <label className='field__label' htmlFor="salary">Salary</label>
                                <input className='field__input' type="text" id="salary" name="salary" placeholder="60,000" required />
                            </div>
                        </div>
                        <div className='job-details__form-top'>
                            <div className='field'>
                                <label className='field__label' htmlFor="url">Application URL *</label>
                                <input className='field__input field__input--url' type="text" id="url" name="url" placeholder="URL where candidates should apply (e.g. https://example.com)" required />
                            </div>
                            
                        </div>
                        <div className='job-details__form-bottom'>
                                <div className='field'>
                                    <label className='field__label' htmlFor="description">Job Description / Skills</label>
                                    <textarea className='field__upload' type='text' id='description' name='description' placeholder={'Key Responsabilities\n-Engage with customers to understand their needs and provide tailored product recommendations.\n-Demonstrate Apple products and services, highlighting their features and benefits.\n-Assist in managing inventory and maintaining the visual presentation of products.\n-Participate in sales training sessions to develop and refine your sales techniques.\n-Gather customer feedback to improve sales strategies and product offerings.'}>
                                    </textarea>
                                </div>
                            </div>
                    </div>
                </div>
                <button className='button'>Post Job</button>
            </div>

        </div>
    );
}

export default Admin;