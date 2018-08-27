import { APIGatewayEventRequestContext, APIGatewayProxyEvent } from 'aws-lambda'
import { fetchRandomNumber } from '../src'

// tslint:disable: no-var-requires
const context = require('./mocks/context.json') as APIGatewayEventRequestContext
const event = require('./mocks/event.json') as APIGatewayProxyEvent

describe('sls random', () => {
  it.skip('should fetch a random number', async () => {
    const response = await fetchRandomNumber(event, context)

    if (response.statusCode !== 200) {
      throw new Error('did not respond with healthy status code')
    }
  })
})
