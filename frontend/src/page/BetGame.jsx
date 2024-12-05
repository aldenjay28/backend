import React, { useState } from "react";
import { placeBet, getWalletBalance } from "../api/api";

function BetGame() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [balance, setBalance] = useState(null);

  const handleBet = async () => {
    try {
      const { data } = await placeBet({ amount, game_type: "simple" });
      setResult(data.result);
      fetchBalance();
    } catch (error) {
      alert("Bet failed.");
    }
  };

  const fetchBalance = async () => {
    const { data } = await getWalletBalance();
    setBalance(data.balance);
  };

  return (
    <div className="p-6 bg-lightBg dark:bg-darkBg min-h-screen">
      <h1 className="text-2xl mb-4">Bet Game</h1>
      <div>
        <p>Your Balance: {balance ?? "Loading..."}</p>
        <button onClick={fetchBalance} className="btn-secondary mb-4">
          Refresh Balance
        </button>
      </div>
      <input
        type="number"
        placeholder="Bet Amount"
        className="input"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleBet} className="btn-primary mt-4">Place Bet</button>
      {result && <p className="mt-4">Game Result: {result}</p>}
    </div>
  );
}

export default BetGame;
