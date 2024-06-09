import './JobFilters.scss';

import { jobType, jobLocation } from '../../data/data';

export default function JobFilters() {
    return (
        <section className='job__filters filters'>
            <div className='filters__heading-container'>
                <h2>Filters</h2>
                <span>Clear All</span>
            </div>
            <div className='filters__filter-container'>
                <h3>Job Type</h3>
                <div>
                    {
                        jobType.map((type) => (
                            <label key={type.id}>
                                <input className='filters__type-filter' type='checkbox' name='jobType' value={`${type.type}`}/>
                                {type.type}
                            </label>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}