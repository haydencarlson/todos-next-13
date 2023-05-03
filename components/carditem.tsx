import React, { useState, useCallback } from 'react';
import { TextInput } from 'flowbite-react';
import Modal from './modal';
import { BsFillTrashFill } from 'react-icons/bs';

interface CardItemProps {
  task: string;
  taskIndex: number;
  onItemSubmit: (taskIndex: number, newTaskValue: string) => void;
  onItemDelete: (taskIndex: number) => void;
}

export default React.memo(function CardItem(props: CardItemProps) {
  const { task, taskIndex, onItemSubmit, onItemDelete } = props;

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

  const handleItemDelete = () => {
    onItemDelete(taskIndex);
  };

  return (
    <>
      <li
        key={task}
        onClick={handleTaskClick}
        className='group flex items-center justify-between py-1 hover:rounded-md hover:bg-slate-200 pl-1 pr-1'
      >
        <div>{task}</div>
        <button className='hidden group-hover:block' onClick={handleItemDelete}>
          <BsFillTrashFill />
        </button>
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
