import { Department } from './department';
import { Languages } from './language';
import { RankType } from './rank';

export interface QuestionStateProps {
  questions: QuestionType[];
  pageCount: number;
  currentPage: number;
  total?: number;
  error: object | string | null;
}

export interface Payload {
  id?: string | number;
  params?: QuestionType;
  callback?: (response: any) => void;
}

export type QuestionFilter = {
  search?: string;
  rank_id?: number | string;
  department_id?: number | string;
  language_id?: number | string;
  type?: number | string;
  status?: number | string;
  currentPage: number;
  limit?: number;
};

export type SortStatusProps = {
  value?: any;
  label: string;
};

export type QuestionType = {
  id?: number;
  candidate_id?: number;
  rank_id?: number | string;
  department_id?: number | string;
  language_id?: number | string;
  question_content?: string;
  type?: number | string;
  status: number | string;
  language?: Languages;
  rank?: RankType;
  department?: Department;
  answer?: string;
  rankName?: string;
  languageName?: string;
  created_at?: string;
  updated_at?: string;
};

export type SelectProps = {
  value?: any;
  label: string;
};
