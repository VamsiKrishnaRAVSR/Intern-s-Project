export interface Book {
  name: string;
  prize: string;
  category: string;
}

//for create, update, GET

export interface BookSuccessResponse {
  request_id: string;
  error_code: number;
  error_description: string;
  data: {
    id: string;
    name: string;
    prize: string;
    category: string;
    status: string; //"available";
    created_by: string; // "admin@test.com";
    created_at: number; //1345679876543454;
    updated_by: string; // "admin@test.com";
    updated_at: number; // 1345679876543454;
  };
}

//for delete

export interface deleteSuccessResponse {
  request_id: string;
  error_code: number;
  error_description: string;
  data: string;
  //   data: {
  //     "book deleted successfully";
  //   };
}

//Book issueing 

export interface getBookHistoryUsers {
  request_id: string;
  error_code: number;
  error_description: string;
  data: [
    {
      Id: string;
      name: string;
      prize: number;
      category: string;
      status: string;
      issued_to: string;
      issued_by: string;
      return_date: number;
    }
  ];
}