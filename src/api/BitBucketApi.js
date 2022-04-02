import axios from 'axios'
import qs from 'qs'
import { bitBucketApi } from './ApiBase'

/**
 * アクセストークンを取得
 * @param {String} key キー
 * @param {String} secret シークレット
 */
export const fetchAccessToken = (key, secret) => {
    const authInfo = {
        username: key,
        password: secret,
    }
    return new Promise((resolve, reject) => {
        axios({
            url: "https://bitbucket.org/site/oauth2/access_token",
            headers: {
            'content-type': `application/x-www-form-urlencoded`,
            },
            method: "post",
            auth: authInfo,
            data: qs.stringify({
                grant_type: 'client_credentials',
            })
        })
        .then(response => {
            resolve(response.data.access_token)
        })
        .catch(response => reject(response))
    })
}

/**
 * リポジトリリストを取得
 * @param {String} accessToken アクセストークン
 * @param {String}} ownerName 所有者名
 */
export const fetchRepositories = (accessToken, ownerName) => {
    return bitBucketApi.get(`repositories/${ownerName}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    })
}

/**
 * リポジトリ情報を取得
 * @param {String} accessToken アクセストークン
 * @param {String} ownerName 所有者名
 * @param {String} repositoryName リポジトリ名
 */
export const fetchRepositoryInfo = (accessToken, ownerName, repositoryName) => {
    return bitBucketApi.get(`repositories/${ownerName}/${repositoryName}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    })
}

/**
 * プルリクエストリストを取得
 * @param {String} accessToken アクセストークン
 * @param {String} ownerName 所有者名
 * @param {String} repositoryName リポジトリ名
 */
export const fetchPullRequests = (accessToken, ownerName, repositoryName) => {
    return bitBucketApi.get(`repositories/${ownerName}/${repositoryName}/pullrequests`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    })
}

/**
 * プルリクにコメントする
 * @param {String} accessToken アクセストークン
 * @param {String} ownerName 所有者名
 * @param {String} repositoryName リポジトリ名
 * @param {String} pullRequestId プルリクのID
 * @param {String} comment コメント
 */
export const addCommentToPullRequest = (accessToken, ownerName, repositoryName, pullRequestId, comment) => {
    const params = {
        content: {
            raw: comment,
        },
    }
    return bitBucketApi.post(`repositories/${ownerName}/${repositoryName}/pullrequests/${pullRequestId}/comments`, params,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
}
