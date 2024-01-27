import { useForm } from 'react-hook-form';

import * as Dialog from '../components/Dialog';
import Button from '../components/Button';
import Form from '../form/Form';
import { type FormSchema, formSchema } from '../form/schema';
import { Input } from '../form/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextArea } from '../form/TextArea';
import { Select, Option } from '../form/Select';
import { useEffect } from 'react';
import { ImageUpload } from '../form/ImageUpload';

export default function AddDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,
    reset,
    setFocus,
    getValues,
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
  console.log({ errors, vals: getValues() });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  useEffect(() => {
    isSubmitSuccessful && reset();
  });

  useEffect(() => {
    if (errors.tab) {
      setFocus('tab');
    }
  }, [errors, setFocus]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="min-w-[76px]">Add</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>Add Fruit</Dialog.Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Select
                name="tab"
                label="Tab"
                placeholder="Please select a tab..."
                control={control}
                error={errors.tab}
              >
                <Option value="Hot">Hot</Option>
                <Option value="New">New</Option>
                <Option value="Recommended">Recommended</Option>
              </Select>
              <Input
                name="fruit"
                label="Fruit"
                type="string"
                register={register}
                error={errors.fruit}
              />
              <Input
                name="country"
                label="Country"
                type="string"
                register={register}
                error={errors.country}
              />
              <ImageUpload
                name="iconFile"
                label="Icon"
                register={register}
                error={errors.iconFile}
                shouldResetPreview={isSubmitSuccessful}
              />
              <Input
                name="iconUrl"
                label="Icon URL"
                type="string"
                placeholder="If you don't have a local picture, please input icon URL."
                register={register}
                error={errors.iconUrl}
              />
              <Input
                name="price"
                label="Price"
                type="number"
                valueAsNumber
                register={register}
                error={errors.price}
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <TextArea
                name="description"
                label="Description"
                register={register}
                error={errors.description}
              />
              <div className="mt-6 text-end">
                <Dialog.Close asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-[120px] bg-purple-800"
                    onClick={() => reset()}
                  >
                    Close
                  </Button>
                </Dialog.Close>
                <Button type="submit" className="ms-4 w-[120px]">
                  Save
                </Button>
              </div>
            </Form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
