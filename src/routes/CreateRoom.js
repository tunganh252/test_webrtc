import React, { useRef } from "react";
// import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
  const inputRef = useRef();
  function create() {
    // const id = uuid();
    const { value } = inputRef.current;
    if (!value) return;
    props.history.push(`/room/${value}`);
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Nhập roomID" />
      <button onClick={create}>Create room</button>
    </div>
  );
};

export default CreateRoom;
