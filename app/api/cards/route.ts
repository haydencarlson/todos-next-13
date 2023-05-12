import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/db';
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const { title } = await request.json();
  if (!title) {
    return NextResponse.json({
      body: 'Title is required',
    }, {
      status: 400
    });
  }

  const { userId } = auth();

  const card = await prisma.card.create({
    data: {
      title,
      clerkUserId: userId,
    },
  });

  return NextResponse.json({ card });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({
      body: 'No ID provided',
    }, {
      status: 400
    });
  }

  const { userId } = auth();

  const card = await prisma.card.delete({
    where: {
      id
    }
  })

  return NextResponse.json({ card });
}