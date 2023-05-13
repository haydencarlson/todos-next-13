'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { useTransition } from 'react';
interface DeleteCardButtonProps {
  id: string;
}

export default function DeleteCardButton({ id }: DeleteCardButtonProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [_, startTransition] = useTransition();

  const deleteCard = async () => {
    setIsLoading(true);
    await fetch(`/api/cards?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setIsLoading(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button
      className='rounded p-1 hover:bg-slate-400 cursor-pointer'
      onClick={deleteCard}
    >
      {isLoading ? <FaSpinner className='animate-spin' /> : <BsFillTrashFill />}
    </button>
  );
}
