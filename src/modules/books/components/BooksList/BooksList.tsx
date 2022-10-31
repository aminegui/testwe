import { useRouter } from 'next/router';
import { FC } from 'react';
import { routeNames } from '../../../../routes';
import { convertTimesatmp } from '../../../../../utils/timestampConverter';
import { Card } from '../../../core/components/Card/Card';
import { Book } from '../../api/types/book.types';
import { useDispatch } from 'react-redux';
import { setPersonnagesIdList } from '../../../personnages/redux/personnage.slice';
interface Props {
  books?: Book[];
}
export const BooksList: FC<Props> = ({ books }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 items-center">
      {books?.map(({ isbn, name, released, characters }) => {
        return (
          <Card className="mb-4 p-4 cursor-pointer" key={isbn}>
            <div
              className="flex w-72 md:w-48 h-16 gap-6"
              onClick={() => {
                dispatch(setPersonnagesIdList(characters));
                router.push(routeNames.personnages);
              }}
            >
              <div className="flex flex-col justify-center">
                <h3>{name}</h3>
                <span className="text-[#979797]">
                  {convertTimesatmp(released)}
                </span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
