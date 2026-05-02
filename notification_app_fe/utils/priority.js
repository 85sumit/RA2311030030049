const weight = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopN = (notifications, n) => {
  return notifications
    .sort((a, b) => {
      if (weight[b.Type] !== weight[a.Type]) {
        return weight[b.Type] - weight[a.Type];
      }
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, n);
};