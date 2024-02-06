import axios from "axios";
import pluginId from "../pluginId";

export type PrevNext = {
  prev: {
    id: number;
    name: string;
  } | null;
  next: {
    id: number;
    name: string;
  } | null;
};


const getPrevNext = async (uid: string, id: string): Promise<PrevNext> => {
  const endpoint = `/${pluginId}/prev-next/${uid}/${id}`;
  const { data } = await axios.get(endpoint);
  return data;
}

export default getPrevNext;