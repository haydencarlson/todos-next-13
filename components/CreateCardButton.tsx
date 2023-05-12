'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';

export default function CreateCardButton() {
  const router = useRouter();
  
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createNewCard = async () => {
    setIsLoading(true);
    await fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newCardTitle }),
    });
    router.refresh();
    setIsNewCardModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsNewCardModalOpen(true)}
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        +
      </button>
      {isNewCardModalOpen && (
        <Modal
          header='Create a new task card'
          submitText='Create card'
          isLoading={isLoading}
          onClose={() => setIsNewCardModalOpen(false)}
          onSubmit={createNewCard}
        >
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='New card name...'
            onChange={(e) => setNewCardTitle(e.target.value)}
            required
          />
        </Modal>
      )}
    </>
  );
}