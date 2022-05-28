import http from "./http";

const getPublications = async ({
  id,
  user,
  title,
  created_at,
  adress,
  price,
  available,
  description,
  img_url,
}) => {
  let baseQuery = `character?page=${page}`;
  if (status && status.length >= 1) {
    baseQuery += `&status=${status}`;
  }
  if (species && species.length >= 1) {
    baseQuery += `&species=${species}`;
  }
  if (gender && gender.length >= 1) {
    baseQuery += `&gender=${gender}`;
  }
  if (name && name.length >= 1) {
    baseQuery += `&name=${name}`;
  }
  return http.get(baseQuery);
};

export default getPublications;
