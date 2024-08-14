export const getMonuments = async (path: string): Promise<Response> => {
  const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}${path}`);

  return (await apiResponse.json()) as Response;
};
