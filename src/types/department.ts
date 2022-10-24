import { UserProfile } from './login';
// PROJECT IMPORTS

export interface DepartmentStateProps {
  department: Department[];
  pageCount?: number;
  currentPage?: number;
  error?: DataError[];
  detail?: UserProfile;
}
export interface Payload {
  _id?: string | number;
  params?: Department;
  callback?: (response: any) => void;
}
interface DataError {
  error: {
    errors: string[];
    message: string;
  };
  message: string;
}

export type DepartmentFilter = {
  search?: string;
  status?: number | string;
  currentPage: number;
  limit?: number;
};

export type Department = {
  _id?: string;
  name?: string;
  code?: string;
  active?: string;
  created_at?: string;
  updated_at?: string;
};
export type SelectProps = {
  value?: any;
  label: string;
};
