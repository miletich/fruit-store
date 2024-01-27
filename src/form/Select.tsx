import * as SelectPrimitive from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

import { type Control, Controller } from 'react-hook-form';
import { FieldWrapper } from './FieldWrapper';
import type { FormSchema, FormFieldProps } from './schema';
import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { requiredMessage } from '../utils/consts';
import { useCountries } from '../context/CountriesContext';

type OptionProps = ComponentProps<'div'> & { value: string };
export const Option = forwardRef<HTMLDivElement, OptionProps>(function Option(
  { value, children, ...rest },
  ref
) {
  return (
    <SelectPrimitive.Item
      className="flex items-center justify-between bg-purple-700 hover:bg-purple-800 focus:bg-purple-900 font-semibold p-2 
      first-of-type:rounded-t-lg last-of-type:rounded-b-lg text-sm text-white focus:outline-none focus:ring-0"
      value={value}
      {...rest}
      ref={ref}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

type SelectProps = Pick<
  FormFieldProps,
  'name' | 'label' | 'error' | 'placeholder'
> &
  PropsWithChildren<{
    control: Control<FormSchema>;
  }>;

export function Select({
  name,
  label,
  control,
  error,
  placeholder,
  children,
}: SelectProps) {
  const countries = useCountries();
  const errorId = `${name}-error`;

  return (
    <Controller
      control={control}
      name={name as 'tab' | 'country'}
      render={({ field: { ref, ...restField } }) => {
        const val = restField.value;
        const country = countries?.find((c) => c.id === val);

        return (
          <FieldWrapper
            key={restField.value}
            name={name}
            label={label}
            errorId={errorId}
            errorMessage={error?.message && requiredMessage}
          >
            <SelectPrimitive.Root
              onValueChange={restField.onChange}
              {...restField}
            >
              <SelectPrimitive.Trigger
                ref={ref}
                className="flex items-center justify-between bg-purple-700 hover:bg-purple-700/50 font-semibold p-2 rounded-lg text-sm text-white focus:outline-none focus:ring-0 focus:outline-purple-600 focus:outline-offset-0"
              >
                <SelectPrimitive.Value placeholder={placeholder}>
                  {/* quick hack to display emojis, wouldn't do this in prod */}
                  {name === 'country'
                    ? `${country?.emoji} ${country?.name}`
                    : val}
                </SelectPrimitive.Value>
                <SelectPrimitive.Icon>
                  <ChevronDownIcon />
                </SelectPrimitive.Icon>
              </SelectPrimitive.Trigger>

              <SelectPrimitive.Portal>
                <SelectPrimitive.Content>
                  <SelectPrimitive.ScrollUpButton>
                    <ChevronUpIcon />
                  </SelectPrimitive.ScrollUpButton>
                  <SelectPrimitive.Viewport>
                    {children}
                  </SelectPrimitive.Viewport>
                  <SelectPrimitive.ScrollDownButton>
                    <ChevronDownIcon></ChevronDownIcon>
                  </SelectPrimitive.ScrollDownButton>
                </SelectPrimitive.Content>
              </SelectPrimitive.Portal>
            </SelectPrimitive.Root>
          </FieldWrapper>
        );
      }}
    ></Controller>
  );
}
