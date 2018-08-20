export const fetchRandomNumber = async (): Promise<number> => {
  const randomNr = await new Promise<number>(
    resolve => setTimeout(() => resolve(Math.random()), 500)
  )

  return randomNr
}