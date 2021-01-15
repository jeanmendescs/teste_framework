const commonHeader = [
  {
    key: "userId",
    name: "User Id",
  },
  {
    key: "id",
    name: "Id",
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
