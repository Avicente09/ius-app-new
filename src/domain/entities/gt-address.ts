export const GT_PLACES = {
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
  Suchitepequez: ['Mazatenango'],
  Totonicapan: ['Totonicapan'],
  Zacapa: ['Zacapa'],
} as const;

export type GtDepartment = keyof typeof GT_PLACES;

export type GtTown = typeof GT_PLACES[GtDepartment][number];

export interface GtAddress {
  department: GtDepartment;
  town: GtTown;
  village: string;
  address: string;
  reference?: string;
}
