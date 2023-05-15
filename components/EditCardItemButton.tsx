'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsPencilFill } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { useTransition } from 'react';
import Modal from './Modal';

interface EditCardItemButtonProps {
  id: string;
  text: string;
}

export default function EditCardItemButton({
  id,
  text
}: EditCardItemButtonProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [_, startTransition] = useTransition();
  const [textValue, setTextValue] = useState(text);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editCardItem = async () => {
    setIsLoading(true);
    await fetch(`/api/card_items`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, text: textValue }),
    });
    startTransition(() => {
      setIsLoading(false);
      router.refresh();
    });
  };

  return (
    <>
      <button
        className='hidden group-hover:block'
        onClick={() => setIsModalOpen(true)}
      >
        {isLoading ? <FaSpinner className='animate-spin' /> : <BsPencilFill />}
      </button>
      {isModalOpen && (
        <Modal
          header='Edit your task'
          submitText='Edit task'
          isLoading={isLoading}
          onClose={() => setIsModalOpen(false)}
          onSubmit={editCardItem}
        >
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Edit your task...'
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            required
          />
        </Modal>
      )}
    </>
  );
}
