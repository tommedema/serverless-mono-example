import { fetchRandomNumber } from '../src'
import { APIGatewayEventRequestContext, APIGatewayProxyEvent } from 'aws-lambda'

const context = require('./mocks/context.json') as APIGatewayEventRequestContext
const event = require('./mocks/event.json') as APIGatewayProxyEvent

describe('sls random', () => {
  it('should fetch a random number', async () => {
    const response = await fetchRandomNumber(event, context)

    if (response.statusCode !== 200) {
      throw new Error('did not respond with healthy status code')
    }
  })
})
