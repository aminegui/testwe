import { PersonnageFetchers } from '../../api/fetchers/personnageFetchers';

export const getPersonnagesList = async (ids: string[]) => {
  let personnages: string[] = [];
  for (let id of ids) {
    const personnage = await PersonnageFetchers.getpersonnage(id);
    personnages.push(personnage.name);
  }
  return { personnages };
};
