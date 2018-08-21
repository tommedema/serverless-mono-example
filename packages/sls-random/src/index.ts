import { fetchRandomNumber as fetchNumber } from '@org/random'
import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from 'aws-lambda'

export const fetchRandomNumber = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
): Promise<APIGatewayProxyResult> => {
  // tslint:disable-next-line: no-console
  console.info(`
    fetchRandomNumber fired with:
    event: ${JSON.stringify(event)}
    context: ${JSON.stringify(context)}
  `)

  const randomNr = await fetchNumber()

  // tslint:disable-next-line: no-console
  console.log(`
    fetched number: ${randomNr}
  `)

  return {
    body: `Your number is: ${randomNr}`,
    statusCode: 200
  }
}
