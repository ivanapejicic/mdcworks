import './Admin.scss';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import { TiUpload } from "react-icons/ti";
import { IoBagRemoveOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { CiCirclePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaUpload } from "react-icons/fa"; 

function Admin() {
    return (
        <div className='admin'>
            <HeaderAdmin />
            <div className='admin__body'>
                <h2 className='admin__body-title'>Add New Job</h2>

                <div className='company'>
                    <h3 className='company__title'>Company Details</h3>
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
                                {/* <input className='field__upload'type="file" id="companylogo" name="companylogo" accept="image/png, image/jpeg, image/jpg" multiple /> */}
                                <div
                                    className='field__upload'
                                    ondrop="dropHandler(event);"
                                    ondragover="dragOverHandler(event);">
                                    <TiUpload style={{ width: '2rem', height: '4rem', margin: '.2rem'}}/>
                                    <p className='text'><b>Drop your files here</b></p>
                                    <p className='text'>or click to choose from your device</p>
                                </div>
                                <button className='field__button'>Upload file</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;