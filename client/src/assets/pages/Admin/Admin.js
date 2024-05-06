import './Admin.scss';
import Header from '../../components/Header/Header';
import { IoBagRemoveOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { CiCirclePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

function Admin() {
    return (
        <div className='admin-main'>
            <Header />
            <div className='admin'>
                <p className='admin__text'>Signed in as Admin</p>
                <h3 className='admin__welcome'>WELCOME CHRISTIAN ORTEGA</h3>
            </div>
            <div className='stats'>
                <div className='stats__jobs'>
                    <div className='stats__jobs-left'>
                        <p>10</p>
                        <p className='stats__jobs-left__text'>Open Jobs</p>
                    </div>
                    <div className='stats__jobs-right'>
                        <IoBagRemoveOutline />
                    </div>
                </div>
                <div className='stats__students'>
                    <div className='stats__students-left'>
                        <p>850</p>
                        <p className='stats__students-left__text'>Saved Students</p>
                    </div>
                    <div className='stats__students-right'>
                        <GrGroup />
                    </div>
                </div>
            </div>
            <div className='options'>
                <div className='options__add'>
                    <CiCirclePlus className='options__add-icon' />
                    <p className='options__add-text'>ADD NEW JOB</p>
                </div>
                <div className='options__edit'>
                    <CiEdit className='options__edit-icon' />
                    <p className='options__add-text'>EDIT JOB LISTING</p>
                </div>
            </div>
        </div>
    );
}

export default Admin;