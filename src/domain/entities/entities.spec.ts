import { GT_PLACES } from './gt-address';
import { ORDER_STATUSES } from './order';
import {
  LOCATIONLESS_TASK_TYPES,
  TASK_DETAILS,
  TASK_STATUSES,
  TASK_TYPES,
} from './task';
import { TRIP_STATUSES } from './trip';

describe('domain:entities', () => {
  test('It should verify the GT_PLACES', () => {
    expect(GT_PLACES).toStrictEqual({
      AltaVerapaz: ['Cobán'],
      BajaVerapaz: ['Salama'],
      Chimaltenango: ['Chimaltenango'],
      Chiquimula: ['Chiquimula'],
      ElProgreso: ['Guastatoya'],
      Escuintla: ['Escuintla'],
      Guatemala: ['Guatemala'],
      Huehuetenango: ['Huehuetenango'],
      Izabal: ['PuertoBarrios'],
      Jalapa: ['Jalapa'],
      Jutiapa: ['Jutiapa'],
      Peten: ['Flores'],
      Quetzaltenango: [
        'Almolonga',
        'Cabrican',
        'Cajola',
        'Cantel',
        'Coatepeque',
        'ColombaCostaCuca',
        'ConcepcianChiquirichapa',
        'ElPalmar',
        'FloresCostaCuca',
        'Genova',
        'Huitan',
        'LaEsperanza',
        'Olintepeque',
        'PalestinaDeLosAltos',
        'Quetzaltenango',
        'Salcaja',
        'SanCarlosSija',
        'SanFranciscoLaUnion',
        'SanJuanOstuncalco',
        'SanMartinSacatepéquez',
        'SanMateo',
        'SanMiguelSiguila',
        'Sibilia',
        'Zunil',
      ],
      Quiche: ['SantaCruzdelQuiche'],
      Retalhuleu: ['Retalhuleu'],
      Sacatepequez: ['AntiguaGuatemala'],
      SanMarcos: ['SanMarcos'],
      SantaRosa: ['Cuilapa'],
      Solola: ['Solola'],
      Suchitepequez: ['Mazatenango', 'PuebloNuevo'],
      Totonicapan: ['Totonicapan'],
      Zacapa: ['Zacapa'],
    });
  });

  test('It should verify the ORDER_STATUSES', () => {
    expect(ORDER_STATUSES).toStrictEqual([
      'draft',
      'placed',
      'inProgress',
      'completed',
      'cancelled',
      'rejected',
    ]);
  });

  test('It should verify the TASK_DETAILS', () => {
    expect(TASK_DETAILS).toStrictEqual(['cost', 'estimatedCost', 'disclaimer']);
  });

  test('It should verify the TASK_STATUSES', () => {
    expect(TASK_STATUSES).toStrictEqual(['pending', 'done']);
  });

  test('It should verify the TASK_TYPES', () => {
    expect(TASK_TYPES).toStrictEqual(['pickUp', 'deliver', 'paymentRetrieval']);
  });

  test('It should verify the TRIP_STATUSES', () => {
    expect(TRIP_STATUSES).toStrictEqual([
      'pending',
      'inProgress',
      'completed',
      'cancelled',
      'rejected',
    ]);
  });

  test('It should verify the LOCATIONLESS_TASK_TYPES', () => {
    expect(LOCATIONLESS_TASK_TYPES).toStrictEqual(['paymentRetrieval']);
  });
});
