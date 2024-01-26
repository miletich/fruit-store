import { type ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'button'>;

export default forwardRef<HTMLButtonElement, Props>(function CloseButton(
  { className = '', ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      aria-label="close"
      className={twMerge(
        'p-0.5 rounded-full hover:bg-purple-600 active:bg-purple-400 inline-flex justify-center items-center w-6 h-6 absolute top-4 right-4',
        className
      )}
      {...rest}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="white"
      >
        <path
          d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  );
});
