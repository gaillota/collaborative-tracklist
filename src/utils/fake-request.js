/* eslint-disable object-curly-newline */

import mocks from './mocked-data'

export const request = (options) => {
    const { endpoint, error, delay = 1000 } = options
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                return reject(error)
            }
            
            const data = mocks[endpoint]
            const response = {
                status: 200,
                data,
            }
            
            resolve(response)
        }, delay)
    })
}
