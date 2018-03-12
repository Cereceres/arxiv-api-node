const request = require('request')
const {promisify} = require('util')
const get = promisify(request.get.bind(request))


const uri = 'http://export.arxiv.org/api/query'

exports.query = (query) => get({
    uri,
    qs:{
        search_query: query
    }
})
    .then(({body})=> body)