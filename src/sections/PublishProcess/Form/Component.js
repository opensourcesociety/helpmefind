import React from 'react';

import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstname" ref={register} />
      
      <input name="lastname" ref={register({ required: true })} />
      {errors.lastname && 'Last name is required.'}
      
      <input name="age" ref={register({ pattern: /\d+/ })} />
      {errors.age && 'Please enter number for age.'}
      
      <input type="submit" />
    </form>
  );
}

export default Form;
