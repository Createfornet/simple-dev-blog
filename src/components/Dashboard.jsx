import { useState } from 'react';
import { IconChevronDown } from './Icon';

// these fake users datas are just for testing
const usersData = [
  {
    id: 11,
    firstName: 'Tomas',
    lastName: 'Edison',
    email: 'tomas@edison.com',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem cupiditate exercitationem autem cupiditate exercitationem autem cupiditate exercitationem doloribus quas incidunt. Iure animi numquam provident quidem velit quaerat amet ipsum placeat earum. Voluptatibus aliquid dolore hic.',
  },
  {
    id: 12,
    firstName: 'Rich',
    lastName: 'Harris',
    email: 'rich@harris.com',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem cupiditate exercitationem autem cupiditate exercitationem autem cupiditate exercitationem doloribus quas incidunt. Iure animi numquam provident quidem velit quaerat amet ipsum placeat earum. Voluptatibus aliquid dolore hic.',
  },
  {
    id: 13,
    firstName: 'Johny',
    lastName: 'Dep',
    email: 'johny@dep.com',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem cupiditate exercitationem autem cupiditate exercitationem autem cupiditate exercitationem doloribus quas incidunt. Iure animi numquam provident quidem velit quaerat amet ipsum placeat earum. Voluptatibus aliquid dolore hic.',
  },
  {
    id: 14,
    firstName: 'Michael',
    lastName: 'Angello',
    email: 'michael@angello.com',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem cupiditate exercitationem autem cupiditate exercitationem autem cupiditate exercitationem doloribus quas incidunt. Iure animi numquam provident quidem velit quaerat amet ipsum placeat earum. Voluptatibus aliquid dolore hic.',
  },
];

export default function Dashboard() {
  const [currentOpenRow, setCurrentOpenRow] = useState(null);

  return (
    <div>
      <TableHead />

      {usersData.map((user, i) => (
        <TableRow
          user={user}
          key={user.id}
          currentOpenRow={currentOpenRow}
          setCurrentOpenRow={setCurrentOpenRow}
          num={i + 1}
        />
      ))}
    </div>
  );
}

function TableHead() {
  return (
    <div className='grid grid-cols-7 gap-1 lg:gap-4 text-black font-medium text-center'>
      <p className='col-span-1 bg-yellow rounded-xl p-2'>No.</p>
      <p className='col-span-2 bg-yellow rounded-xl p-2'>Name</p>
      <p className='col-span-2 bg-yellow rounded-xl p-2'>SurName</p>
      <p className='col-span-2 bg-yellow rounded-xl p-2'>Email</p>
    </div>
  );
}

function TableRow({
  user: { id, firstName, lastName, email, description },
  num,
  currentOpenRow,
  setCurrentOpenRow,
}) {
  return (
    <div className='grid grid-cols-7 text-center my-2 gap-2'>
      <button
        className='col-span-1 bg-lightGray dark:bg-darkGray rounded-xl p-2 flex justify-center gap-2'
        onClick={() => {
          id === currentOpenRow
            ? setCurrentOpenRow(null)
            : setCurrentOpenRow(id);
        }}
      >
        {num}
        <IconChevronDown />
      </button>

      <p className='col-span-2 bg-lightGray dark:bg-darkGray rounded-xl p-2'>
        {firstName}
      </p>

      <p className='col-span-2 bg-lightGray dark:bg-darkGray rounded-xl p-2'>
        {lastName}
      </p>

      <p className='col-span-2 bg-lightGray dark:bg-darkGray rounded-xl p-2'>
        {email}
      </p>

      {currentOpenRow === id && (
        <div className='col-span-7 bg-lightGray dark:bg-darkGray rounded-xl p-5 mb-5'>
          {description}
        </div>
      )}
    </div>
  );
}
