import Card from '@/components/card';

export default function Page() {
  return (
    <main className='flex items-start justify-center gap-10 p-24'>
      <Card name='To Do' />
      <Card name='In Progress' />
      <Card name='Completed' />
    </main>
  );
}
