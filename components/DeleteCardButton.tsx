'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BsFillTrashFill } from 'react-icons/bs';

interface DeleteCardButtonProps {
  id: string;
}

export default function DeleteCardButton({ id }: DeleteCardButtonProps) {
  const router = useRouter();

  const deleteCard = async () => {
    await fetch(`/api/cards?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  };

  return (
    <button
      className='rounded p-1 hover:bg-slate-400 cursor-pointer'
      onClick={deleteCard}
    >
      <BsFillTrashFill />
    </button>
  );
}
