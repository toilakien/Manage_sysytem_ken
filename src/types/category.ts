export interface CategoryStateProps {
  category: Category[];
  pageCount?: number;
  currentPage?: number;
  error?: any;
}
export interface Category  {
  _id?: string;
  name?: string;
  img?: string;
  created_at?: string;
  updated_at?: string;
};
