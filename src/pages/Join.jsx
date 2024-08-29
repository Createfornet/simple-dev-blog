import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const apiPostUserData = 'http://localhost:3000/api/v1/proposal';

export default function Join() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  async function postUserData(userData) {
    try {
      const response = await fetch(apiPostUserData, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('request faild');

      const data = await response.json();
      if (data.message) throw new Error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // check inputs have value or not
    if (!firstName || !email || !description) {
      toast.error('inputs should be empty');

      setFirstNameError(firstName ? false : true);
      setEmailError(email ? false : true);
      setDescriptionError(description ? false : true);
      return;
    }

    const userData = {
      name: `${firstName} ${lastName ? lastName : ''}`,
      email,
      profession: description,
    };

    postUserData(userData);
  }

  return (
    <section className='min-h-[calc(100vh-310px)] grid grid-col-1 items-center relative'>
      <form
        action=''
        onSubmit={handleSubmit}
        className='grid grid-cols-1 gap-4'
      >
        <h2 className='my-3 mx-2'>
          <img src='' alt='' />
          contact us
        </h2>

        <InputJoin
          state={firstName}
          setterFunction={setFirstName}
          label='Name'
          id='first-name'
          error={firstNameError}
        />

        <InputJoin
          state={lastName}
          setterFunction={setLastName}
          label='Surname'
          id='last-name'
        />

        <InputJoin
          state={email}
          setterFunction={setEmail}
          type='email'
          label='Email'
          id='user-email'
          error={emailError}
        />

        <InputJoin
          state={file}
          setterFunction={setFile}
          type='file'
          label='File'
          id='first-name'
        />

        <InputJoin
          state={description}
          setterFunction={setDescription}
          label='Description'
          id='first-name'
          error={descriptionError}
        />

        <input
          type='submit'
          value='submit'
          className='text-black bg-yellow py-2 cursor-pointer rounded-xl my-4'
        />
      </form>

      <Toaster />
    </section>
  );
}

function InputJoin({
  state,
  setterFunction,
  type = 'text',
  label,
  id,
  error = false,
}) {
  return (
    <div className='grid grid-cols-10 gap-2 mt-4'>
      <label
        className='bg-white dark:bg-black text-sm col-span-3 p-1'
        htmlFor={id}
      >
        {label}
        {error && <span className='text-[#F00]'> !</span>}
      </label>

      <input
        className='bg-lightGray dark:bg-darkGray py-1 px-4 rounded-xl text-xl col-span-7'
        type={type}
        id={id}
        name='last name'
        value={state}
        onChange={(e) => setterFunction(e.target.value)}
      />
    </div>
  );
}
