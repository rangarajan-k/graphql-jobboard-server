import { getJobs } from "./db/jobs.js";
import { getCompany } from "./db/companies.js"
import moment from 'moment';

export const resolvers = {
    Query: {
        greeting: () => 'Hello world!',
        jobs: () => getJobs()
    },

    Job: {
        date: (job) => moment(job.createdAt).format('DD-MM-YYYY'),
        company: (job) => getCompany(job.companyId)      
    }
};