// import axiosPublic from "./api";
export const getAllCardsForSale = async ({ queryKey }) => {
  const endpoint = "cards/marketplace";
  console.log("GET (All Cards for Sale) queryKey: ", queryKey);
  const [, axiosPrivate] = queryKey;

  const response = await axiosPrivate.get(`/${endpoint}`);
  return response.data;
};

export const getAllPlayers = async ({ queryKey }) => {
  const endpoint = "players";
  console.log("GET (All Players for Leaderboard) queryKey: ", queryKey);
  const [, axiosPrivate] = queryKey;

  const response = await axiosPrivate.get(`/${endpoint}`);
  return response.data;
};

export const createPurchase = async ({ queryKey }) => {
  const endpoint = "marketplace";
  console.log("POST (Create Purchase Event Entry Marketplace): ", queryKey);
  const [queryId, axiosPrivate, queryProps] = queryKey;

  const response = await axiosPrivate.post(`/${endpoint}`, queryProps);
  return response.data;
};

export const deletePurchase = async ({ queryKey }) => {
  const endpoint = "marketplace";
  const [, axiosPrivate, sellerId] = queryKey;

  console.log("DELETE (Purchase Events Entry)");
  const response = await axiosPrivate.delete(`/${endpoint}/${sellerId}`);
  return response.data;
};

export const removeFromMP = async ({ queryKey }) => {
  const endpoint = "cards";
  const [, axiosPrivate, cardId] = queryKey;

  console.log("DELETE (Purchase Events Entry)");
  const response = await axiosPrivate.put(`/${endpoint}/${cardId}`, {
    in_mp: false,
  });
  return response.data;
};

export const getSoldCards = async ({ queryKey }) => {
  const endpoint = "marketplace";
  const [, axiosPrivate, sellerId] = queryKey;

  console.log("GET (Player Sold Cards)");
  const response = await axiosPrivate.get(`/${endpoint}/${sellerId}`);
  return response.data;
};
