import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
