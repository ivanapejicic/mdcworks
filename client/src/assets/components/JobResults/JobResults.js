import './JobResults.scss';
import CircleSpinner from '../CircleSpinner/CircleSpinner';
import PostingCard from '../PostingCard/PostingCard';
import { Pagination } from "antd";
import { useState } from 'react';

export default function JobResults({ jobPostings, loading, selectedCategory }) {

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const numberEntries = jobPostings.length;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = jobPostings.slice(indexOfFirstItem, Math.min(indexOfLastItem, jobPostings.length));

    const handlePagination = (page, pageSize) => {
        setCurrentPage(page);
        setItemsPerPage(pageSize);
    }

    return (
        <section className='job__results results'>
            {
                loading && <CircleSpinner loading={loading} />
            }
            <h2 className='results__heading'>{`${(selectedCategory) ? `${selectedCategory} Job Postings` : 'All Postings'}`}</h2>
            <div className='results__postings-container'>
                {
                    currentItems.map((posting, index) => (
                        <PostingCard key={index} posting={posting} />
                    ))
                }
            </div>
            <div className='results__pagination'>
                <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    onChange={handlePagination}
                    total={numberEntries}
                />
            </div>
        </section>
    )
}