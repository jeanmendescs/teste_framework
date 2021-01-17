const commonHeader = [
  {
    key: "id",
    name: "Id",
  },
  {
    key: "userName",
    name: "User Name",
  },
  {
    key: "title",
    name: "Title",
  },
];

export const albumsHeader = commonHeader;

export const postsHeader = [
  ...commonHeader,
  {
    key: "body",
    name: "Body",
  },
];

export const todosHeader = [
  ...commonHeader,
  {
    key: "completed",
    name: "Completed",
  },
];
