import React, { useRef } from "react";
import Input from "../input/Input";
import Button from "../button/Button";

const MenuSelect = ({ changeElementProperties, id, ...props }) => {
  const inputNewOptionRef = useRef(null);

  function setOption(e) {
    e.preventDefault();
    if (!inputNewOptionRef.current.value) return;
    changeElementProperties(
      [
        ...props.listElements,
        {
          id: `select-${id}-${crypto.randomUUID()}`,
          nameOption: inputNewOptionRef.current.value,
          value: inputNewOptionRef.current.value,
        },
      ],
      id,
      "listElements"
    );
    inputNewOptionRef.current.value = "";
  }
  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        onSubmit={setOption}
      >
        <Input
          ref={inputNewOptionRef}
          name={"Add option"}
          placeholder={"New option"}
        />
        <Button onClick={setOption}>Add option</Button>
      </form>
      <section>
        <h3>Current options</h3>
        <br />
        <div>
          {props.listElements.map((option) => (
            <p key={option.id}>{option.nameOption}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default MenuSelect;
