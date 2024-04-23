import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import useModalStore from '@zustand/modal';
import useUserStore from '@zustand/user';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Kakao() {
  const [searchParams] = useSearchParams();
  const { setUser } = useUserStore();
  const { setShowModal, setModalData } = useModalStore();
  const code = searchParams.get('code');
  const axios = useCustomAxios();
  const navigate = useNavigate();

  useEffect(() => {
    if (code !== null) handleLogin(code);
  }, [code]);

  async function handleLogin(code) {
    try {
      const res = await axios.post('users/login/kakao', {
        code,
        redirect_uri: `${window.location.origin}/auth/kakao`,
      });

      setUser({
        _id: res.data.item._id,
        name: res.data.item.name,
        loginType: res.data.item.loginType,
        type: res.data.item.type,
        profile: res.data.item.profileImage,
        token: res.data.item.token,
      });

      setShowModal(true);
      setModalData({
        children: (
          <span>
            로그인이 완료되었습니다. <br />
            메인화면으로 이동합니다.
          </span>
        ),
        button: 1,
        handleOk() {
          navigate('/');
          setShowModal(false);
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Loading />
    </>
  );
}

export default Kakao;
