import { useState } from "react";
import ContactTop from "../ContactTop/ContactTop";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import ContactList from "../ContactList/ContactList";
import "./contact-main.scss";

const Main = () => {
  const [isModalOpen, openModal] = useState(false);
  const [search, setSearch] = useState("");
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "998",
    gender: "Male",
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [contacts, setContacts] = useState([]);

  const editContact = (contact) => {
    setNewContact(contact);
    setEditingIndex(contacts.indexOf(contact));
    openModal(true);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    setContacts(updatedContacts);
    window.location.reload(false);
  };
  const closeModal = () => {
    setNewContact({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: "Male",
    });
    openModal(!isModalOpen);
  };

  const addContact = () => {
    if (newContact.firstName && newContact.lastName && newContact.phoneNumber) {
      const existingContacts =
        JSON.parse(localStorage.getItem("contacts")) || [];

      existingContacts.push(newContact);

      localStorage.setItem("contacts", JSON.stringify(existingContacts));

      closeModal();
    } else {
      console.error("Please fill in all required fields");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setNewContact({
      ...newContact,
      firstName: e.target.value,
    });
  };

  const onChangeLastName = (e) => {
    setNewContact({
      ...newContact,
      lastName: e.target.value,
    });
  };

  const onChangePhoneNumber = (e) => {
    setNewContact({
      ...newContact,
      phoneNumber: e.target.value,
    });
  };

  const onChangeGender = (e) => {
    setNewContact({
      ...newContact,
      gender: e.target.value,
    });
  };

  return (
    <div id="main">
      <Header />
      <ContactTop
        openModal={openModal}
        handleSearch={handleSearch}
        search={search}
      />
      <Modal
        newContact={newContact}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangePhoneNumber={onChangePhoneNumber}
        onChangeGender={onChangeGender}
        addContact={addContact}
        isEditing={editingIndex !== null}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
      />
      <ContactList
        search={search}
        editContact={editContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default Main;
