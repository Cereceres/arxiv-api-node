const assert = require('assert')

const {query} = require('../index')


describe('test to arxiv api', function () {
    it('should return the response in body', async () => {
        const res = await query('all:electron')
        assert(res)
    })
})