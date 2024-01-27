import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ImageIcon } from '@radix-ui/react-icons';

import type { FormFieldProps } from './schema';
import { FieldWrapper } from './FieldWrapper';
import Button from '../components/Button';
import Img from '../components/Img';
import P from '../components/P';
import { imgMimeTypes } from '../utils/consts';

type Props = Omit<FormFieldProps, 'valueAsNumber' | 'type'> & {
  shouldResetPreview: boolean;
};

export function ImageUpload({
  placeholder,
  name,
  label,
  register,
  error,
  shouldResetPreview,
}: Props) {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>();
  const errorId = `${name}-error`;
  const uploadButtonLabel = preview ? `Change ${label}` : `Upload ${label}`;
  const {
    ref: registerRef,
    onChange: registerOnChange,
    ...rest
  } = register(name);

  const handleUploadedFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    registerOnChange(e);
    const file = e.target.files![0];
    const urlImage = URL.createObjectURL(file);
    setPreview(urlImage);
  };

  const onUpload: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    hiddenInputRef.current?.click();
  };

  useEffect(() => {
    shouldResetPreview && setPreview(undefined);
  }, [shouldResetPreview]);

  return (
    <FieldWrapper
      name={name}
      label={label}
      errorId={errorId}
      errorMessage={error?.message}
    >
      <div className="flex">
        <Button
          variant="secondary"
          type="button"
          size="sm"
          onClick={onUpload}
          className="w-[120px] font-semibold mb-3"
        >
          {uploadButtonLabel}
        </Button>
        <input
          id={name}
          type="file"
          accept={imgMimeTypes.join(', ')}
          className="invisible w-1"
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={errorId}
          onChange={handleUploadedFile}
          ref={(e) => {
            registerRef(e);
            hiddenInputRef.current = e;
          }}
          {...rest}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-36 rounded-lg text-white/60  bg-purple-900">
        {preview ? (
          <Img
            src={preview}
            alt={`${label} preview`}
            className="w-[130px] h-[130px] rounded-lg object-cover"
          />
        ) : (
          <>
            <ImageIcon className="w-6 h-6 stroke-0" />
            <P>{`${label} preview`}</P>
          </>
        )}
      </div>
    </FieldWrapper>
  );
}
