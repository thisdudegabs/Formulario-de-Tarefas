import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Paper } from "@mui/material";
import EditTodoDialog from "./EditTodoDialog";

export default function TodoItem({ todo, deleteTodo, editTodo }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const [itsChecked, setItsChecked] = React.useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  const checkedHandler = () => {
    setItsChecked(!itsChecked);
  };

  return (
    <>
      <EditTodoDialog
        open={openDialog}
        dialogHandler={dialogHandler}
        todo={todo}
        editTodo={editTodo}
      />

      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="Delete"
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteForeverIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                onClick={checkedHandler}
              />
            </ListItemIcon>
            <ListItemText
              style={{ textDecoration: itsChecked ? "line-through" : null }}
              primary={todo.text}
              onClick={() => setOpenDialog(true)}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
