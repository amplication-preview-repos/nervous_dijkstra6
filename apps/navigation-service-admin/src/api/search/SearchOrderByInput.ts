import { SortOrder } from "../../util/SortOrder";

export type SearchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  query?: SortOrder;
  updatedAt?: SortOrder;
};
