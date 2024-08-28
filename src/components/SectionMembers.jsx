import { useState } from 'react';
import noImage from './../assets/images/no-image-available.jpg';
import { MemberBio } from './MemberBio';

const membersInformation = [
  {
    id: 1,
    name: 'Amir',
    imgSrc: noImage,
    shortBiograghi:
      'Lorem ipsum dolor sit amet elit. Nobis id consectetur amet consequatur, sit corrupti ex libero iusto iste dolore sunt!',
    moreInfo: `Lorem ipsum dolor sit amet elit. Inventore mollitia sint, autem corrupti eveniet expedita facilis quos. Reprehenderit dicta deserunt voluptas modi nulla! Iusto enim voluptatum minus minima fuga cumque.
    Molestiae quo voluptates est aspernatur. Placeat adipisci quae hic harum laborum fuga quod maxime, dolore, quasi blanditiis perspiciatis. Veniam quam necessitatibus recusandae repellat, placeat libero ex fugiat assumenda quas nulla.
    Distinctio aperiam blanditiis deleniti eligendi voluptatibus rerum magnam qui esse sequi nesciunt facilis consequatur sit recusandae quos eaque tempore, atque nobis quaerat incidunt dolorum hic! Sint provident animi libero facere!`,
  },
  {
    id: 2,
    name: 'Hooman',
    imgSrc: noImage,
    shortBiograghi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id consectetur amet consequatur, sit corrupti ex libero iusto iste dolore sunt!',
    moreInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia sint, autem corrupti eveniet expedita facilis quos. Reprehenderit dicta deserunt voluptas modi nulla! Iusto enim voluptatum minus minima fuga cumque.
    Molestiae quo voluptates est aspernatur. Placeat adipisci quae hic harum laborum fuga quod maxime, dolore, quasi blanditiis perspiciatis. Veniam quam necessitatibus recusandae repellat, placeat libero ex fugiat assumenda quas nulla.
    Distinctio aperiam blanditiis deleniti eligendi voluptatibus rerum magnam qui esse sequi nesciunt facilis consequatur sit recusandae quos eaque tempore, atque nobis quaerat incidunt dolorum hic! Sint provident animi libero facere!`,
  },
  {
    id: 3,
    name: 'Hossein',
    imgSrc: noImage,
    shortBiograghi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id consectetur amet consequatur, sit corrupti ex libero iusto iste dolore sunt!',
    moreInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia sint, autem corrupti eveniet expedita facilis quos. Reprehenderit dicta deserunt voluptas modi nulla! Iusto enim voluptatum minus minima fuga cumque.
    Molestiae quo voluptates est aspernatur. Placeat adipisci quae hic harum laborum fuga quod maxime, dolore, quasi blanditiis perspiciatis. Veniam quam necessitatibus recusandae repellat, placeat libero ex fugiat assumenda quas nulla.
    Distinctio aperiam blanditiis deleniti eligendi voluptatibus rerum magnam qui esse sequi nesciunt facilis consequatur sit recusandae quos eaque tempore, atque nobis quaerat incidunt dolorum hic! Sint provident animi libero facere!`,
  },
  {
    id: 4,
    name: 'Maryam',
    imgSrc: noImage,
    shortBiograghi:
      'Lorem ipsum dolor sit amet elit. Nobis id consectetur amet consequatur, sit corrupti ex libero iusto iste dolore sunt!',
    moreInfo: `Lorem ipsum dolor sit amet elit. Inventore mollitia sint, autem corrupti eveniet expedita facilis quos. Reprehenderit dicta deserunt voluptas modi nulla! Iusto enim voluptatum minus minima fuga cumque.
    Molestiae quo voluptates est aspernatur. Placeat adipisci quae hic harum laborum fuga quod maxime, dolore, quasi blanditiis perspiciatis. Veniam quam necessitatibus recusandae repellat, placeat libero ex fugiat assumenda quas nulla.
    Distinctio aperiam blanditiis deleniti eligendi voluptatibus rerum magnam qui esse sequi nesciunt facilis consequatur sit recusandae quos eaque tempore, atque nobis quaerat incidunt dolorum hic! Sint provident animi libero facere!`,
  },
  {
    id: 5,
    name: 'Omid',
    imgSrc: noImage,
    shortBiograghi:
      'Lorem ipsum dolor sit amet elit. Nobis id consectetur amet consequatur, sit corrupti ex libero iusto iste dolore sunt!',
    moreInfo: `Lorem ipsum dolor sit amet elit. Inventore mollitia sint, autem corrupti eveniet expedita facilis quos. Reprehenderit dicta deserunt voluptas modi nulla! Iusto enim voluptatum minus minima fuga cumque.
    Molestiae quo voluptates est aspernatur. Placeat adipisci quae hic harum laborum fuga quod maxime, dolore, quasi blanditiis perspiciatis. Veniam quam necessitatibus recusandae repellat, placeat libero ex fugiat assumenda quas nulla.
    Distinctio aperiam blanditiis deleniti eligendi voluptatibus rerum magnam qui esse sequi nesciunt facilis consequatur sit recusandae quos eaque tempore, atque nobis quaerat incidunt dolorum hic! Sint provident animi libero facere!`,
  },
];

export default function Section2() {
  const [currentBio, setCurrentBio] = useState(null);

  function handleOpenMoreInfo() {
    setCurrentBio(1);
  }

  function handleCloseMoreInfo() {
    setCurrentBio(null);
  }

  return (
    <section className='items-between relative'>
      <h2 className='text-xl text-center'>Code Club Members</h2>
      <div className='grid py-4 pb-16 gap-4 grid-cols-1 md:grid-cols-2 m-auto'>
        {membersInformation.map((member) => (
          <MemberBio
            memberName={member.name}
            imgSrc={member.imgSrc}
            shortBiographie={member.shortBiograghi}
            onOpenMoreInfo={() => handleOpenMoreInfo(member.id)}
            key={'member ' + member.id}
          />
        ))}
      </div>

      {currentBio && (
        <div className='absolute w-full h-full border-2 border-yellow bg-black top-0 z-20 left-0 p-8'>
          <button className='text-3xl p-4 border' onClick={handleCloseMoreInfo}>
            x
          </button>
          <p>
            Lorem, ipsum dolor sit amet elit. Pariatur, possimus nesciunt!
            Ducimus maiores quaerat obcaecati aut itaque sit harum. Libero illo
            voluptates et aut aperiam perspiciatis quia explicabo sit adipisci?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, elit. Inventore iure sunt dolorem odit
            quos aliquam, natus accusamus animi consectetur doloremque. Vitae
            eaque dignissimos officiis veniam nihil. Laboriosam dolorum
            provident et!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet elit. Suscipit consectetur aspernatur
            veritatis repudiandae tenetur expedita officiis unde quidem eum quam
            impedit assumenda, dolores ipsa beatae id eius distinctio quibusdam
            officia.
          </p>
        </div>
      )}
    </section>
  );
}
