import React, { useState, useEffect } from "react";

import { DisplayCards } from "../components";
import { useStateContext } from "../context";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(false);

  const {
    cards,
    isSuccessAllCards,
    isLoadingAllCards,
    isErrorAllCards,
    allCardsError,
    setUserId,
    userId,
    playerAvatar,
  } = useStateContext();

  // const fetchCards = async () => {
  //   setIsLoading(true);
  //   const data = await getCampaigns();
  //   setCampaigns(data);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   if (contract) fetchCampaigns();
  // }, [address, contract]);

  return (
    <>
      {/* {console.log("Cards: ", cards)}
      {console.log("Got Cards Success: ", isSuccessAllCards)}
      {console.log("Are Cards Loading: ", isLoadingAllCards)}
      {console.log("Is there an Error (Cards): ", isErrorAllCards)}
      {console.log("Cards Error: ", allCardsError)} */}
      {isLoadingAllCards && (
        <div>
          <h4 className="text-[white]">Loading...</h4>
        </div>
      )}

      {!isLoadingAllCards && isErrorAllCards && (
        <div>
          <h4 className="text-[white]">This error was received:</h4>
          {/* {console.log(allCardsError)} */}
          <p className="text-[white]">{allCardsError.message}</p>
        </div>
      )}

      {!isLoadingAllCards && isSuccessAllCards && (
        <DisplayCards
          title="Cards For Sale"
          isLoadingAllCards={isLoadingAllCards}
          cards={cards}
          playerAvatar={playerAvatar}
        />
      )}
    </>
  );
};

export default Home;
