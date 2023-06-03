interface CalculateFlightPrice {
  distanceInKm: number;
  outward: Date;
}

export const calculateFlightPrice = ({
  distanceInKm,
  outward,
}: CalculateFlightPrice) => {
  const minimumPrice = 99.99;

  const dateIntervalInDays = Math.floor(
    (outward.getTime() - new Date().setHours(23, 59)) / 86400000,
  );

  const dateAlg = 1600 - dateIntervalInDays * 135;
  const dateTax = dateAlg > 0 ? dateAlg : 0;

  return +(minimumPrice + distanceInKm * 0.25 + dateTax).toFixed(2);
};
