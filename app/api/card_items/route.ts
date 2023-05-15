import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/db';

export async function POST(request: Request) {
  const { cardId, text } = await request.json();
  if (!cardId || !text) {
    return NextResponse.json({
      body: 'cardId and text are required',
    }, {
      status: 400
    });
  }

  const card = await prisma.cardItem.create({
    data: {
      text,
      cardId
    },
  });

  return NextResponse.json({ card });
}

export async function PATCH(request: Request) {
  const { id, text } = await request.json();

  if (!id || !text) {
    return NextResponse.json({
      body: 'cardId and text are required',
    }, {
      status: 400
    });
  }

  const cardItem = await prisma.cardItem.update({
    where: { id },
    data: { text }
  });

  return NextResponse.json({ cardItem  });
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

  const card = await prisma.cardItem.delete({
    where: {
      id
    }
  })

  return NextResponse.json({ card });
}