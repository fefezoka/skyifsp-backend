import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.flightLeg.deleteMany();
  await prisma.flight.deleteMany();
  await prisma.airplane.deleteMany();
  await prisma.airport.deleteMany();

  const airplane = await prisma.airplane.create({
    data: {
      code: 'boeing-747',
      plane: 'Boeing 747-8',
      seats: 360,
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

  const CN = await prisma.airport.create({
    data: {
      country: 'China',
      countryCode: 'CN',
      city: 'Xangai',
      code: 'PVG',
      airport: 'Xangai Pudong',
      latitude: 31.143458181,
      longitude: 121.809494278,
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
      departureDate: new Date(2023, 6, 1, 14, 30),
      arrivalDate: new Date(2023, 6, 1, 15, 30),
      flightLegs: {
        create: {
          departureDate: new Date(2023, 6, 1, 14, 30),
          arrivalDate: new Date(2023, 6, 1, 15, 30),
          airplaneId: airplane.id,
          originId: SP.id,
          destinationId: RJ.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 1, 16, 30),
      arrivalDate: new Date(2023, 6, 1, 17, 30),
      flightLegs: {
        create: {
          departureDate: new Date(2023, 6, 1, 16, 30),
          arrivalDate: new Date(2023, 6, 1, 17, 30),
          airplaneId: airplane.id,
          originId: SP.id,
          destinationId: RJ.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 1, 11, 20),
      arrivalDate: new Date(2023, 6, 1, 12, 30),
      flightLegs: {
        create: {
          departureDate: new Date(2023, 6, 1, 11, 20),
          arrivalDate: new Date(2023, 6, 1, 12, 30),
          airplaneId: airplane.id,
          originId: SP.id,
          destinationId: RJ.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 1, 9, 50),
      arrivalDate: new Date(2023, 6, 1, 11),
      flightLegs: {
        create: {
          departureDate: new Date(2023, 6, 1, 9, 50),
          arrivalDate: new Date(2023, 6, 1, 11),
          airplaneId: airplane.id,
          originId: SP.id,
          destinationId: RJ.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 29, 11, 40),
      arrivalDate: new Date(2023, 6, 29, 12, 40),
      flightLegs: {
        create: {
          arrivalDate: new Date(2023, 6, 29, 12, 40),
          departureDate: new Date(2023, 6, 29, 11, 40),
          airplaneId: airplane.id,
          originId: RJ.id,
          destinationId: SP.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 29, 12, 30),
      arrivalDate: new Date(2023, 6, 29, 13, 40),
      flightLegs: {
        create: {
          arrivalDate: new Date(2023, 6, 29, 13, 40),
          departureDate: new Date(2023, 6, 29, 12, 30),
          airplaneId: airplane.id,
          originId: RJ.id,
          destinationId: SP.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 1, 19, 20),
      arrivalDate: new Date(2023, 6, 1, 21, 30),
      flightLegs: {
        create: {
          departureDate: new Date(2023, 6, 1, 19, 20),
          arrivalDate: new Date(2023, 6, 1, 21, 30),
          airplaneId: airplane.id,
          originId: SP.id,
          destinationId: BA.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 29, 13, 50),
      arrivalDate: new Date(2023, 6, 29, 16, 10),
      flightLegs: {
        create: {
          departureDate: new Date(2023, 6, 29, 13, 50),
          arrivalDate: new Date(2023, 6, 29, 16, 10),
          airplaneId: airplane.id,
          originId: BA.id,
          destinationId: SP.id,
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 1, 17, 30),
      arrivalDate: new Date(2023, 6, 1, 20, 30),
      flightLegs: {
        createMany: {
          data: [
            {
              departureDate: new Date(2023, 6, 1, 16, 30),
              arrivalDate: new Date(2023, 6, 2, 5, 30),
              airplaneId: airplane.id,
              originId: SP.id,
              destinationId: BE.id,
            },
            {
              departureDate: new Date(2023, 6, 2, 8, 30),
              arrivalDate: new Date(2023, 6, 2, 20, 30),
              airplaneId: airplane.id,
              originId: BE.id,
              destinationId: JP.id,
            },
          ],
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 1, 17, 30),
      arrivalDate: new Date(2023, 6, 2, 20, 30),
      flightLegs: {
        createMany: {
          data: [
            {
              departureDate: new Date(2023, 6, 1, 14, 30),
              arrivalDate: new Date(2023, 6, 2, 2, 30),
              airplaneId: airplane.id,
              originId: SP.id,
              destinationId: BE.id,
            },
            {
              departureDate: new Date(2023, 6, 2, 5, 50),
              arrivalDate: new Date(2023, 6, 2, 14, 30),
              airplaneId: airplane.id,
              originId: BE.id,
              destinationId: CN.id,
            },
            {
              departureDate: new Date(2023, 6, 2, 18),
              arrivalDate: new Date(2023, 6, 2, 20, 30),
              airplaneId: airplane.id,
              originId: CN.id,
              destinationId: JP.id,
            },
          ],
        },
      },
    },
  });

  await prisma.flight.create({
    data: {
      departureDate: new Date(2023, 6, 29, 16, 40),
      arrivalDate: new Date(2023, 6, 31, 1, 30),
      flightLegs: {
        createMany: {
          data: [
            {
              departureDate: new Date(2023, 6, 29, 16, 40),
              arrivalDate: new Date(2023, 6, 30, 5, 30),
              airplaneId: airplane.id,
              originId: JP.id,
              destinationId: BE.id,
            },
            {
              departureDate: new Date(2023, 6, 30, 9, 40),
              arrivalDate: new Date(2023, 6, 31, 1, 30),
              airplaneId: airplane.id,
              originId: BE.id,
              destinationId: SP.id,
            },
          ],
        },
      },
    },
  });

  console.log(200);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
