export const getPublications = async () => {
  const response = await fetch(
    "https://oymdiutldfewjvmpkgam.supabase.co/rest/v1/available_bikes?select=*",
    {
      headers: {
        apikey: process.env.REACT_APP_API_KEY,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
    }
  );
  const getResponse = await response.json();
  return getResponse;
};

export const postPublications = async (data) => {
  console.log("LO QUE VA AL POST:", data);
  const response = await fetch(
    "https://oymdiutldfewjvmpkgam.supabase.co/rest/v1/available_bikes",
    {
      method: "post",
      headers: {
        apikey: process.env.REACT_APP_API_KEY,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        user: data.userName,
        address: data.address,
        price: data.price,
        available: data.available,
        description: data.description,
        title: data.title,
      }),
    }
  );
  const postResponse = await response.json();
  return postResponse;
};
