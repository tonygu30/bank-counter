import React from "react";
import "./index.scss";
const WaitArea = React.memo(({ addWaitingList, waitInfo }) => {
  return (
    <div className="bank-processing-area">
      <div className="wait-count">等待人數: {waitInfo.list.length}</div>
      <div>
        <button onClick={addWaitingList}>Next {waitInfo.lastNumber}</button>
      </div>
    </div>
  );
});
export default WaitArea;
