export const generateRamdomNumber = (min: number, max: number) => {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
};
