import { convertXmlToJson } from './xmlToJson'; // xmlToJson.js에서 함수 import

const xmlData = `<response>
<header>
<resultCode>00</resultCode>
<resultMsg>NORMAL SERVICE.</resultMsg>
</header>
<body>
<items>
<item>
<actBeginTm>6</actBeginTm>
<actEndTm>23</actEndTm>
<actPlace>구글 링크 주소 : https://forms.gle/8wjayJDzb5ACy5MG6</actPlace>
<adultPosblAt>Y</adultPosblAt>
<gugunCd>3500000</gugunCd>
<nanmmbyNm>동구자원봉사센터</nanmmbyNm>
<noticeBgnde>20231024</noticeBgnde>
<noticeEndde>20231231</noticeEndde>
<progrmBgnde>20231024</progrmBgnde>
<progrmEndde>20231231</progrmEndde>
<progrmRegistNo>3052711</progrmRegistNo>
<progrmSj>[필독] 인천동구자원봉사센터 소속봉사자 - 휴면 봉사자를 위한 자원봉사자 보수교육(비대면 봉사학습)</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6280000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기본교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3052711</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
<item>
<actBeginTm>18</actBeginTm>
<actEndTm>19</actEndTm>
<actPlace>참가자 자택(온라인 참여)</actPlace>
<adultPosblAt>N</adultPosblAt>
<gugunCd>3100000</gugunCd>
<nanmmbyNm>서울특별시 노원구</nanmmbyNm>
<noticeBgnde>20231011</noticeBgnde>
<noticeEndde>20231225</noticeEndde>
<progrmBgnde>20231011</progrmBgnde>
<progrmEndde>20231225</progrmEndde>
<progrmRegistNo>3046211</progrmRegistNo>
<progrmSj>[노원구자원봉사센터] 4분기 자원봉사교육 및 활성화 캠페인</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6110000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기본교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3046211</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
<item>
<actBeginTm>9</actBeginTm>
<actEndTm>10</actEndTm>
<actPlace>보령시자원봉사센터 2층 (보령북로 75)</actPlace>
<adultPosblAt>Y</adultPosblAt>
<gugunCd>4510000</gugunCd>
<nanmmbyNm>충청남도 보령시</nanmmbyNm>
<noticeBgnde>20231005</noticeBgnde>
<noticeEndde>20240104</noticeEndde>
<progrmBgnde>20231005</progrmBgnde>
<progrmEndde>20240104</progrmEndde>
<progrmRegistNo>3043972</progrmRegistNo>
<progrmSj>한땀한땀 전문봉사단(바느질) 모집</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6440000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사전문교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3043972</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
<item>
<actBeginTm>18</actBeginTm>
<actEndTm>20</actEndTm>
<actPlace>유튜브(https://youtu.be/dmbVmldg2GQ)</actPlace>
<adultPosblAt>Y</adultPosblAt>
<gugunCd>3520000</gugunCd>
<nanmmbyNm>연수구자원봉사센터</nanmmbyNm>
<noticeBgnde>20231018</noticeBgnde>
<noticeEndde>20231201</noticeEndde>
<progrmBgnde>20231019</progrmBgnde>
<progrmEndde>20231208</progrmEndde>
<progrmRegistNo>3049914</progrmRegistNo>
<progrmSj>(비대면/온라인교육 및 캠페인) 그린상륙작전V-(슬)기로운.(기)후.(생)활_ 그린숲</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6280000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기타교육.기타교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3049914</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
<item>
<actBeginTm>18</actBeginTm>
<actEndTm>20</actEndTm>
<actPlace>연수구자원봉사센터 유튜브(https://youtu.be/IHr2oRh0ZbU)</actPlace>
<adultPosblAt>Y</adultPosblAt>
<gugunCd>3520000</gugunCd>
<nanmmbyNm>연수구자원봉사센터</nanmmbyNm>
<noticeBgnde>20231102</noticeBgnde>
<noticeEndde>20231201</noticeEndde>
<progrmBgnde>20231102</progrmBgnde>
<progrmEndde>20231210</progrmEndde>
<progrmRegistNo>3057036</progrmRegistNo>
<progrmSj>(비대면/온라인) 그린상륙작전V-(슬)기로운.(기)후.(생)활_탄소는 Bye,그린은 Buy</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6280000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기타교육.기타교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3057036</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
</items>
<numOfRows>5</numOfRows>
<pageNo>1</pageNo>
<totalCount>7987</totalCount>
</body>
</response>`; 


const jsonData = convertXmlToJson(xmlData);

export default jsonData;
