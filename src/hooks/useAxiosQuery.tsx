import axios from "axios";
import { useQuery } from "react-query";

const axiosInstance = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/",
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
