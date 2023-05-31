interface CalculateFlightPrice {
  distanceInKm: number;
  outward: Date;
}

export const calculateFlightPrice = ({
  distanceInKm,
  outward,
}: CalculateFlightPrice) => {
  const minimumPrice = 200;

  const dateIntervalInDays =
    (outward.getTime() - new Date().getTime()) / 86400000;

  const dateAlg = 1400 - dateIntervalInDays * 100;
  const dateTax = dateAlg > 0 ? dateAlg : 0;

  return +(minimumPrice + distanceInKm * 0.3 + dateTax).toFixed(2);
};
