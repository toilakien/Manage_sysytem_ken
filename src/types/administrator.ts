export interface AdministratorStateProps {
  administrator: Administrator[];
  pageCount?: number;
  currentPage?: number;
  error?: any;
}
export interface Administrator {
  _id?: string;
  usename?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
}
