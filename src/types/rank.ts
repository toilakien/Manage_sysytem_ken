// PROJECT IMPORTS

export interface RankStateProps {
  ranks: RankType[];
  pageCount: number;
  currentPage: number;
  error: object | string | null;
}

export type RankFilter = {
  search?: string;
  status?: string;
  id?: string;
  currentPage: number;
};

export type SortStatusProps = {
  value?: any;
  label: string;
};

export type RankType = {
  id?: string | number;
  name?: string;
  description?: string;
  status?: number;
  created_at?: Date;
  updated_at?: Date;
};

export type SelectProps = {
  value?: any;
  label: string;
};
