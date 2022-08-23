// PROJECT IMPORTS

export interface Languages {
  id?: number | string;
  name?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  status?: any;
}

export interface SearchValues {
  search: string;
  status: number | string;
  page: number;
  limit: number;
}

export interface Payload {
  id?: string | number | undefined;
  params?: any;
  callback?: (response: any) => void;
}

export type Status = {
  value?: number | string;
  label: string;
};

export interface LanguageStateProps {
  language: Languages[];
  pageCount: number;
  currentPage: number;
  error: object | string | null;
}
