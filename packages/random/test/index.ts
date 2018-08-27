import { fetchRandomNumber } from '../src'

describe('random', () => {
  it('should fetch a random number', async () => {
    const nr = await fetchRandomNumber()

    if (typeof nr !== 'number') {
      throw new Error('did not return a number')
    }
  })
})
