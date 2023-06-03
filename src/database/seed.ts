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

  const JP = await prisma.airport.create({
    data: {
      country: 'Japão',
      countryCode: 'JP',
      city: 'Tóquio',
      code: 'HND',
      airport: 'Haneda',
      latitude: 35.54941063,
      longitude: 149.779849325,
    },
  });

  const BE = await prisma.airport.create({
    data: {
      country: 'Bélgica',
      countryCode: 'BE',
      city: 'Bruxelas',
      code: 'BRU',
      airport: 'Bruxelas',
      latitude: 50.897643138,
      longitude: 4.483887324,
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 5, 14, 14, 30),
      arrivalDate: new Date(2023, 5, 14, 15, 30),
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
      departureDate: new Date(2023, 5, 14, 11, 20),
      arrivalDate: new Date(2023, 5, 14, 12, 30),
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
      departureDate: new Date(2023, 5, 14, 9, 50),
      arrivalDate: new Date(2023, 5, 14, 11),
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
      departureDate: new Date(2023, 5, 29, 11, 40),
      arrivalDate: new Date(2023, 5, 29, 12, 40),
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
      departureDate: new Date(2023, 5, 29, 12, 30),
      arrivalDate: new Date(2023, 5, 29, 13, 40),
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
      departureDate: new Date(2023, 5, 14, 19, 20),
      arrivalDate: new Date(2023, 5, 14, 21, 30),
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
      departureDate: new Date(2023, 5, 29, 13, 50),
      arrivalDate: new Date(2023, 5, 29, 16, 10),
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
      departureDate: new Date(2023, 5, 14, 14, 30),
      arrivalDate: new Date(2023, 5, 15, 23, 30),
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
          id: JP.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 5, 29, 16, 40),
      arrivalDate: new Date(2023, 6, 1, 1, 30),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: JP.id,
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
      departureDate: new Date(2023, 5, 14, 10, 20),
      arrivalDate: new Date(2023, 5, 15, 0, 10),
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
          id: BE.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 5, 29, 23, 20),
      arrivalDate: new Date(2023, 5, 30, 14, 40),
      airplane: {
        connect: {
          id: airplane.id,
        },
      },
      origin: {
        connect: {
          id: BE.id,
        },
      },
      destination: {
        connect: {
          id: SP.id,
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
