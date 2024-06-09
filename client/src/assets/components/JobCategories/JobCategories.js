import './JobCategories.scss';
import { jobCategories } from '../../data/data';

export default function JobCategories() {
    return (
        <section className='job__categories categories'>
            <h2 className='categories__heading categories__card'>Jobs Categories</h2>
            {
                jobCategories.map((category) => (
                    <div 
                        key={category.id}
                        className='categories__card'
                    >
                        <span>{category.category}</span>
                        <span>3 Opening</span>
                    </div>
                ))
            }
        </section>
    )
}