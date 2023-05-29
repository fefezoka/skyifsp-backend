import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.flight.deleteMany();
  await prisma.airplane.deleteMany();
  await prisma.airport.deleteMany();

  const airplane = await prisma.airplane.create({
    data: {
      code: 'boeing-747',
      plane: 'Boeing 747',
      seats: 64,
    },
  });

  const airport1 = await prisma.airport.create({
    data: {
      country: 'BR',
      state: 'SP',
      city: 'São Paulo',
      airport: 'Congonhas',
      code: 'CGH',
      latitude: '123',
      longitude: '123',
    },
  });

  const airport2 = await prisma.airport.create({
    data: {
      country: 'BR',
      state: 'RJ',
      city: 'Rio de Janeiro',
      code: 'GIG',
      airport: 'Galeão',
      latitude: '123',
      longitude: '123',
    },
  });

  const airport3 = await prisma.airport.create({
    data: {
      country: 'BR',
      state: 'MG',
      city: 'Belo Horizonte',
      code: 'CNF',
      airport: 'Confins',
      latitude: '123',
      longitude: '123',
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-05-28T14:30:00.000Z'),
      arrivalDate: new Date('2023-05-28T21:30:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      departureAirport: {
        connect: {
          id: airport1.id,
        },
      },
      arrivalAirport: {
        connect: {
          id: airport2.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-05-31T22:30:00.000Z'),
      arrivalDate: new Date('2023-06-01T03:30:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      departureAirport: {
        connect: {
          id: airport1.id,
        },
      },
      arrivalAirport: {
        connect: {
          id: airport3.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-02T07:30:00.000Z'),
      arrivalDate: new Date('2023-06-02T12:50:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      departureAirport: {
        connect: {
          id: airport2.id,
        },
      },
      arrivalAirport: {
        connect: {
          id: airport1.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-15T12:30:00.000Z'),
      arrivalDate: new Date('2023-06-15T16:20:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      departureAirport: {
        connect: {
          id: airport3.id,
        },
      },
      arrivalAirport: {
        connect: {
          id: airport2.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-07-02T12:30:00.000Z'),
      arrivalDate: new Date('2023-07-02T16:20:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      departureAirport: {
        connect: {
          id: airport2.id,
        },
      },
      arrivalAirport: {
        connect: {
          id: airport1.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-12T15:40:00.000Z'),
      arrivalDate: new Date('2023-06-12T18:50:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      departureAirport: {
        connect: {
          id: airport2.id,
        },
      },
      arrivalAirport: {
        connect: {
          id: airport3.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-07-24T21:30:00.000Z'),
      arrivalDate: new Date('2023-07-25T02:20:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      departureAirport: {
        connect: {
          id: airport3.id,
        },
      },
      arrivalAirport: {
        connect: {
          id: airport1.id,
        },
      },
    },
  });

  console.log({
    airplane,
    airport1,
    airport2,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
