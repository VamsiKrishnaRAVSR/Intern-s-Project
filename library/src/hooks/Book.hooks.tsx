import { useMemo } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { useNavigate } from "react-router-dom";

import { BOOK_QUERY_CONSTANTS } from "../constants/queryConstants";
import {
  createBook,
  deleteBook,
  getBookHistory,
  getBooks,
  updateBook,
  updateMockData,
} from "../services/book.services";
import { Book, BookDetailsList } from "../types/book.types";

export const useCreateBook = () => {
  const queryClient: any = useQueryClient();
  return useMutation((data: Book) => createBook(data), {
    onSuccess: (data) => {
      queryClient.setQueriesData(
        [BOOK_QUERY_CONSTANTS.GET_BOOKS],
        (oldData: BookDetailsList[]) => {
          return [...oldData, data.data];
        }
      );
    },
  });
};

export const useGetBooks = () => {
  return useQuery([BOOK_QUERY_CONSTANTS.GET_BOOKS], () => getBooks());
};

export const useUpdateBook = () => {
  const queryClient: any = useQueryClient();
  return useMutation((data: Book) => updateBook(data), {
    onSuccess: (data, variables) => {
      const updatedVariables = updateMockData(variables);
      queryClient.setQueriesData(
        [BOOK_QUERY_CONSTANTS.GET_BOOKS],
        (oldData: BookDetailsList[] | undefined) => {
          const updatedData = oldData?.map((ele: BookDetailsList) => {
            if (String(ele.id) === String(variables.id)) {
              return updatedVariables;
            } else {
              return ele;
            }
          });
          return updatedData;
        }
      );
    },
  });
};

export const useGetBook = (id: string) => {
  const { data } = useGetBooks();

  const requiredBookDetails = useMemo(() => {
    if (data && id) {
      return data.filter(
        (ele: BookDetailsList) => String(ele.id) === String(id)
      );
    }
  }, [data, id]);
  const p = requiredBookDetails[0];
  return p;
};

export const useDeleteBook = () => {
  const navigate = useNavigate();
  const queryClient: any = useQueryClient();
  return useMutation((id) => deleteBook(id), {
    onSuccess: (data, variables) => {
      console.log(variables);
      queryClient.setQueriesData(
        [BOOK_QUERY_CONSTANTS.GET_BOOKS],
        (oldData: BookDetailsList[]) => {
          return oldData.filter(
            (ele: BookDetailsList) => String(ele) !== String(variables)
          );
        }
      );
      navigate("/book");
    },
  });
};

export const useGetBookHistory = () => {
  return useQuery([BOOK_QUERY_CONSTANTS.GET_BOOK_HISTORY], () =>
    getBookHistory()
  );
};
