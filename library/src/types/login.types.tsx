export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  request_id: string;
  error_code: number;
  error_description: string;
  data: {
    login_token: string;
  };
}

export interface LoginFailureResponse {
  request_id: string;
  error_code: number;
  error_description: string;
  data: null;
}
