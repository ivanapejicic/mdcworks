import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import JobCategories from '../../components/JobCategories/JobCategories'
import JobFilters from '../../components/JobFilters/JobFilters'
import JobResults from '../../components/JobResults/JobResults'
import './Jobs.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Jobs() {

    const [jobPostings, setJobPostings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchPostings = async () => {
            try {
                const results = await axios.get('http://localhost:8080/api/postings/active');
                console.log(results.data);
                setJobPostings(results.data)
                setLoading(false);
            } catch (error) {
                console.log('Cannot fetch data');
            }
        }

        fetchPostings();
    }, [])

    return (
        <>
        <Header />
        <main>
            <Hero />
            <div className='job'>
                <JobCategories className='job__categories' />
                <JobFilters className='job__filters'/>
                <JobResults 
                    className='job__results' 
                    jobPostings={jobPostings}
                    loading={loading}
                />
            </div>
        </main>
        <Footer />
        </>
    )
}