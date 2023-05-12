'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BsFillTrashFill } from 'react-icons/bs';

interface DeleteCardItemButtonProps {
  id: string;
}

export default function DeleteCardItemButton({ id }: DeleteCardItemButtonProps) {
  const router = useRouter();

  const deleteCardItem = async () => {
    await fetch(`/api/card_items?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  };

  return (
    <button className='hidden group-hover:block' onClick={deleteCardItem}>
      <BsFillTrashFill />
    </button>
  );
}
