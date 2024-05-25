import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Completed = (props) => {
  const { toDoList, setToDoList } = props;
  const changeState = (id) => {
    const newList = toDoList.map((p) => {
      if (p.id === id) {
        return { ...p, done: !p.done };
      } else return p;
    });
    setToDoList(newList);
  };
  const deleteTask = (id) => {
    const newList = toDoList.filter((p) => p.id !== id);
    setToDoList(newList);
  };
  const deleteAll = () => {
    const newList = toDoList.filter((p) => p.done === false);
    setToDoList(newList);
  };
  return (
    <>
      <Box width="400px" m="auto" paddingTop="10px">
        <Stack spacing={3} justifyContent="space-between">
          <FormGroup>
            {toDoList
              .filter((item) => item.done === true)
              .map((task) => (
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={task.done}
                          onChange={() => changeState(task.id)}
                        />
                      }
                      label={task.task}
                    />
                    <IconButton onClick={() => deleteTask(task.id)}>
                      <DeleteOutlineIcon style={{ color: "#ff2625" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              ))}
            <Stack direction="row" justifyContent='flex-end'>
              <Button variant="contained" color="error" onClick={deleteAll}>
                Delete all
              </Button>
            </Stack>
          </FormGroup>
        </Stack>
      </Box>
    </>
  );
};

export default Completed;
