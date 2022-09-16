import React, { useMemo, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, Table } from "reactstrap";
import {
  useCreateUser,
  useDeleteUser,
  useGetUsers,
} from "../../hooks/User.hooks";
import { userData, UserProps } from "../../types/user.types";
import CommonUser from "../commonUserComponent/commonUser";
import SortButton from "../sortButton/sortButton";
import "./user.css";

const Users = () => {
  const { data } = useGetUsers();
  const { mutate: createUser } = useCreateUser();
  const { mutate: deleteUser } = useDeleteUser();
  const {mutate: }
  const [sorting, setSorting] = useState(["id", "Asc"]);
  const [searchInput, setSearchInput] = useState("");
  const [fieldsBlur, setFieldsBlur] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  console.log(fieldsBlur);
  

  const onSubmit = (data: UserProps) => {
    toggle();
    createUser(data);
  };

  const tableHeaders = [
    { id: "id", name: "Id", isRequired: true },
    { id: "name", name: "Name", isRequired: true },
    { id: "email", name: "Email", isRequired: true },
    { id: "created_by", name: "Created By", isRequired: true },
    { id: "edit", name: "Edit", isRequired: false },
    { id: "Delete", name: "Delete", isRequired: false },
  ];
  const searchName = useMemo(
    () =>
      data?.filter((ele: userData) =>
        ele.name.toLowerCase().includes(searchInput.toLowerCase())
      ),
    [data, searchInput]
  );

  const updateListByName = useMemo(() => {
    const p = 
      sorting[1] === "Asc"
        ? searchName?.sort((a: userData, b: userData) =>
            a[sorting[0] as keyof userData] > b[sorting[0] as keyof userData]
              ? 1
              : -1
          )
        : searchName?.sort((a: userData, b: userData) =>
            a[sorting[0] as keyof userData] < b[sorting[0] as keyof userData]
              ? 1
              : -1
          );
    return p;
  }, [searchName, sorting]);

  const updateUserDetails = (ele: userData) => {
    setFieldsBlur(true);
    const data = {
      name: ele.name,
      email: ele.email,
      role: ele.role_type,
    };
    setInitialValues(data);
    toggle();
  };

  const deleteUserDetails = (id: number) => {
    deleteUser(id);
  };

  return (
    <div className="users-container">
      <div className="users-nav">
        <input
          type="search"
          placeholder="Type to Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          onClick={() => {
            toggle();
            setFieldsBlur(false);
            setInitialValues({ name: "", email: "", role: "" });
          }}
          color="primary"
        >
          Add New User
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add/Edit User</ModalHeader>
        <ModalBody>
          <CommonUser
            fieldsBlur={fieldsBlur}
            setFieldsBlur={setFieldsBlur}
            initialValues={initialValues}
            onSubmit={onSubmit}
          />
        </ModalBody>
      </Modal>
      <div className="users-table">
        <Table striped>
          <thead className="users-thead">
            {tableHeaders.map((ele) => {
              return (
                <th scope="row" className="users-th">
                  {
                    <SortButton
                      name={ele.id}
                      sortByName={sorting}
                      setSortByName={setSorting}
                      isRequired={ele.isRequired}
                    />
                  }
                </th>
              );
            })}
          </thead>
          <tbody>
            {updateListByName?.map((ele: userData) => {
              return (
                <tr>
                  <td>{ele.id}</td>
                  <td>
                    <Button color="link" onClick={() => updateUserDetails(ele)}>
                      {ele.name}
                    </Button>
                  </td>
                  <td>{ele.email}</td>
                  <td>{ele.created_by}</td>
                  <td>
                    <Button
                      onClick={() => updateUserDetails(ele)}
                      color="warning"
                    >
                      Edit
                    </Button>
                  </td>

                  <td>
                    <Button
                      onClick={() => deleteUserDetails(ele.id)}
                      color="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
