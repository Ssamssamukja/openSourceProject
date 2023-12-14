import axios from 'axios';

export const fetchData = async () => {
  const newEndpoint = 'http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrSearchWordList';
  const numOfRows = 10;
  const pageNo = 1;

  try {
    const response = await axios.get(newEndpoint, {
      params: {
        numOfRows,
        pageNo,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const fetchDetailData = async (progrmRegistNo) => {
  const detailEndpoint = 'http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrPartcptnItem';
  const serviceKey = '3T6ayOcpYREUzEd21Uq5JK7q9%2BIPnxLZDTtVsOa0TZap7zKaNufDN7CDhhOczlthnpPcRnnynrccY3Sc9yPZXQ%3D%3D';

  try {
    const response = await axios.get(detailEndpoint, {
      params: {
        serviceKey,
        progrmRegistNo,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

  /*
   지금 json형식으로 바꿨기 때문에 아래와 같은 데이터를 사용해야함.
   {
  "response": {
    "header": {
      "resultCode": "00",
      "resultMsg": "NORMAL SERVICE."
    },
    "body": {
      "items": {
        "item": [
          {
            "actBeginTm": "6",
            "actEndTm": "23",
            "actPlace": "구글 링크 주소 : https://forms.gle/8wjayJDzb5ACy5MG6",
            "adultPosblAt": "Y",
            "gugunCd": "3500000",
            "nanmmbyNm": "동구자원봉사센터",
            "noticeBgnde": "20231024",
            "noticeEndde": "20231231",
            "progrmBgnde": "20231024",
            "progrmEndde": "20231231",
            "progrmRegistNo": "3052711",
            "progrmSj": "[필독] 인천동구자원봉사센터 소속봉사자 - 휴면 봉사자를 위한 자원봉사자 보수교육(비대면 봉사학습)",
            "progrmSttusSe": "2",
            "sidoCd": "6280000",
            "srvcClCode": "자원봉사교육 > 자원봉사기본교육",
            "url": "https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3052711",
            "yngbgsPosblAt": "Y"
          },
          {
            "actBeginTm": "18",
            "actEndTm": "19",
            "actPlace": "참가자 자택(온라인 참여)",
            "adultPosblAt": "N",
            "gugunCd": "3100000",
            "nanmmbyNm": "서울특별시 노원구",
            "noticeBgnde": "20231011",
            "noticeEndde": "20231225",
            "progrmBgnde": "20231011",
            "progrmEndde": "20231225",
            "progrmRegistNo": "3046211",
            "progrmSj": "[노원구자원봉사센터] 4분기 자원봉사교육 및 활성화 캠페인",
            "progrmSttusSe": "2",
            "sidoCd": "6110000",
            "srvcClCode": "자원봉사교육 > 자원봉사기본교육",
            "url": "https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3046211",
            "yngbgsPosblAt": "Y"
          },
          ...
        ]
      },
      "numOfRows": "10",
      "pageNo": "1",
      "totalCount": "7867"
    }
  }
}

  */