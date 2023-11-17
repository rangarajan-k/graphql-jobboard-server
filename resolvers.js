import { getJobs } from "./db/jobs.js";
import { getCompany } from "./db/companies.js"
import moment from 'moment';

export const resolvers = {
    Query: {
        greeting: () => 'Hello world!',
        jobs: () => getJobs()
    },

    Job: {
        date: (job) => getFormattedDate(job.createdAt),
        company: (job) => getCompany(job.companyId)      
    }
};

export function getFormattedDate(date){
    return moment(date).format('YYYY-MM-DD');
}