import React, { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { editUser, getUser } from "../server/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  birth: "",
  address: "",
  phone: "",
  salary: "",
  debts: "",
  date: "",
};

const EditUsers = () => {
  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all"); // when fish all input take us to the all users page automatically
  };

  return (
    <Container>
      <Typography variant="h4">Edit Users</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Birth</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="birth"
          value={user.birth}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          value={user.address}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Salary</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="salary"
          value={user.salary}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Debts</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="debts"
          value={user.debts}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="date"
          value={user.date}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Add Users
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUsers;
