import React from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useInput from '../../hook/useInput';
import useLinkRegex from '../../hook/useLinkRegex';
import ModalInputSection from '../molcule/ModalInputSection';
import LabelPicker from '../molcule/LabelPicker';
import useLabelPicker from '../../hook/useLabelPicker';
type Props = {
  isVisible: boolean;
};

const LinkInput = React.memo(
  ({link, linkValid}: {link: any; linkValid: any}) => {
    return (
      <>
        <ModalInputSection
          extraStyle={style.section}
          header={{headTypo: 'LINK'}}
          body={
            <>
              <TextInput
                {...link}
                placeholderTextColor={'rgb(190,190,190)'}
                style={style.link_input}
                placeholder={'ex> https://www....'}
              />
              {!linkValid && (
                <Text style={style.warn_label}>
                  {
                    'link must start with at least 7 characters, http:// or https:/'
                  }
                </Text>
              )}
            </>
          }
        />
        <ModalInputSection />
      </>
    );
  },
);

const LabelInput = React.memo(({labelPicker}: {labelPicker: any}) => {
  return (
    <>
      <ModalInputSection
        extraStyle={style.section}
        header={{
          headTypo: 'LABELS',
          headRight: {
            text: '+ ADD NEW LABEL',
            onPress: () => {
              console.log('HA');
            },
          },
        }}
        body={<LabelPicker labelPicker={labelPicker} />}
      />
    </>
  );
});

const AddBookmarkModal = (props: Props) => {
  const link = useInput();
  const linkValid = useLinkRegex(link.value);
  const labelPicker = useLabelPicker();
  return (
    <Modal
      animationIn={'bounceIn'}
      animationOut={'bounceInDown'}
      isVisible={props.isVisible}>
      <View style={style.container}>
        <View style={style.head}>
          <Text style={style.head_typo}>Add bookmark</Text>
          <TouchableOpacity
            style={style.close_btn}
            onPress={() => {
              console.log('HO');
            }}>
            <Ionicons style={style.close_btn_icon} name="close" />
          </TouchableOpacity>
        </View>
        <View style={style.body}>
          <LinkInput link={link} linkValid={linkValid} />
          <LabelInput labelPicker={labelPicker} />
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgb(245,245,245)',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  head_typo: {
    fontWeight: 'bold',
  },
  close_btn: {
    paddingLeft: 35,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  close_btn_icon: {
    fontSize: 15,
  },

  body: {},

  link_input: {
    borderColor: 'rgb(240,240,240)',
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    color: 'black',
  },
  warn_label: {
    color: '#e06060',
    fontSize: 12,
  },

  section: {
    marginTop: 25,
  },
});

export default AddBookmarkModal;
