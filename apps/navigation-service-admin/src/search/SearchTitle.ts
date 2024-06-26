import { Search as TSearch } from "../api/search/Search";

export const SEARCH_TITLE_FIELD = "query";

export const SearchTitle = (record: TSearch): string => {
  return record.query?.toString() || String(record.id);
};
