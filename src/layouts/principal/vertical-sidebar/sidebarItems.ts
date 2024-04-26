import {
  CircleOffIcon,
  BoxMultipleIcon,
  AppsIcon,
  FileTextIcon,
  FileDotsIcon,
  FilesIcon,
  EditIcon,
  BorderAllIcon,
  BorderHorizontalIcon,
  BorderInnerIcon,
  BorderTopIcon,
  BorderVerticalIcon,
  BoxIcon,
  AlertCircleIcon,
  LoginIcon,
  UserPlusIcon,
  RotateIcon,
  CurrencyDollarIcon,
  ChartLineIcon,
  ChartAreaIcon,
  ChartDotsIcon,
  ChartArcsIcon,
  ChartCandleIcon,
  ChartDonut3Icon,
  ChartRadarIcon,
  ShoppingCartIcon,
  ApertureIcon,
  LayoutIcon,
  HelpIcon,
  UserCircleIcon,
  BoxAlignBottomIcon,
  BoxAlignLeftIcon,
  SettingsIcon,
  ZoomCodeIcon,
  StarIcon,
  AwardIcon,
  MoodSmileIcon,
  Message2Icon,
  PointIcon,
  AppWindowIcon,
  MailIcon,
  BasketIcon,
  CalendarIcon,
  BorderStyle2Icon,
  ColumnsIcon,
  RowInsertBottomIcon,
  EyeTableIcon,
  SortAscendingIcon,
  PageBreakIcon,
  FilterIcon,
  BoxModelIcon,
  ServerIcon,
  JumpRopeIcon,
  LayoutKanbanIcon,
} from 'vue-tabler-icons';

export interface menu {
  header?       : string;
  title?        : string;
  icon?         : any;
  to?           : string;
  chip?         : string;
  chipBgColor?  : string;
  chipColor?    : string;
  chipVariant?  : string;
  chipIcon?     : string;
  children?     : menu[];
  disabled?     : boolean;
  type?         : string;
  subCaption?   : string;
}

const sidebarItems: menu[] = [
  { header: 'APLICACIONES' },
  {
    title: 'Dashboard',
    icon: AppsIcon,
    // chip: 'New',
    // chipColor: 'surface',
    chipBgColor: 'secondary',
    to: '/dashboards/principal'
  },
  {
    title: 'Sistemas',
    icon: LayoutIcon,
    to: '/dashboards/prueba1'
  },
  {
    title: 'Usuarios',
    icon: UserCircleIcon,
    to: '/dashboards/prueba1'
  },
  {
    title: 'Roles',
    icon: JumpRopeIcon,
    to: '/dashboards/prueba1'
  },
  {
    title: 'Parametros',
    icon: ServerIcon,
    to: '/dashboards/prueba1'
  },
  { header: 'HERRAMIENTAS' },
  { 
    title: 'Herramientas',
    icon: ChartDonut3Icon,
    to: '/',
    children: [
        {
            title: 'Registro Matriculas',
            icon: ChartDonut3Icon,
            to: '/dashboards/prueba2'
        },
        {
            title: 'Detail',
            icon: ChartDonut3Icon,
            to: '/dashboards/prueba3'
        }
    ]
  },
]

export default sidebarItems;