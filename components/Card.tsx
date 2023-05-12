import React from 'react';
import { prisma } from '@/prisma/db';
import CardItem from './CardItem';
import DeleteCardButton from './DeleteCardButton';
import CreateCardItem from './CreateCardItem';

interface CardProps {
  id: string;
  title: string;
}

const getCardItems = async (cardId: string) => {
  const cardItems = await prisma.cardItem.findMany({
    where: {
      cardId,
    },
  });
  return cardItems;
};

export default async function Card(props: CardProps) {
  const { id, title } = props;
  const items = await getCardItems(id);

  return (
    <div className='flex flex-col bg-slate-300 p-5 rounded-md w-[350px]'>
      <div className='flex items-center justify-between font-semibold'>
        {title}
        <DeleteCardButton id={id} />
      </div>
      <ul className='py-3'>
        {items.map((item, i) => (
          <CardItem
            key={`${item}-${i}`}
            {...item}
          />
        ))}
      </ul>
      <CreateCardItem cardId={id}/>
    </div>
  );
}
