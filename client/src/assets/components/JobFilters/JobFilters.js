import './JobFilters.scss';

import { jobType, jobLocation } from '../../data/data';
import { useEffect, useState } from 'react';
import { Slider, Switch } from 'antd';

import debounce from 'lodash.debounce';

export default function JobFilters({ updateCheckboxFilters, updateSalaryRange, clearFilters, selectedFilters }) {

    //set slider default values
    const defaultMinimum = 70000;
    const defaultMaximum = 100000;

    //holds state of range switch
    const [disabled, setDisabled] = useState(true);

    //holds salary range slider values
    const [rangeValues, setRangeValues] = useState([defaultMinimum, defaultMaximum]);

    //update state of range slider
    const onChange = (checked) => {
        setDisabled(checked);
    };

    //disable range switch on clear filters
    const disableRangeSwitch = () => {
        setDisabled(true);
    }

    //update slider values with debounce
    const debouncedUpdateSalaryRange = debounce((values) => {
            updateSalaryRange(values);
    }, 600);

    //update slider values
    const handleSliderChange = (values) => {
        setRangeValues(values);
        debouncedUpdateSalaryRange(values);
    }

    useEffect(() => {
        if (disabled) {
            updateSalaryRange([]);
        } else {
            updateSalaryRange(rangeValues);
        }
    }, [disabled, rangeValues, updateSalaryRange])

    return (
        <section className='job__filters filters'>
            <div className='filters__heading-container'>
                <h2>Filters</h2>
                <span onClick={() => {
                    clearFilters();
                    disableRangeSwitch()
                }}
                >
                    Clear All
                </span>
            </div>
            <div className='filters__sub-section'>
                <h3>Job Type</h3>
                <div className='filters__filter-container'>
                    {
                        jobType.map((type) => (
                            <label key={type.id}>
                                <input
                                    className='filters__type-filter'
                                    type='checkbox'
                                    name='jobType'
                                    value={`${type.type}`}
                                    onChange={() => updateCheckboxFilters('jobType', type.type)}
                                    checked={selectedFilters.jobType.has(type.type) || false}
                                />
                                {type.type}
                            </label>
                        ))
                    }
                </div>
            </div>
            <div className='filters__sub-section'>
                <h3>Salary Range</h3>
                <Slider
                    range
                    defaultValue={[defaultMinimum, defaultMaximum]}
                    min={40000}
                    max={300000}
                    step={500}
                    disabled={disabled}
                    value={rangeValues}
                    onChange={handleSliderChange}
                />
                <div className='filters__toggle-range'>
                    <span>Disabled:</span>
                    <Switch size="small" checked={disabled} onChange={onChange} />
                </div>
            </div>
            <div className='filters__sub-section'>
                <h3>Location</h3>
                <div className='filters__filter-container'>
                    {
                        jobLocation.map((type) => (
                            <label key={type.id}>
                                <input
                                    className='filters__type-filter'
                                    type='checkbox'
                                    name='jobType'
                                    value={`${type.type}`}
                                    onChange={() => updateCheckboxFilters('jobLocation', type.type)}
                                    checked={selectedFilters.jobLocation.has(type.type) || false}
                                />
                                {type.type}
                            </label>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}