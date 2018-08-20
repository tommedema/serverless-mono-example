import { fetchRandomNumber } from '../src'

describe('random', () => {
  it('should fetch a random number', async () => {
    const number = await fetchRandomNumber()

    if (typeof number !== 'number') {
      throw new Error('did not return a number')
    }
  })
})