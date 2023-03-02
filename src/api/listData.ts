import { IItem } from 'src/services/types'

export const listData: IItem[] = [
  {
    id: '1',
    companyName: 'Airlines',
    price: 13400,
    transferCountMax: 2,
    flights: [
      {
        id: '11',
        path: 'MOW - HKT',
        code: 'HKG, JNB',
        flightTime: '21ч 15м',
        timePath: '10:45 - 08:00',
        transferCount: 2,
      },
      {
        id: '12',
        path: 'MOW - HKT',
        code: 'HKG',
        flightTime: '13ч 30м',
        timePath: '11:20 - 00:50',
        transferCount: 1,
      },
    ],
  },
  {
    transferCountMax: 3,
    id: '2',
    companyName: 'Airlines',
    price: 12000,
    flights: [
      {
        id: '22',
        path: 'MOW - HKT',
        code: 'HKG, JNB',
        flightTime: '21ч 15м',
        timePath: '10:45 - 08:00',
        transferCount: 2,
      },
      {
        id: '23',
        path: 'MOW - HKT',
        code: 'HKG',
        flightTime: '13ч 30м',
        timePath: '11:20 - 00:50',
        transferCount: 3,
      },
    ],
  },
  {
    transferCountMax: 0,
    id: '3',
    companyName: 'Airlines',
    price: 10000,
    flights: [
      {
        id: '33',
        path: 'MOW - HKT',
        code: 'HKG, JNB',
        flightTime: '21ч 15м',
        timePath: '10:45 - 08:00',
        transferCount: 0,
      },
      {
        id: '34',
        path: 'MOW - HKT',
        code: 'HKG',
        flightTime: '13ч 30м',
        timePath: '11:20 - 00:50',
        transferCount: 0,
      },
    ],
  },
  {
    transferCountMax: 1,
    id: '4',
    companyName: 'Airlines',
    price: 8000,
    flights: [
      {
        id: '44',
        path: 'MOW - HKT',
        code: 'HKG, JNB',
        flightTime: '21ч 15м',
        timePath: '10:45 - 08:00',
        transferCount: 1,
      },
      {
        id: '45',
        path: 'MOW - HKT',
        code: 'HKG',
        flightTime: '13ч 30м',
        timePath: '11:20 - 00:50',
        transferCount: 1,
      },
    ],
  },
  {
    transferCountMax: 2,
    id: '5',
    companyName: 'Airlines',
    price: 16000,
    flights: [
      {
        id: '45',
        path: 'MOW - HKT',
        code: 'HKG, JNB',
        flightTime: '21ч 15м',
        timePath: '10:45 - 08:00',
        transferCount: 2,
      },
      {
        id: '46',
        path: 'MOW - HKT',
        code: 'HKG',
        flightTime: '13ч 30м',
        timePath: '11:20 - 00:50',
        transferCount: 2,
      },
    ],
  },
]
