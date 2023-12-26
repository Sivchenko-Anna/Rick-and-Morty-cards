import axios from "axios";
import normalizeData from "../utils/normalize_data";

export function getData() {
  const result = axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => normalizeData(response.data));

  return result;
}
