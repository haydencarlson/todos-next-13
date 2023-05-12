import React from 'react';
import DeleteCardItemButton from './DeleteCardItemButton';

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
        className='group flex items-center justify-between py-1 hover:rounded-md hover:bg-slate-200 pl-1 pr-1'
      >
        <div>{text}</div>
        <DeleteCardItemButton id={id} />
      </li>
    </>
  );
}
