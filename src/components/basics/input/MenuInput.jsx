import React from "react";
import Input from "./Input";

const MenuInput = ({
  name,
  placeholder,
  maxLength,
  id,
  changeElementProperties,
}) => {
  return (
    <div>
      <Input
        name={"Name"}
        placeholder={name}
        onChange={(e) => changeElementProperties(e.target.value, id, "name")}
      />
      <Input
        name={"Place holder"}
        placeholder={placeholder}
        onChange={(e) =>
          changeElementProperties(e.target.value, id, "placeholder")
        }
      />
      <Input
        type="number"
        name={"Max length"}
        placeholder={maxLength}
        onChange={(e) =>
          changeElementProperties(e.target.value, id, "maxLength")
        }
      />
    </div>
  );
};

export default MenuInput;
