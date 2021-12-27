import React, { useState } from "react";

function CreateArea(props) {
  const [items, setItems] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setItems((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={items.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={items.content}
          onChange={handleChange}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.addNote(items);
            setItems({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
