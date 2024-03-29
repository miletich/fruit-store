import Button from '../components/Button';
import { useDataApi } from '../context/DataContext';
import AddDialog from './AddDialog';
import DeleteDialog from './DeleteDialog';

export default function MainMenu() {
  const { fetchData } = useDataApi();

  return (
    <div className="flex gap-3 w-1">
      <Button className="min-w-[76px]" onClick={fetchData}>
        Load
      </Button>
      <AddDialog />
      <DeleteDialog />
    </div>
  );
}
