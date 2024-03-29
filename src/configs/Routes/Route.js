import React from 'react'

export const routersNotAuth = [
  {
    exact: true,
    path: '/',
    container: React.lazy(() => import('../../container/TrangChu'))
  },
  {
    exact: true,
    path: '/khoahoc',
    container: React.lazy(() => import('../../container/KhoaHoc'))
  },
  {
    exact: true,
    path: '/gioithieu',
    container: React.lazy(() => import('../../container/GioiThieu'))
  },
  {
    exact: true,
    path: '/giaovien',
    container: React.lazy(() => import('../../container/GiaoVien'))
  },
  {
    exact: true,
    path: '/lienhe',
    container: React.lazy(() => import('../../container/LienHe'))
  },
  {
    exact: true,
    path: '/dangnhap',
    container: React.lazy(() => import('../../container/FormLoginPage'))
  },
  {
    exact: true,
    path: '/dangky',
    container: React.lazy(() => import('../../container/FormRegisterPage'))
  },
  {
    exact: true,
    path: '/play',
    container: React.lazy(() => import('../../container/PlayGamePage'))
  }
];

export const routersAuth = [
  {
    exact: true,
    path: '/learn',
    container: React.lazy(() => import('../../container/LearnPage'))
  },
  {
    exact: true,
    path: '/learn/basic/:id',
    container: React.lazy(() => import('../../container/LearnBasic'))
  }
]
