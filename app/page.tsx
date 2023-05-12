import Card from '@/components/Card';
import { prisma } from '@/prisma/db';
import { auth } from '@clerk/nextjs';

const getCards = async () => {
  const { userId } = auth();
  const cards = await prisma.card.findMany({
    where: {
      clerkUserId: userId,
    }
  });
  return cards;
};

export default async function Home() {
  const cards = await getCards();

  return (
    <main className='flex items-start justify-center gap-10 p-24'>
      {cards.map((card) => (
        <>
          {/* @ts-expect-error Async Server Component */}
          <Card key={card.id} {...card} />
        </>
      ))}
    </main>
  );
}
