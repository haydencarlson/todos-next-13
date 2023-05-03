'use client';

import React, { useState } from 'react';
import CardItem from './carditem';
interface CardProps {
  name: string;
}

export default function Card(props: CardProps) {
  const { name } = props;

  const [isTextAreaOpen, setIsTextAreaOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddNewTaskClick = () => {
    if (isTextAreaOpen) {
      if (!newTaskValue) return;
      setTasks([...tasks, newTaskValue]);
      setNewTaskValue('');
    }
    setIsTextAreaOpen(!isTextAreaOpen);
  };

  const handleItemEditSubmit = (taskIndex: number, newTask: string) => {
    const newTasks = [...tasks];
    newTasks[taskIndex] = newTask;
    setTasks(newTasks);
  };

  const handleItemDelete = (taskIndex: number) => {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <div className='flex flex-col bg-slate-300 p-5 rounded-md w-[350px]'>
      <div className='font-semibold'>{name}</div>
      <ul className='py-3'>
        {tasks.map((task, i) => (
          <CardItem
            key={`${task}-${i}`}
            task={task}
            taskIndex={i}
            onItemSubmit={handleItemEditSubmit}
            onItemDelete={handleItemDelete}
          />
        ))}
      </ul>
      {isTextAreaOpen && (
        <textarea
          onChange={(e) => setNewTaskValue(e.target.value)}
          id='message'
          rows={4}
          className='block mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Whats your new todo?'
        ></textarea>
      )}
      <button
        onClick={handleAddNewTaskClick}
        className='text-white bg-blue-700 mt-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Add {!isTextAreaOpen ? 'new' : ''} task
      </button>
    </div>
  );
}
