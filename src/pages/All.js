import {
  Box,
  Stack,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";

const All = (props) => {
  const [value, setValue] = useState("");
  const { toDoList, setToDoList } = props;
  const handleChange = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };
  const addNewTask = () => {
    const newList = [
      ...toDoList,
      { id: toDoList.length + 1, task: value, done: false },
    ];
    setToDoList(newList);
  };
  const changeState = (id) => {
    const newList = toDoList.map((p) => {
      if (p.id === id) {
        return {...p,done: !p.done};
      } else return p;
    });
    // const newList = [...toDoList,{...toDoList,id:id,done:!.done}]
    setToDoList(newList);
  };
  return (
    <>
      <Box width="400px" m="auto" paddingTop="10px">
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <TextField
            id="outlined-basic"
            label="add details"
            variant="outlined"
            fullWidth="300px"
            onChange={handleChange}
            value={value}
          />
          <Button variant="contained" onClick={addNewTask}>
            Add
          </Button>
        </Stack>
        <Stack spacing={3} justifyContent="space-between">
          <FormGroup>
            {toDoList.map((task) => (
              <Stack>
                <FormControlLabel
                  control={<Checkbox checked={task.done} onChange={()=>changeState(task.id)} />}
                  label={task.task}
                />
              </Stack>
            ))}
          </FormGroup>
        </Stack>
      </Box>
    </>
  );
};

export default All;
