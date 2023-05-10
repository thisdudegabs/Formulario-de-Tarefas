import { Button, Paper, TextField } from "@mui/material";
import React, { useState, useTransition } from "react";

export default function Form({ addTodo }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
  };

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      todoCreate(text);
      setText("");
    }
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="Tarefa"
            onChange={(e) => setText(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <Button type="reset" variant="text" onClick={handleAddTodo}>
            Add
          </Button>
        </div>
      </form>
    </Paper>
  );
}
