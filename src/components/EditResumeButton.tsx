import editIcon from '../styles/assets/icons/icons8-edit-icon.png';
export function EditResumeButton() {
  function openResumeForm() {}

  return (
    <div onClick={openResumeForm} id="edit-button" className="tooltip">
      <img src={editIcon}></img>
    </div>
  );
}
