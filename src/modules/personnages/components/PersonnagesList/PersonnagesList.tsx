import { FC } from 'react';
import { Card } from '../../../core/components/Card/Card';

interface Props {
  personnages?: string[];
}
export const PersonnagesList: FC<Props> = ({ personnages }) => {
  return (
    <Card className="m-5 p-5 flex flex-wrap gap-4">
      {personnages?.map((name, i) => {
        return <h3 key={i}>{name}</h3>;
      })}
    </Card>
  );
};
