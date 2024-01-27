import { type ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Root = forwardRef<HTMLTableElement, ComponentProps<'table'>>(
  function TableRoot({ className = '', children, ...rest }, ref) {
    return (
      <table
        ref={ref}
        className={twMerge('border-collapse', className)}
        {...rest}
      >
        {children}
      </table>
    );
  }
);

export const Tbody = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<'tbody'>
>(function TableBody({ className = '', children, ...rest }, ref) {
  return (
    <tbody ref={ref} className={className} {...rest}>
      {children}
    </tbody>
  );
});

export const Thead = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<'thead'>
>(function TableHeader({ className = '', children, ...rest }, ref) {
  return (
    <thead ref={ref} className={twMerge('font-semibold', className)} {...rest}>
      {children}
    </thead>
  );
});

export const Tr = forwardRef<HTMLTableRowElement, ComponentProps<'tr'>>(
  function TableRow({ className = '', children, ...rest }, ref) {
    return (
      <tr
        ref={ref}
        className={twMerge('odd:bg-purple-700 bg-purple-650', className)}
        {...rest}
      >
        {children}
      </tr>
    );
  }
);

export const Th = forwardRef<HTMLTableCellElement, ComponentProps<'th'>>(
  function TableHead({ className = '', children, ...rest }, ref) {
    return (
      <th ref={ref} className={twMerge('py-1 px-2', className)} {...rest}>
        {children}
      </th>
    );
  }
);

export const Td = forwardRef<HTMLTableCellElement, ComponentProps<'td'>>(
  function TableCell({ className = '', children, ...rest }, ref) {
    return (
      <td
        ref={ref}
        className={twMerge(' text-white text-center m-0', className)}
        {...rest}
      >
        {children}
      </td>
    );
  }
);
