import React, { useState } from "react";
import Blockie from "react-blockies";

function WalletAvatar({ walletAddress, scale = 3 }) {
  //   const [walletAddress, setWalletAddress] = useState("");

  return (
    <Blockie
      seed={walletAddress.toLowerCase()}
      size={12}
      scale={scale}
      className="identicon rounded"
    />
  );
}

export default WalletAvatar;
