import './JobCategories.scss';
import { jobCategories } from '../../data/data';
import { countPostingsByCategory } from '../../utils/utils';

export default function JobCategories({ selectedCategory, updateCategory, jobPostings }) {

    return (
        <section className='job__categories categories'>
            <h2 className='categories__heading categories__card'>Job Categories</h2>
            {
                jobCategories.map((category) => (
                    <div 
                        key={category.id}
                        className={`categories__card ${(selectedCategory === category.category) ? 'active' : ''}`}
                        onClick={() => {updateCategory(category.category)}}
                    >
                        <span>{category.category}</span>
                        <span>{countPostingsByCategory(jobPostings, category.category)}</span>
                    </div>
                ))
            }
        </section>
    )
}