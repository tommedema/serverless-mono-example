import { APIGatewayProxyEvent, APIGatewayEventRequestContext } from 'aws-lambda'

export const fetchRandomNumber = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
): Promise<string> => {
  console.info(`
    fetchRandomNumber fired with:
    event: ${JSON.stringify(event)}
    context: ${JSON.stringify(context)}
  `)

  const number = Math.random()

  console.log(`
    fetched number: ${number}
  `)

  return `${number}`
}