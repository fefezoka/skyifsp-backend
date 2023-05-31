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

  const SP = await prisma.airport.create({
    data: {
      country: 'Brasil',
      countryCode: 'BR',
      city: 'São Paulo',
      airport: 'Congonhas',
      code: 'CGH',
      latitude: -23.62333084,
      longitude: -46.65249739,
    },
  });

  const RJ = await prisma.airport.create({
    data: {
      country: 'Brasil',
      countryCode: 'BR',
      city: 'Rio de Janeiro',
      code: 'GIG',
      airport: 'Galeão',
      latitude: -22.805330112,
      longitude: -43.239499042,
    },
  });

  const MG = await prisma.airport.create({
    data: {
      country: 'Brasil',
      countryCode: 'BR',
      city: 'Belo Horizonte',
      code: 'CNF',
      airport: 'Confins',
      latitude: -19.633664132,
      longitude: -43.967996128,
    },
  });

  const BA = await prisma.airport.create({
    data: {
      country: 'Brasil',
      countryCode: 'BR',
      city: 'Salvador',
      code: 'SSA',
      airport: 'Dep. Luis Eduardo Magalhães',
      latitude: -12.911758231,
      longitude: -38.32930307,
    },
  });

  const KR = await prisma.airport.create({
    data: {
      country: 'Córeia do Sul',
      countryCode: 'KR',
      city: 'Seoul',
      code: 'ICN',
      airport: 'Incheon',
      latitude: 37.46037738,
      longitude: 126.441071543,
    },
  });

  const SK = await prisma.airport.create({
    data: {
      country: 'Eslováquia',
      countryCode: 'SK',
      city: 'Bretislava',
      code: 'BTS',
      airport: 'Bratislava',
      latitude: 48.169726558,
      longitude: 17.199604646,
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-02T14:30:00.000Z'),
      arrivalDate: new Date('2023-06-02T21:30:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: SP.id,
        },
      },
      destination: {
        connect: {
          id: RJ.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-02T11:20:00.000Z'),
      arrivalDate: new Date('2023-06-02T12:20:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: SP.id,
        },
      },
      destination: {
        connect: {
          id: RJ.id,
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
      origin: {
        connect: {
          id: SP.id,
        },
      },
      destination: {
        connect: {
          id: MG.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-29T07:30:00.000Z'),
      arrivalDate: new Date('2023-06-29T12:50:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: RJ.id,
        },
      },
      destination: {
        connect: {
          id: SP.id,
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
      origin: {
        connect: {
          id: MG.id,
        },
      },
      destination: {
        connect: {
          id: RJ.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-29T12:30:00.000Z'),
      arrivalDate: new Date('2023-06-29T16:20:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: RJ.id,
        },
      },
      destination: {
        connect: {
          id: SP.id,
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
      origin: {
        connect: {
          id: RJ.id,
        },
      },
      destination: {
        connect: {
          id: MG.id,
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
      origin: {
        connect: {
          id: MG.id,
        },
      },
      destination: {
        connect: {
          id: SP.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-13T14:30:00.000Z'),
      arrivalDate: new Date('2023-06-13T20:20:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: SP.id,
        },
      },
      destination: {
        connect: {
          id: BA.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-29T08:20:00.000Z'),
      arrivalDate: new Date('2023-06-29T15:50:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: BA.id,
        },
      },
      destination: {
        connect: {
          id: SP.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-02T08:20:00.000Z'),
      arrivalDate: new Date('2023-06-04T10:50:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: SP.id,
        },
      },
      destination: {
        connect: {
          id: KR.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-29T08:20:00.000Z'),
      arrivalDate: new Date('2023-06-31T10:50:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: KR.id,
        },
      },
      destination: {
        connect: {
          id: SP.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-02T08:20:00.000Z'),
      arrivalDate: new Date('2023-06-03T10:50:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: KR.id,
        },
      },
      destination: {
        connect: {
          id: SK.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date('2023-06-29T08:20:00.000Z'),
      arrivalDate: new Date('2023-06-30T10:50:00.000Z'),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: SK.id,
        },
      },
      destination: {
        connect: {
          id: KR.id,
        },
      },
    },
  });

  console.log('200');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
