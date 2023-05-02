import React, { useState, useCallback } from 'react';
import { TextInput } from 'flowbite-react';
import Modal from './modal';

interface CardItemProps {
  task: string;
  taskIndex: number;
  onItemSubmit: (taskIndex: number, newTaskValue: string) => void;
}

export default React.memo(function CardItem(props: CardItemProps) {
  const { task, taskIndex, onItemSubmit } = props;

  const [newTaskValue, setNewTaskValue] = useState<string>(task);

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] =
    useState<boolean>(false);

  const handleTaskClick = () => {
    setIsEditTaskModalOpen(true);
  };

  const handleItemSubmit = () => {
    onItemSubmit(taskIndex, newTaskValue);
    setIsEditTaskModalOpen(false);
  };

  return (
    <>
      <li
        key={task}
        onClick={handleTaskClick}
        className='py-1 hover:rounded-md hover:bg-slate-200 hover:pl-1'
      >
        {task}
      </li>
      {isEditTaskModalOpen && (
        <Modal
          header='Edit task'
          submitText='Finished editing'
          onClose={() => setIsEditTaskModalOpen(false)}
          onSubmit={handleItemSubmit}
        >
          <TextInput
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
            required
          />
        </Modal>
      )}
    </>
  );
});
