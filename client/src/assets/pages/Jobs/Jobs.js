import './Jobs.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import JobCategories from '../../components/JobCategories/JobCategories'
import JobFilters from '../../components/JobFilters/JobFilters'
import JobResults from '../../components/JobResults/JobResults'
import { filterPostings } from '../../utils/utils'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Jobs() {

    const [jobPostings, setJobPostings] = useState([]);
    const [filteredPostings, setFilteredPostings] = useState([]);

    //on load, fetch active job postings
    useEffect(() => {
        setLoading(true);
        const fetchPostings = async () => {
            try {
                const results = await axios.get('http://localhost:8080/api/postings/active');
                // console.log(results.data);
                setJobPostings(results.data);
                setFilteredPostings(results.data);
                setLoading(false);
            } catch (error) {
                console.log('Cannot fetch data');
            }
        }

        fetchPostings();
    }, [])

    const [loading, setLoading] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState('');

    const [selectedFilters, setSelectedFilters] = useState({
        selectedCategory: '',
        jobType: new Set(),
        salaryRange: [],
        jobLocation: new Set()
    });

    //update postings when selecting filters
    useEffect(() => {
        if (jobPostings.length === 0) {
            return;
        }

        setLoading(true);

        if (selectedFilters.selectedCategory === '' && selectedFilters.jobType.size === 0 && selectedFilters.salaryRange.length === 0 && selectedFilters.jobLocation.size === 0) {
            setFilteredPostings(jobPostings)
        } else {
            const filtered = filterPostings(jobPostings, selectedFilters);
            setFilteredPostings(filtered);
        }
        
        setLoading(false)
    }, [selectedFilters])

    //update job type and location filters
    const updateCheckboxFilters = (category, filter) => {
        setSelectedFilters((prevFilters) => {
            let updatedFilters = new Set(prevFilters[category]);

            if (updatedFilters.has(filter)) {
                updatedFilters.delete(filter);
            } else {
                updatedFilters.add(filter)
            }

            return { ...prevFilters, [category]: updatedFilters }
        })
    }

    //update job category
    const updateCategory = (category) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            selectedCategory: `${category}`
        }));
        setSelectedCategory(category)
    }

    //update salary range
    const updateSalaryRange = (range) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            salaryRange: range
        }));
    }

    const clearFilters = () => {
        setSelectedFilters({
            selectedCategory: '',
            jobType: new Set(),
            salaryRange: [],
            jobLocation: new Set()
        });
        setSelectedCategory('');
    }

    return (
        <>
            <Header />
            <main>
                <Hero />
                <div className='job'>
                    <JobCategories
                        className='job__categories'
                        selectedCategory={selectedCategory}
                        updateCategory={updateCategory}
                        jobPostings={filteredPostings}
                    />
                    <JobFilters
                        className='job__filters'
                        updateCheckboxFilters={updateCheckboxFilters}
                        updateSalaryRange={updateSalaryRange}
                        selectedFilters={selectedFilters}
                        clearFilters={clearFilters}
                    />
                    <JobResults
                        className='job__results'
                        jobPostings={filteredPostings}
                        loading={loading}
                        selectedCategory={selectedCategory}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}