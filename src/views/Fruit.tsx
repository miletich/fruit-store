import H from '../components/H';
import Img from '../components/Img';
import P from '../components/P';
import Price from '../components/Price';
import { Datum } from '../utils/data';

type Props = Pick<Datum, 'fruit' | 'icon' | 'description' | 'price'>;
export default function Fruit({ fruit, icon, description, price }: Props) {
  return (
    <div className="flex my-4 gap-6">
      <Img
        src={icon}
        className="w-[130px] h-[130px] rounded-lg object-cover"
        alt={fruit}
      />
      <div className="flex flex-col flex-1">
        <H role="h5">{fruit}</H>
        <P>{description}</P>
        <Price className="mt-auto" price={price} />
      </div>
    </div>
  );
}
