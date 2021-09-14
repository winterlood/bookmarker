//  ./@types/custom-types/index.d.ts
declare module '@apptypes' {
  export namespace apptypes {
    type SharedItem = {
      mimeType: string;
      data: string;
      extraData?: any;
    };

    type BookmarkItem = {
      site: string;
      title: string;
      favicon: string;
      image: string;
      description: string;
    };

    type AddLabelItem = {
      name: string;
      color: string;
    };
    type LabelItem = {
      id: string;
      name: string;
      color: string;
    };

    type shareState =
      | {isSharedNow: false}
      | {isSharedNow: true; bookmarkItem: apptypes.BookmarkItem};
  }
}
