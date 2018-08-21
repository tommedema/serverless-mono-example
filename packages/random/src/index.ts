import camelCase from 'camelcase'

export const fetchRandomNumber = async (): Promise<number> => {
  const randomNr = await new Promise<number>(
    resolve => setTimeout(() => resolve(

      // note that camelCase does not make sense here
      // it is used only to display how external types can be defined
      // at packages/types
      camelCase(
        'a'.repeat(Math.round(Math.random() * 10))
      ).length
    ), 500)
  )

  return randomNr
}