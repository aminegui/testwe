import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PageLayout } from '../../modules/core/components/Layout/PageLayout';
import { getCharacterIdFromUrl } from '../../modules/personnages/api/helpers/personnagesHelpers';
import { PersonnagesList } from '../../modules/personnages/components/PersonnagesList/PersonnagesList';
import { getPersonnagesList } from '../../modules/personnages/components/PersonnagesList/usePersonnagesList';
import { RootState } from '../../store';

const Personnages: FC = () => {
  const [characters, setCharacters] = useState({});
  const personnagesIds = useSelector(
    (state: RootState) => state.personnagesId.personnagesId
  );
  useEffect(() => {
    getPersonnagesList(personnagesIds).then((response) =>
      setCharacters(response)
    );
  }, []);
  return (
    <PageLayout>
      <PersonnagesList personnages={characters.personnages} />
    </PageLayout>
  );
};
export default Personnages;
