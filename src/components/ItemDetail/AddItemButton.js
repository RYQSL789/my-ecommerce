                                     import { Button } from 'react-bootstrap';

const AddItemButton = ({ handleAdd }) => {
  return (
    <Button 
      variant="primary" 
      size="lg" 
      onClick={handleAdd}
      className="w-100 mt-3"
    >
      Confirmar y Agregar
    </Button>
  );
};

export default AddItemButton;