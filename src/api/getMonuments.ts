export const getMonuments = async (path: string): Promise<Response> => {
  const apiResponse = await fetch(`https://monuments-trp.onrender.com/${path}`);

  return (await apiResponse.json()) as Response;
};
