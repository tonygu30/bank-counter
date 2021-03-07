import { useEffect, useState, useCallback } from "react";
import { MIX_TIME_RANGE, MIN_TIME_RANGE } from "../shared/constant";

const addBankCounter = (list) => {
  const counterTable = {};
  list.forEach((item) => {
    counterTable[item] = {
      processedList: [],
      processing: null,
    };
  });
  return counterTable;
};

const useBankCounter = ({ initCounterList, initWaitInfo }) => {
  const [waitInfo, setWaitInfo] = useState(initWaitInfo);
  const [bankInfo, setBankInfo] = useState(addBankCounter(initCounterList));
  const addWaitingList = useCallback(() => {
    setWaitInfo((prev) => {
      const { list, lastNumber } = prev;
      return {
        list: [...list, lastNumber],
        lastNumber: lastNumber + 1,
      };
    });
  }, []);

  const getRandomTime = () =>
    (Math.random() * (MIX_TIME_RANGE - MIN_TIME_RANGE) + MIN_TIME_RANGE) * 1000;

  useEffect(() => {
    const newBankInfo = bankInfo;
    const newWaitList = waitInfo.list;
    if (waitInfo.list.length > 0) {
      Object.keys(newBankInfo)
        .filter((name) => newBankInfo[name].processing === null)
        .some((item) => {
          const currentWaitNumber = newWaitList.shift();
          newBankInfo[item].processing = currentWaitNumber;
          setTimeout(() => {
            setBankInfo((prev) => ({
              ...prev,
              [item]: {
                processing: null,
                processedList: [...prev[item].processedList, currentWaitNumber],
              },
            }));
          }, getRandomTime());
          if (newWaitList.length === 0) return true;
          return false;
        });
      setBankInfo(() => newBankInfo);
      setWaitInfo((prev) => ({ ...prev, list: newWaitList }));
    }
  }, [waitInfo.list, bankInfo]);

  return { waitInfo, bankInfo, addWaitingList };
};

export default useBankCounter;
