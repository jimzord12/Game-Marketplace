import React, { useState, useContext, createContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useLocation, useNavigate } from "react-router-dom";
// import Blockie from "react-blockies";

import useAuth from "../hooks/useAuth";
import axios from "../api/api";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {
  getAllCardsForSale,
  getAllPlayers,
  getSoldCards,
  deletePurchase,
} from "../api/apiFns";
// import WalletAvatar from "../components/WalletAvatar";

const LOGIN_URL = "/authNoPwd"; //@Get it from Main App! ✨
// const LOGIN_URL = "/authNoPwd"; //@Get it from Main App! ✨

// import {
//   useAddress,
//   useContract,
//   useMetamask,
//   useContractWrite,
// } from "@thirdweb-dev/react";
// import { ethers } from "ethers";
// import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // const { state } = useLocation();
  const { setAuth, auth } = useAuth(); //@Get it from Main App! ✨

  const [userId, setUserId] = useState(22); //@Get it from Main App! ✨
  const [cards, setCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [players, setPlayers] = useState([]); //@Get it from Main App! ✨
  const [playersMapping, setPlayersMapping] = useState({});
  const [userSoldCards, setUserSoldCards] = useState([]);
  const [playerBalance, setPlayerBalance] = useState(500000);
  const [isActive, setIsActive] = useState("dashboard");

  //@Get it from Main App! ✨
  const axiosPrivate = useAxiosPrivate();

  //@Get it from Main App! ✨
  const playerWallet = "0x9ba3DaC17C4286Fd11133A6d75203598C1c8C84E";
  const testingPlayerName = "test 2";
  // const testingPlayerName = "the collector"

  // #1 - Query - Resolving Authentication
  //@Get it from Main App! ✨
  const {
    isSuccess: isAuthSuccess,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["authentication"],
    queryFn: async () => {
      return axios.post(
        LOGIN_URL,
        JSON.stringify({ name: testingPlayerName }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // Return the response data as the query result
      // return response.data;
    },
    // enabled: false,
    onSuccess: (fetchedData) => {
      console.log("SUCCESSFUL - Got AccessToken (Marketplace): ", fetchedData);
      const accessToken = fetchedData?.data?.aT;
      // const roles = response?.data?.roles;
      console.log("🤩 Got A-JWT from Web Server! Yay! 🤩");
      // console.log("Access Token: ", accessToken);
      setAuth((prev) => {
        return { ...prev, user: testingPlayerName, accessToken };
      });
    },
    onError: (error) => {
      console.error("Failed to fetch access token:", error);
    },
  });

  // #2 - Query - Getting the Cards
  const {
    isSuccess: isSuccessAllCards,
    isLoading: isLoadingAllCards,
    isError: isErrorAllCards,
    error: allCardsError,
    refetch,
  } = useQuery({
    queryKey: ["allCards", axiosPrivate],
    queryFn: getAllCardsForSale,
    enabled: isAuthSuccess && !!auth.accessToken,
    onSuccess: (fetchedData) => {
      console.log("SUCCESSFUL - All Cards (Marketplace): ", fetchedData);
      setCards(fetchedData);
      setPlayerCards(fetchedData.filter((card) => card.ownerId === userId));
    },
  });

  // #3 - Query - Getting all Players
  //@Note: Need to get all the PLayers to map ownerID to ownerName or Wallet
  //@Get it from Main App! ✨
  const {
    isSuccess: isSuccessPlayers,
    isLoading: isLoadingPlayers,
    isError: isErrorPlayers,
    error: PlayersError,
  } = useQuery({
    queryKey: ["allPlayers", axiosPrivate],
    queryFn: getAllPlayers,
    enabled: isSuccessAllCards,
    onSuccess: (fetchedData) => {
      console.log("All Cards (Marketplace): ", cards);
      console.log("PLayer's - Cards (Marketplace): ", playerCards);
      console.log("SUCCESSFUL - All Players (Marketplace): ", fetchedData);
      setPlayers(fetchedData);
      setPlayersMapping((prev) => {
        const formatedPlayers = {};
        fetchedData.forEach((player) => {
          formatedPlayers[`${player.id}`] = player.name;
        });
        return { ...prev, ...formatedPlayers };
      });
    },
  });

  const {
    isSuccess: isSoldCardsSuccess,
    isLoading: isLoadingSoldCards,
    refetch: refetchSoldCards,
    isError: isErrorSoldCards,
    // error,
  } = useQuery({
    queryKey: ["playerSoldCards", axiosPrivate, userId],
    queryFn: getSoldCards,
    retry: 0,
    enabled: isSuccessPlayers && players.length > 0,
    onSuccess: (fetchedData) => {
      console.log(
        "SUCCESSFUL - Got Purchase Events (Marketplace): ",
        fetchedData
      );
      //   setUserSoldCards(findSoldCards(playerCards, fetchedData));
      setUserSoldCards(fetchedData);
    },
    onError: (error) => {
      setUserSoldCards([]);
    },
  });

  const { mutate: removePurchaseEvent, isSuccess: hasCards4Sale } = useMutation(
    {
      mutationFn: deletePurchase,
      onSuccess: (data) => {
        console.log("3 - Success - DELETE: ", data);
        refetchSoldCards();
      },
    }
  );
  console.log("hhhhhhhh: ", removePurchaseEvent);

  return (
    <StateContext.Provider
      value={{
        cards,
        playerCards,
        setCards,
        isSuccessAllCards,
        isLoadingAllCards,
        isErrorAllCards,
        allCardsError,
        setUserId,
        userId,
        players,
        playersMapping,
        setPlayerBalance,
        playerBalance,
        isSuccessPlayers,
        isSoldCardsSuccess,
        playerWallet,
        axiosPrivate,
        refetch,
        userSoldCards,
        refetchSoldCards,
        isLoadingSoldCards,
        setIsActive,
        isActive,
        removePurchaseEvent,
        hasCards4Sale,
        isErrorSoldCards,
      }}
    >
      <>
        {auth.accessToken && isSuccessPlayers ? (
          children
        ) : (
          <h4 className="text-[black] text-2xl font-semibold">
            Loading StateContext
          </h4>
        )}
      </>
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
