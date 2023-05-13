'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { useTransition } from 'react';

interface DeleteCardItemButtonProps {
  id: string;
}

export default function DeleteCardItemButton({
  id,
}: DeleteCardItemButtonProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [_, startTransition] = useTransition();

  const deleteCardItem = async () => {
    setIsLoading(true);
    await fetch(`/api/card_items?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    startTransition(() => {
      setIsLoading(false);
      router.refresh();
    });
  };

  return (
    <button className='hidden group-hover:block' onClick={deleteCardItem}>
      {isLoading ? <FaSpinner className='animate-spin' /> : <BsFillTrashFill />}
    </button>
  );
}
