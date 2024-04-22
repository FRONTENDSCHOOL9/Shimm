import { useSearchParams } from 'next/navigation'
import {useEffect, useState} from "react"
import axios from "@hooks/useCustomAxios.mjs"
import Loading from '@components/loading/Loading'

const Kakao = () => {
  const [kakaoAccessToken, setKakaoAccessToken] = useState<string>('');
  const {isLoading, setIsLoading} = useState(false);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  // 카카오 로그인 : 토큰 발급
  const fnGetKakaoOauthToken = async () => {
    setIsLoading(true);
    const makeFormData = (params: {[key: string]: string}) => {
      const searchParams = new URLSearchParams()
      Object.keys(params).forEach(key => {
        searchParams.append(key, params[key])
      })

      return searchParams
    }

    try {
      const res = await axios({
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        url: 'https://kauth.kakao.com/oauth/token',
        data: makeFormData({
          grant_type: 'authorization_code',
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
          // redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_LOCAL_URI as string,
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
          code
        })
      })

      Data.set('kakaoLogin', res.data.access_token)
      setKakaoAccessToken(res.data.access_token)
    } catch (err) {
      console.warn(err)
    }
  }

  // 카카오 로그인 : 사용자 정보 받기
  const fnGetKakaoUserInfo = async () => {
    try {
      const res = await axios({
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${kakaoAccessToken}`
        },
        url: "https://kapi.kakao.com/v2/user/me",
      })

      Data.set('userInfo', res.data.kakao_account.profile.nickname)
      fnUserInfoCheck(res.data.id.toString(), res.data.kakao_account.profile.nickname)
    } catch (e) {
      console.log('e : ', e)
    }
  }

  // 유저 조회
  const fnUserInfoCheck = ($kakaoId: string, $nickname: string) => {
    GetApiPath(apiList.userInfoCheck, $kakaoId).then($res => {
      // 기존 유저일 경우 : 로그인
      if ($res === true) {
        fnUserLogin($kakaoId, true)
      } else {
        // 유저가 아닐 경우 : 유저 등록 -> 로그인
        fnAddUserInfo($kakaoId, $nickname)
      }
    })
  }

  // 유저 등록
  const fnAddUserInfo = async ($kakaoId: string, $nickname: string) => {
    await GetApi(apiList.userInfo, {
      kakaoId: $kakaoId,
      userNickname: $nickname
    }).then(res => {
      if (res !== 'FAIL') {
        fnUserLogin($kakaoId, false)
      }
    })
  }

  // 로그인 (토큰 획득)
  const fnUserLogin = async ($nickname: string, $existing: boolean) => {
    await GetApiPath(apiList.userLogin, $nickname).then(res => {
      if (res !== 'FAIL') {
        Data.set('login', res.accessToken)

        // 쿠키 세팅 : 10시간
        setCookie('CRT', res.refreshTokenId, {
          expires: 36000000,
          SameSite: 'Strict'
        })

        sAlert({
          icon: 'success',
          html: `CINEMATE ${$existing ? '로그인' : '회원가입'}이<br>성공적으로 완료 되었습니다.`,
          didClose: () => {
            router.replace('/')
          }
        })
      }
    })
  }

  useEffect(() => {
    if (code !== null) fnGetKakaoOauthToken()
  },[code])

  useEffect(() => {
    if (kakaoAccessToken !== "") fnGetKakaoUserInfo()
  },[kakaoAccessToken])

  return (
    {isLoading && <Loading />}
  )
}

export default Kakao