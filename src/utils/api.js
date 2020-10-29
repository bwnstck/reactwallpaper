const accessKey = process.env.REACT_APP_NOT_SECRET_CODE;

export const searchNewPicture = async () => {
  const url = `https://api.unsplash.com/photos/random`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });
  const data = await response.json();
  return data;
};
