import axios from "./axios";

export default async function getAllMatches() {
  try {
    const res = await axios.get("/api/scheduleRoutes/match-schedule");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
