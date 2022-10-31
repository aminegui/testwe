export const PersonnageEndpoint = {
  GET_PERSONNAGE: (id: string) => `/api/characters/${id}` as const,
};
