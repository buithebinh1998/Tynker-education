import TrangChu from '../../container/TrangChu';
import GiaoVien from '../../container/GiaoVien';
import KhoaHoc from '../../container/KhoaHoc';
import GioiThieu from '../../container/GioiThieu';
import LienHe from '../../container/LienHe';
import FromLoginPage from '../../container/FormLoginPage';
import FromRegisterPage from '../../container/FormRegisterPage';

export default [
{
    exact: true,
    path: '/',
    container: TrangChu
},
{
    exact: true,
    path: '/khoahoc',
    container: KhoaHoc
},
{
    exact: true,
    path: '/gioithieu',
    container: GioiThieu
},
{
    exact: true,
    path: '/giaovien',
    container: GiaoVien
},
{
    exact: true,
    path: '/lienhe',
    container: LienHe
},
{
    exact: true,
    path: '/dangnhap',
    container: FromLoginPage
},
{
    exact: true,
    path: '/dangky',
    container: FromRegisterPage 
}
]