import axios from "axios";

const API = axios.create({
 baseURL: "http://localhost:8443",
});

export const getPlayers = async () => {
  try {
    const res = await API.get("/footballPlayers");
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const playersLoader = async () => {
  return getPlayers();
};

export const getPlayerById = (id) => {
  return API.get(`/footballPlayers/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(`Error fetching player ${id}:`, err);
      return null;
    });
};

export const playerLoader = async ({ params }) => {
  const { id } = params;
  const player = await getPlayerById(id);

    if (id === '3') {
    throw new Error("Player not found")
   }

  return player;
};