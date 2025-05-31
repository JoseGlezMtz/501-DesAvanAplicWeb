// InputField.tsx
import * as React from "react";

type InputFieldProps = {
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputField = (props: InputFieldProps): React.ReactElement => {
  const { type = "text", value, onChange, placeholder } = props;
  
  return React.createElement("input", {
    type,
    placeholder,
    value,
    onChange,
    style: { padding: "10px", margin: "10px" }
  });
};

export default InputField;
