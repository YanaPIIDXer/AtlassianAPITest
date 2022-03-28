import axios from 'axios'
import qs from 'qs'
import { bitBucketApi } from './ApiBase'

/**
 * アクセスキーを取得
 * @param {String} key キー
 * @param {String} secret シークレット
 */
export const fetchAccessKey = (key, secret) => {
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
 * @param {String}} ownerName 
 */
export const fetchRepositories = (ownerName) => {
    return bitBucketApi.get(`repositories/${ownerName}`)
}

/**
 * リポジトリ情報を取得
 * @param {String} ownerName 所有者名
 * @param {String} repositoryName リポジトリ名
 */
export const fetchRepositoryInfo = (ownerName, repositoryName) => {
    return bitBucketApi.get(`repositories/${ownerName}/${repositoryName}`)
}