import {apptypes} from '@apptypes';
import React from 'react';
import {View} from 'react-native';
import {useAppStore} from '../../store/AppStore';
type Props = {
  labelPicker: {
    labelList: apptypes.LabelItem[];
    add: (label: apptypes.LabelItem) => void;
    remove: (targetIdx: number) => void;
    setLabelList: React.Dispatch<React.SetStateAction<apptypes.LabelItem[]>>;
  };
};
const LabelPicker = ({labelPicker}: Props) => {
  const {labelList} = useAppStore();

  return <View></View>;
};

export default LabelPicker;
