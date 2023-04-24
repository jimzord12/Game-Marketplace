import React, { useState, useEffect } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { useStateContext } from "../context";
import { DisplayCards } from "../components";
import { getSoldCards } from "../api/apiFns";
import { getSoldCards as findSoldCards } from "../utils";

const Withdraw = () => {
  //   const [userSoldCards, setUserSoldCards] = useState([]);

  const {
    // cards,
    userId,
    // isLoadingAllCards,
    // isSuccessPlayers,
    // playerCards,
    axiosPrivate,
    userSoldCards,
    isLoadingSoldCards,
    hasCards4Sale,
    isErrorSoldCards,
  } = useStateContext();

  // const {
  //   isSuccess: isRemovalSuccess,
  //   isFetching: isRemovalLoading,
  //   isError: isRemovalError,
  //   error: removalError,
  // } = useQuery({
  //   queryKey: ["removeCard", axiosPrivate, selectedCard?.id],
  //   queryFn: removeFromMP,
  //   enabled: isTranSuccess && !!selectedCard.id,
  //   onSuccess: (fetchedData) => {
  //     console.log("SUCCESSFUL - Removed Card (Marketplace): ", fetchedData);
  //   },
  //   onError: (error) => {
  //     console.log("--- FAILED ---- Removed Card (Marketplace): ", error);
  //     // setTranType("failed");
  //   },
  // });

  // const { mutate: removePurchaseEvent } = useMutation({
  //   mutationFn: removeFromMP,
  // });
  // #2 - Query - Getting the Cards
  //   const {
  //     isSuccess,
  //     isLoading: isLoadingSoldCards,
  //     isError,
  //     error,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["playerSoldCards", axiosPrivate, userId],
  //     queryFn: getSoldCards,
  //     enabled: isSuccessPlayers && playerCards.length > 0,
  //     onSuccess: (fetchedData) => {
  //       console.log(
  //         "SUCCESSFUL - Got Purchase Events (Marketplace): ",
  //         fetchedData
  //       );
  //       //   setUserSoldCards(findSoldCards(playerCards, fetchedData));
  //       setUserSoldCards(fetchedData);
  //     },
  //   });

  //   useEffect(() => {}, [isSuccess]);

  return (
    <>
      {userId && (
        <DisplayCards
          title="Your Sold Cards"
          isLoading={isLoadingSoldCards}
          isSuccess={hasCards4Sale}
          isErrorSoldCards={isErrorSoldCards}
          cards={userSoldCards}
          from="withdraw"

          // removePurchaseEvent={removePurchaseEvent}
        />
      )}
    </>
  );
};

export default Withdraw;
