import { Button, ContactStyled } from './Contacts.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactStyled>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </ContactStyled>
  );
};
