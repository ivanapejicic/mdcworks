import './JobFilters.scss';

import { jobType, jobLocation } from '../../data/data';
import { useState } from 'react';
import { Slider, Switch } from 'antd';

export default function JobFilters() {

    const [disabled, setDisabled] = useState(false);

    const onChange = (checked) => {
        setDisabled(checked);
    };

    const createMarks = (min, max, step) => {
        const marks = {};
        for (let i = min; i <= max; i += step) {
            marks[i] = '';
        }
        return marks;
    };

    const marks = createMarks(0, 10000, 500);

    return (
        <section className='job__filters filters'>
            <div className='filters__heading-container'>
                <h2>Filters</h2>
                <span>Clear All</span>
            </div>
            <div className='filters__sub-section'>
                <h3>Job Type</h3>
                <div className='filters__type-container'>
                    {
                        jobType.map((type) => (
                            <label key={type.id}>
                                <input className='filters__type-filter' type='checkbox' name='jobType' value={`${type.type}`} />
                                {type.type}
                            </label>
                        ))
                    }
                </div>
            </div>
            <div className='filters__sub-section'>
                <h3>Range Salary</h3>
                <Slider
                    range
                    // tooltip={{open: true}}
                    defaultValue={[3000, 6500]}
                    min={0}
                    max={10000}
                    step={500}
                    disabled={disabled}
                    marks={marks}
                />
                <div className='filters__toggle-range'>
                    <span>Disabled:</span>
                    <Switch size="small" checked={disabled} onChange={onChange} />
                </div>
            </div>
        </section>
    )
}