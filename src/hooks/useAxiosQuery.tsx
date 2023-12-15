import axios from "axios";
import { useQuery } from "react-query";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const getData = async <T,>(url: string): Promise<T> => {
  const response = await axiosInstance.get<T>(url);
  return response.data;
};

export const useAxiosQueryGet = <T,>(
  queryKey: string | string[],
  url: string
) => {
  return useQuery<T>([queryKey], () => getData<T>(url));
};
