export interface LogedUser {
  id: number;
  username: string;
  tipos: string[];
  accessToken: string;
  tokenType: string;
}
export interface Contact {
  email: string;
  id: number;
  pessoa: {
    cpf: string;
    endereco: {
      bairro: string;
      cep: string;
      cidade: string;
      estado: string;
      id: number;
      logradouro: string;
      numero: number;
      pais: string;
    };
    foto: {
      id: string;
      name: string;
      type: string;
    };
    id: number;
    nome: string;
  };
  privado: boolean;
  tag: string;
  telefone: string;
  tipoContato: string;
  usuario: {
    cpf: string;
    dataNascimento: string;
    email: string;
    id: number;
    nome: string;
    password: string;
    telefone: string;
    username: string;
  };
}
export interface Person {
  message: string;
  object: {
    cpf: string;
    endereco: {
      bairro: string;
      cep: string;
      cidade: string;
      estado: string;
      id: number;
      logradouro: string;
      numero: number;
      pais: string;
    };
    foto: {
      id: string;
      name: string;
      type: string;
    };
    id: number;
    nome: string;
  };
}
export interface Picture {
  byteArray: string;
  description: string;
  filename: string;
  inputStream: string;
  open: boolean;
  readable: boolean;
  uri: string;
  url: string;
}
export interface User {
  message: string;
  object: {
    tipos: [string];
    usuario: {
      cpf: string;
      dataNascimento: string;
      email: string;
      id: number;
      nome: string;
      password: string;
      telefone: string;
      username: string;
    };
  };
}
