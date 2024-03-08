import PropTypes from "prop-types";

import "./modal.scss";
const Modal = ({
  isModalOpen,
  newContact,
  addContact,
  closeModal,
  onChangeFirstName,
  onChangeLastName,
  onChangePhoneNumber,
  onChangeGender,
}) => {
  const { firstName, lastName, gender, phoneNumber } = newContact;
  return (
    <div id="modal" className={`${isModalOpen ? "modal-open" : ""}`}>
      <form onSubmit={addContact}>
        <input
          type="text"
          required
          placeholder="firstName"
          name="firstName"
          value={firstName}
          onChange={onChangeFirstName}
        />
        <input
          type="text"
          required
          placeholder="lastName"
          name="lastName"
          value={lastName}
          onChange={onChangeLastName}
        />
        <input
          type="number"
          required
          placeholder="phoneNumber | write without `+`"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChangePhoneNumber}
        />
        <select
          id="gender"
          name="gender"
          value={gender}
          required
          onChange={onChangeGender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit" className="add">
          Add
        </button>
        <button type="button" className="close" onClick={closeModal}>
          Close
        </button>
      </form>
    </div>
  );
};
Modal.propTypes = {
  isModalOpen: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  newContact: PropTypes.object.isRequired,
  addContact: PropTypes.func.isRequired,
  onChangeFirstName: PropTypes.func.isRequired,
  onChangeLastName: PropTypes.func.isRequired,
  onChangePhoneNumber: PropTypes.func.isRequired,
  onChangeGender: PropTypes.func.isRequired,
};

export default Modal;
