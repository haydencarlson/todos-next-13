import React from 'react';
import { prisma } from '@/prisma/db';
import CardItem from './CardItem';
import DeleteCardButton from './DeleteCardButton';
import CreateCardItem from './CreateCardItem';

const getCardItems = async (cardId: string) => {
  const cardItems = await prisma.cardItem.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ],
    where: {
      cardId,
    },
  });
  return cardItems;
};

interface CardProps {
  id: string;
  title: string;
}

export default async function Card(props: CardProps) {
  const { id, title } = props;
  const items = await getCardItems(id);

  return (
    <div className='flex flex-col bg-slate-300 p-5 rounded-md w-full lg:w-[350px]'>
      <div className='flex items-center justify-between font-semibold'>
        {title}
        <DeleteCardButton id={id} />
      </div>
      <ul className='flex flex-col gap-3 py-3 pt-5'>
        {items.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </ul>
      <CreateCardItem cardId={id} />
    </div>
  );
}
