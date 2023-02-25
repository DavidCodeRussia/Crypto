import React, { Suspense, useEffect } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';

import { initializeApp } from './redux/app-reducer';
import { AppStateType } from './redux/redux-store';

import HeaderContainer from './components/HeaderContainer';
import Login from './components/Login';
import Preloader from './components/common/Preloader';
import Friends from './components/Friends';
import NewsContainer from './components/News';
import SettingsContainer from './components/Settings';

import './App.scss';

type TMapProps = ReturnType<typeof mapStateToProps>;
type TDispatchProps = {
  initializeApp: () => void;
};

const ProfileContainer = React.lazy(() => import('./components/ProfileContainer/index.tsx')); // Ленивая загрузка
const DialogsContainer = React.lazy(() => import('./components/DialogsContainer')); // Lazy download
const UsersContainer = React.lazy(() => import('./components/UsersContainer/index.tsx'));

const { Content, Sider, Footer } = Layout;

const items2: MenuProps['items'] = ['Profile', 'Dialogs', 'Users'].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: <NavLink to={`/${icon.toLowerCase()}`}>{icon}</NavLink>,

    children: null,
  };
});

const App: React.FC<TMapProps & TDispatchProps> = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    props.initializeApp();
  });

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <Layout>
      <HeaderContainer />
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<NewsContainer />} />
                <Route path="/profile/*" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/friends/*" element={<Friends />} />
                <Route path="/users/*" element={<UsersContainer />} />
                <Route path="/news/*" element={<NewsContainer />} />
                <Route path="/settings/*" element={<SettingsContainer />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="*" element={<Navigate to="/Profile" replace />} />
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        Samurai Social Network ©2023 Created by samurai David
      </Footer>
    </Layout>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

export let somethingNew = () => {};

export default connect(mapStateToProps, { initializeApp })(App);
