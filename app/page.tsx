import Card from '@/components/Card';
import { prisma } from '@/prisma/db';
import { SignInButton, auth } from '@clerk/nextjs';

const getCards = async (userId: string | null) => {
  if (!userId) return [];
  const cards = await prisma.card.findMany({
    where: {
      clerkUserId: userId,
    },
  });
  return cards;
};

export default async function Home() {
  const { userId } = auth();
  const cards = await getCards(userId);

  return (
    <main className='flex items-start justify-center gap-10 p-24'>
      {cards.map((card) => (
        <div key={card.id}>
          {/* @ts-expect-error Async Server Component */}
          <Card {...card} />
        </div>
      ))}
      {!userId && (
        <div className='flex flex-col items-center text-lg'>
          You must be signed in to create/manage tasks.
          <SignInButton mode='modal'>
            <button
              type='button'
              className='mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Sign In
            </button>
          </SignInButton>
        </div>
      )}
    </main>
  );
}
