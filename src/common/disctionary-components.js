
import SELECT_BASE_SCHEMA from "../components/basics/select/constants";

import Input from "../components/basics/input/Input";
import Select from "../components/basics/select/Select";
import INPUT_BASE_SCHEMA from "../components/basics/input/constants";

const ELEMENTS = {
  input: Input,
  select: Select,
};

export const SELECT_PROPS_BASE = {
  input: INPUT_BASE_SCHEMA,
  select: SELECT_BASE_SCHEMA,
};

export default ELEMENTS;
