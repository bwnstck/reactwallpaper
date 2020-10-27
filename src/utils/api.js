const accessKey = "p9C-4_bylHIUFqKm9MWtAnFJdl5fNWjBReOAuRys9gI";

export const searchNewPicture = async () => {
  const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
