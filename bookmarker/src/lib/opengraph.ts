import {apptypes} from '@apptypes';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
// @ts-ignore
import JSSoup from 'jssoup';
export const getOpenGraphData = async (
  url: string,
): Promise<apptypes.BookmarkItem> => {
  const requestUrl = url || 'https://adcash.com';
  const res = await axios(requestUrl);
  var soup = new JSSoup(res.data, false);
  var meta = soup.findAll('meta');

  var resObj: any = {};
  var title = soup.find('title');
  resObj['title'] = title.text;
  resObj['favicon'] = `https://icons.duckduckgo.com/ip2/${
    requestUrl.split('//')[1]
  }.ico`;
  meta.forEach((elm: any) => {
    const propertyName = elm.attrs['property'];

    if (propertyName) {
      const content = elm.attrs['content'];
      resObj[propertyName] = content;
    }
  });

  return {
    site: url,
    title: resObj['title'],
    favicon: resObj['favicon'],
    image: resObj['og:image'],
    description: resObj['description'] || resObj['og:description'],
  };
};
