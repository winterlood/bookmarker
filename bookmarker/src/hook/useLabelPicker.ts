import {apptypes} from '@apptypes';
import {useState} from 'react';
const useLabelPicker = (initialValue?: apptypes.LabelItem[]) => {
  const [labelList, setLabelList] = useState<apptypes.LabelItem[]>(
    initialValue || [],
  );

  const add = (label: apptypes.LabelItem) => {
    const newLabelList = labelList.slice();
    newLabelList.push({...label});
    setLabelList(newLabelList);
  };

  const remove = (targetIdx: number) => {
    const newLabelList = labelList.slice();
    newLabelList.splice(targetIdx, 1);
    setLabelList(newLabelList);
  };

  return {labelList, add, remove, setLabelList};
};
export default useLabelPicker;
