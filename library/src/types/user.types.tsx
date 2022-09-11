// user -> GET and POST
// user/:id -> GET, PATCH, DELETE

// for POST new user
export interface UserProps {
  name: string;
  email: string;
  role_type: string;
}

// for patch(they specified put)
export interface UserDetails {
  name: string;
  password: string;
}

//for patch and create user, response, GET all users
export interface UserResponse {
  request_id: string;
  error_code: number;
  error_description: string;
  data: {
    id: string;
    name: string;
    email: string;
    role_type: string;
    password: string;
    created_by: string;
    created_at: number; //1345679876543454
    updated_by: string;
    updated_at: number; //1345679876543454
  };
}

// for GET /user/<user_id>
export interface GetUserResponse {
  request_id: string;
  error_code: number;
  error_description: string;
  data: {
    id: string;
    name: string;
    email: string;
    role_type: string;
    password: string;
    created_at: number;
    updated_at: number;
  };
}
// for delete user 
export interface DeleteUserResponse {
  request_id: string;
  error_code: number;
  error_description: string;
  data: string;
  //   data: {
  //     string;
  //   };
}

