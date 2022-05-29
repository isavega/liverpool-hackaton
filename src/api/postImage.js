export const postImage = async (data) => {
  let form = new FormData();
  form.append("triangle.obj", new Blob([data]));
  const response = await fetch(
    "http://rent-bike-go.herokuapp.com/upload_upload_code_to_s3_post",
    {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
        Prefer: "return=representation",
      },
      body: form,
    }
  );
  const postResponse = await response.blob();
  return postResponse;
};
