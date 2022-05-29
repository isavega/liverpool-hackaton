export const postImage = async (data) => {
  let form = new FormData();
  form.append("img_file", data);
  form.append("type", data.type);
  const response = await fetch(
    "https://rent-bike-go.herokuapp.com/upload_code_to_s3",
    {
      method: "POST",
      headers: {
        accept: "application/json"},
      body: form,
    }
  );
  const postResponse = await response.json();
  return postResponse;
};
