import { APIGatewayProxyEvent, APIGatewayEventRequestContext } from 'aws-lambda'

export const fetchRandomNumber = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
): Promise<{statusCode: number, randomNr: number}> => {
  console.info(`
    fetchRandomNumber fired with:
    event: ${JSON.stringify(event)}
    context: ${JSON.stringify(context)}
  `)

  const randomNr = Math.random()

  console.log(`
    fetched number: ${randomNr}
  `)

  return {
    statusCode: 200,
    randomNr
  }
}