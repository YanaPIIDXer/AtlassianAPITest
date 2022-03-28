import axios from 'axios'

/**
 * BitBucket API
 */
export const bitBucketApi = axios.create({
    baseURL: "https://api.bitbucket.org/2.0/",
})

/**
 * JIRA API
 */
export const jiraApi = axios.create({
    baseURL: "https://yanapiidxer.atlassian.net/rest/api/2/",
})
