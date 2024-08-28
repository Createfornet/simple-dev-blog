import { useState } from 'react';

export default function Join() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');

  const [firstNameError, setFirstNameError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    firstName
      ? setFirstNameError(null)
      : setFirstNameError('first name should be filled');

    email.includes('@')
      ? setEmailError(null)
      : setEmailError('email should have @ sign');

    description
      ? setDescriptionError(null)
      : setDescriptionError('description should be filled');

    if (!firstName || !email.includes('@') || !description) return;

    const userData = {
      firstName,
      lastName,
      email,
      file,
      description,
    };

    async function postUserData(api) {
      try {
        const response = fetch(api, {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        const postedData = response.json();
        console.log(postedData);
      } catch (err) {
        console.log(err);
      }
    }

    // postUserData function need to invoke here with real api endpoint!
    postUserData;
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
          errorState={firstNameError}
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
          errorState={emailError}
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
          errorState={descriptionError}
        />

        <input
          type='submit'
          value='submit'
          className='text-black bg-yellow py-2 cursor-pointer rounded-xl my-4'
        />
      </form>
    </section>
  );
}

function InputJoin({
  state,
  setterFunction,
  type = 'text',
  label,
  id,
  errorState = false,
}) {
  return (
    <div className='grid grid-cols-10 gap-2 mt-4'>
      <label
        className='bg-white dark:bg-black text-sm col-span-3 p-1'
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className='bg-lightGray dark:bg-darkGray py-1 px-4 rounded-xl text-xl col-span-7'
        type={type}
        id={id}
        name='last name'
        value={state}
        onChange={(e) => setterFunction(e.target.value)}
      />

      {errorState && <ErrorText>{errorState}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }) {
  return <p className='text-[#ff0000]'>{children}</p>;
}
