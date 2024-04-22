import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { VueDraggableNext } from 'vue-draggable-next'
import { BLUE_THEME, CYAN_THEME } from '@/theme/LightTheme';
import { DARK_BLUE_THEME, DARK_CYAN_THEME } from '@/theme/DarkTheme';

export default createVuetify({
    components: {
        draggable: VueDraggableNext,
      },
    directives,

    theme: {
        defaultTheme: 'BLUE_THEME',
        themes: {
            BLUE_THEME,
            CYAN_THEME,
            DARK_BLUE_THEME,
            DARK_CYAN_THEME
        }
    },
    defaults: {
        VCard: {
            rounded: 'md'
        },
        VTextField: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VTextarea: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VSelect: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VListItem: {
            minHeight: '45px'
        },
        VTooltip: {
            location: 'top'
        }
    }
});
