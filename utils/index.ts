export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'f8d48be894mshc84277c31dcde9dp18617ajsn04601c6735f2',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    }
  )
  const result = await response.json()

  return result
}

export const CalculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50
  const mileageFactor = 0.1
  const ageFactor = 0.05

  const mileageRate = city_mpg * mileageFactor

  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}
