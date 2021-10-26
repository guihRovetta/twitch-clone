export const formatViewersCount = (viewersCount: number) => {
  if (viewersCount >= 1000) {
    const formattedNumber = (viewersCount / 1000).toLocaleString('pt-BR', {
      maximumFractionDigits: 1,
    });

    return `${formattedNumber} mil`;
  }

  return viewersCount?.toString();
};
