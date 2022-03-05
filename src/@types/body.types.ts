/* 
  É a tipagem da requisição vindo do body
*/
export interface IRequestBody {
  name?: string;
  email?: string;
}

export interface ICreateUser {
  name: string;
  email: string;
}
