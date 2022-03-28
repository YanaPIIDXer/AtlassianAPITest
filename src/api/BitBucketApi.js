import { bitBucketApi } from './ApiBase'

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