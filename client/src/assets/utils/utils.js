export function formatCurrency(value, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

export function formatToTwoDecimalPoints(value) {
    return value.toFixed(2);
}

export function timeAgo(postingDate) {
    const now = new Date();
    const postedDate = new Date(postingDate);
    const diffInSeconds = Math.floor((now - postedDate) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;
    const secondsInMonth = 30 * secondsInDay;
    const secondsInYear = 12 * secondsInMonth;

    if (diffInSeconds < secondsInMinute) {
        return "just now";
    } else if (diffInSeconds < secondsInHour) {
        const minutes = Math.floor(diffInSeconds / secondsInMinute);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInDay) {
        const hours = Math.floor(diffInSeconds / secondsInHour);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInMonth) {
        const days = Math.floor(diffInSeconds / secondsInDay);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInYear) {
        const months = Math.floor(diffInSeconds / secondsInMonth);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(diffInSeconds / secondsInYear);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}

export function filterPostings(jobPostings, selectedFilters) {

    const filteredData = jobPostings.filter(posting => {
        let jobPosition, jobType, salaryRange, jobLocation = false;

        if (!selectedFilters.selectedCategory) {
            jobPosition = true
        } else {
            jobPosition = filterByJobCategory(posting, selectedFilters.selectedCategory);
        }

        if (selectedFilters.jobType.size === 0) {
            jobType = true;
        } else {
            jobType = filterByJobType(posting, selectedFilters.jobType)
        }

        if (!posting.positionSalary) {
            salaryRange = true;
        } else {
            if (selectedFilters.salaryRange.length === 0) {
                salaryRange = true;
            } else {
                salaryRange = filterBySalaryRange(posting, selectedFilters.salaryRange);
            }
        }

        if (selectedFilters.jobLocation.size === 0) {
            jobLocation = true;
        } else {
            jobLocation = filterByJobLocation(posting, selectedFilters.jobLocation);
        }

        return jobPosition && jobType && salaryRange && jobLocation;
    })

    return filteredData;
}

export function countPostingsByCategory(jobPostings, category) {
    const countPostings = jobPostings.reduce((count, job) => {
        if (job.jobCategory === category) {
            return count + 1;
        }
        return count;
    }, 0);

    let formattedCount;

    if (countPostings === 1) {
        return '1 Opening'
    } else {
        return `${countPostings} Openings`
    }
}

function filterByJobCategory(jobPosting, category) {
    return jobPosting.jobCategory === category;
}

function filterByJobType(jobPosting, jobTypeFilters) {
    let type = false;

    for (const filter of jobTypeFilters) {
        if (filter === jobPosting.jobType) {
            type = true;
            break;
        }
    }

    return type;
}

function filterBySalaryRange(jobPosting, salaryRange) {
    const minValue = salaryRange[0];
    const maxValue = salaryRange[1];

    return (jobPosting.positionSalary > minValue) && (jobPosting.positionSalary < maxValue);
}

function filterByJobLocation(jobPosting, jobLocationFilters) {
    let location = false;

    for (const filter of jobLocationFilters) {
        if (filter === jobPosting.jobLocationType) {
            location = true;
            break;
        }
    }

    return location;
}