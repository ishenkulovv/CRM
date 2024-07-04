import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)

  const handleChange = (value) => {
    setValue(value);
  }

  const validate = () => {
    setError(!validator(value))
    return validator(value)
  }

  return {
    value,
    error,
    handleChange,
    validate
  }
}
