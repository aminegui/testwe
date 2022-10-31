import axiosClient from '../../../../../axios/axios';
import { PersonnageEndpoint } from '../endpoints/personnage.endpoints';
import { Personnage } from '../types/personnage.types';
export const PersonnageFetchers = {
  getpersonnage: async (id: string) => {
    const res = await axiosClient.get<Personnage>(
      PersonnageEndpoint.GET_PERSONNAGE(id)
    );

    return res.data;
  },
};
