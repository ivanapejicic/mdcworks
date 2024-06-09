import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import JobCategories from '../../components/JobCategories/JobCategories'
import JobFilters from '../../components/JobFilters/JobFilters'
import JobResults from '../../components/JobResults/JobResults'
import './Jobs.scss'

export default function Jobs() {
    return (
        <>
        <Header />
        <main>
            <Hero />
            <div className='job'>
                <JobCategories className='job__categories' />
                <JobFilters className='job__filters'/>
                <JobResults className='job__results'/>
            </div>
        </main>
        </>
    )
}