'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

interface CreateCardItemProps {
  cardId: string;
}

function CreateCardItem({ cardId }: CreateCardItemProps) {
  const router = useRouter();

  const [isTextAreaOpen, setIsTextAreaOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateTaskClick = async () => {
    setIsLoading(true);
    await fetch('/api/card_items', {
      method: 'POST',
      body: JSON.stringify({
        cardId,
        text: newTaskValue,
      }),
    });
    router.refresh();
    setIsLoading(false);
    setIsTextAreaOpen(false);
    setNewTaskValue('');
  };

  return (
    <>
      {isTextAreaOpen && (
        <form>
          <textarea
            onChange={(e) => setNewTaskValue(e.target.value)}
            value={newTaskValue}
            id='message'
            rows={4}
            className='block mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Whats your new task?'
          ></textarea>
        </form>
      )}
      {isTextAreaOpen ? (
        <div className='flex'>
          <button
            onClick={handleCreateTaskClick}
            className='w-full flex justify-center items-center text-white bg-blue-700 mt-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            {isLoading ? <FaSpinner className='animate-spin'/> : 'Create task'}
          </button>
          <button
            onClick={() => setIsTextAreaOpen(false)}
            className='w-full text-white bg-blue-700 mt-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            Close
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsTextAreaOpen(true)}
          className='text-white bg-blue-700 mt-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Add {!isTextAreaOpen ? 'new' : ''} task
        </button>
      )}
    </>
  );
}

export default CreateCardItem;
