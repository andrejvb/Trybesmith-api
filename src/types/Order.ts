export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[]
};

export type OrderWithIdRep = {
  id: number;
  userId: number;
  productIds?: number[];
};

export type OrderResponse = {
  userId: number;
  productIds: number[];
};