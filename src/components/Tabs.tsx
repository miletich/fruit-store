import { PropsWithChildren } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

type RootProps = PropsWithChildren<{
  defaultValue: string;
}>;
export function Root({ defaultValue, children }: RootProps) {
  return (
    <Tabs.Root key={defaultValue} defaultValue={defaultValue}>
      {children}
    </Tabs.Root>
  );
}

type ListProps = PropsWithChildren<{
  config: string[];
  ariaLabel: string;
}>;
export function List({ config, ariaLabel }: ListProps) {
  return (
    <Tabs.List aria-label={ariaLabel}>
      {config.map((value) => (
        <Tabs.Trigger
          key={value}
          value={value}
          className="text-purple-300 data-[state=active]:text-white font-semibold bg-purple-900 data-[state=active]:bg-purple-800 py-4 px-6 first:rounded-tl-lg last:rounded-tr-lg"
        >
          {value}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  );
}

type TabProps = PropsWithChildren<{ value: string }>;
export function Tab({ value, children }: TabProps) {
  return (
    <Tabs.Content
      value={value}
      className="bg-purple-800 text-white p-6 rounded-b-lg rounded-tr-lg"
    >
      {children}
    </Tabs.Content>
  );
}
