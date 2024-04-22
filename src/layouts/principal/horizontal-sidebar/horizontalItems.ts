import {
    CircleIcon,
    HomeIcon,
    ClipboardIcon,
    AlertCircleIcon,
    SettingsIcon,
    LoginIcon,
    UserPlusIcon,
    RotateIcon,
    ZoomCodeIcon,
    FileDescriptionIcon,
    BorderAllIcon,
    AppsIcon,
    PointIcon,
    BrandAirtableIcon,
} from 'vue-tabler-icons';

export interface menu {
    header?:        string;
    title?:         string;
    icon?:          any;
    to?:            string;
    divider?:       boolean;
    chip?:          string;
    chipColor?:     string;
    chipVariant?:   string;
    chipIcon?:      string;
    children?:      menu[];
    disabled?:      boolean;
    subCaption?:    string;
    class?:         string;
    extraclass?:    string;
    type?:          string;
}

