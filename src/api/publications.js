const getPublications = async () => {
  const response = await fetch(
    "https://oymdiutldfewjvmpkgam.supabase.co/rest/v1/available_bikes?select=*",
    {
      headers: {
        apikey: process.env.REACT_APP_API_KEY,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
    }
  );
  const data = await response.json();
  return data;
};

export default getPublications;
