import React from 'react';
import DeleteCardItemButton from './DeleteCardItemButton';
import EditCardItemButton from './EditCardItemButton';

interface CardItemProps {
  id: string;
  text: string;
}

export default function CardItem(props: CardItemProps) {
  const { id, text } = props;

  return (
    <>
      <li
        key={text}
        className='group flex items-center justify-between rounded-md bg-slate-200 p-4'
      >
        <div>{text}</div>
        <div className='flex gap-3'>
          <EditCardItemButton id={id} text={text} />
          <DeleteCardItemButton id={id} />
        </div>
      </li>
    </>
  );
}
