import './PostingCard.scss';

import { FaRegBookmark } from "react-icons/fa";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";
import { formatCurrency, formatToTwoDecimalPoints, timeAgo } from './../../utils/utils.js'


export default function PostingCard({ posting }) {
    return (
        <div className='card'>
            <div className='card__header'>
                <div className='card__logo-container'>
                    <img src={posting.companyLogo} alt={`${posting.companyName}'s logo`} />
                </div>
                <div className='card__company-information'>
                    <span>{posting.companyName}</span>
                    <span>{posting.jobCategory}</span>
                </div>
                <FaRegBookmark />
            </div>
            <div className='card__body'>
                <div className='card__description-container'>
                    <span>{posting.jobLocationType}</span>
                    <span>{posting.jobType}</span>
                </div>
                <div className='card__position-information'>
                    <span>
                        <PiCurrencyCircleDollarFill className='dollar-sign' />
                        USD {formatCurrency(posting.positionSalary)}
                    </span>
                    <span>
                        <IoLocationSharp className='location-sign' />
                        {posting.jobPhysicalLocation}
                    </span>
                    <span>
                        <LiaStarSolid className='star-sign' />
                        {formatToTwoDecimalPoints(posting.jobRating)}
                    </span>
                </div>
            </div>
            <div className='card__footer'>
                <span>Posted {timeAgo(posting.jobPostingDate)}</span>
                <a href={`${posting.jobApplicationURL}`}>Apply Now</a>
            </div>
        </div>
    )
}