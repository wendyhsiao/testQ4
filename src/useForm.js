import { useEffect, useRef, useState } from 'react';

const useForm = ({initialValues, validation, onSubmit}) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = e => {
    if (e.target.name === 'rememberMe') {
      setValues(values => ({...values, [e.target.name]: e.target.checked}))
    } else {
      setValues(values => ({...values, [e.target.name]: e.target.value}))
    }
  }

  const [errors, setErrors] = useState({});
  const firstUpdate = useRef(true)
  useEffect(() => {
    // 第一次不執行
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    // 無 error 才提交
    if (Object.values(errors).length === 0) {
      onSubmit(values)  
    }
  }, [errors])

  const handleSubmit = e => {
    setErrors(validation(values))
  }

  return { handleChange, handleSubmit, values, errors }
}

export default useForm;