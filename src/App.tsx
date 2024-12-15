import { ConfigProvider } from 'antd';
import AppRoutes from './app-routes';
import theme from './config/theme';

const App = () => {
  return (
    <ConfigProvider theme={theme({ themeValue: 'light' })}>
      <AppRoutes />
    </ConfigProvider>
  );
};
export default App;
