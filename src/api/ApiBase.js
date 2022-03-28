import axios from 'axios'

/**
 * BitBucket API
 */
export const bitBucketApi = new axios({
    baseURL: "https://api.bitbucket.org/2.0/",
})

/**
 * JIRA API
 */
export const jiraApi = new axios({
    baseURL: "https://yanapiidxer.atlassian.net/rest/api/2/",
})
