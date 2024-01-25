import { PropsWithChildren } from 'react';
import { useCountries } from '../context/CountriesContext';
import H from '../components/H';
import Hr from '../components/Hr';

type Props = PropsWithChildren<{
  id: string;
}>;

export default function CountryGroup({ id, children }: Props) {
  const countries = useCountries();
  const country = countries?.find((el) => el.id === id);

  if (!country) return null;

  return (
    <div className="my-3 flex flex-col">
      <H role="h4">{`${country.emoji} ${country.name}`}</H>
      <Hr className="mt-2 mb-4" />
      {children}
    </div>
  );
}
