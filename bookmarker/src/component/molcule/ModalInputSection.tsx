import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

type Element = JSX.Element | JSX.Element[];
type Props = {
  extraStyle?: StyleProp<ViewStyle>;
  header?: {
    headTypo?: string;
    headRight?: {
      text: string;
      onPress: Function;
    };
  };
  body?: Element;
};

const ModalInputSection = (props: Props) => {
  return (
    <View style={[style.container, props.extraStyle]}>
      {props.header && (
        <View style={style.head}>
          <Text style={style.head_typo}> {props.header.headTypo}</Text>

          <TouchableOpacity
            style={style.head_btn}
            onPress={() => props.header?.headRight?.onPress}>
            <Text style={style.head_typo}>{props.header.headRight?.text}</Text>
          </TouchableOpacity>
        </View>
      )}
      {props.body}
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  head_typo: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
  },
  head_btn: {
    paddingLeft: 20,
    paddingVertical: 5,
  },
});

export default ModalInputSection;
