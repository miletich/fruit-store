import Button from '../components/Button';

export default function MainMenu() {
  return (
    <div className="flex gap-3 w-1">
      <Button className="min-w-[76px]">Load</Button>
      <Button className="min-w-[76px]">Add</Button>
      <Button className="min-w-[76px]">Delete</Button>
    </div>
  );
}
