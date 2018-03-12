const request = require('request')
const {promisify} = require('util')
const get = promisify(request.get.bind(request))


const uri = 'http://export.arxiv.org/api'

exports.query = ({
    search_query,
	id_list,
	start,
	max_results
}) => get({
    uri: uri+'/query',
    qs:{
        search_query,
        id_list,
        start,
        max_results
    }
})
    .then(({body})=> body)