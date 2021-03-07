import React from "react";
import useBankCounter from "./hooks/useBankCounter";
import BankCounter from "./components/BankCounter";
import WaitArea from "./components/WaitArea";
import "./App.scss";
import initState from "./shared/initState";

const { initCounterList, initWaitInfo } = initState;
const App = () => {
  const { waitInfo, bankInfo, addWaitingList } = useBankCounter({
    initCounterList,
    initWaitInfo,
  });
  return (
    <div className="App">
      <div className="bank-content">
        <BankCounter bankInfo={bankInfo} />
        <WaitArea waitInfo={waitInfo} addWaitingList={addWaitingList} />
      </div>
    </div>
  );
};

export default App;
