import type { Monument } from "../monument/types";

export const getMonuments = async (): Promise<{ monuments: Monument[] }> => {
  const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}Monuments`);

  const { monuments } = (await apiResponse.json()) as { monuments: Monument[] };

  return { monuments };
};
