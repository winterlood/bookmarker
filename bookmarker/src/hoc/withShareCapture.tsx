import React, {useState, useEffect, useCallback} from 'react';
import {apptypes} from '@apptypes';
import ShareMenu from 'react-native-share-menu';
import {getOpenGraphData} from '../lib/opengraph';
import {isSiteLink} from '../lib/regex';
import {Alert} from 'react-native';
type shareState = apptypes.shareState;
const initState: shareState = {
  isSharedNow: false,
};

const withShareCapture = WrappedComponent => {
  return props => {
    const [shareState, setShareState] = useState<shareState>(initState);

    const handleShare = useCallback(
      async (item: apptypes.SharedItem | null) => {
        var curSharedItem = {
          mimeType: 'text/plain',
          data: 'https://naver.com',
        };

        console.log(curSharedItem);

        // CHECK NOW SHARE
        if (!curSharedItem) {
          setShareState(initState);

          return;
        }

        // COMPREHENSE OBJECT ITEMS
        const {mimeType, data} = curSharedItem;

        // CHECK VALIDATE LINK
        if (mimeType !== 'text/plain' || !isSiteLink(data)) {
          Alert.alert('Only link can be share');
          return;
        }

        // GET OPEN GRAPH DATA
        const openGraphData = await getOpenGraphData(data);

        setShareState({
          isSharedNow: true,
          bookmarkItem: openGraphData,
        });
      },
      [],
    );

    useEffect(() => {
      // @ts-ignore
      ShareMenu.getInitialShare(handleShare);
    }, []);

    useEffect(() => {
      // @ts-ignore
      const listener = ShareMenu.addNewShareListener(handleShare);

      return () => {
        listener.remove();
      };
    }, []);
    return <WrappedComponent shareState={shareState} {...props} />;
  };
};

export default withShareCapture;
