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
<item>
<actBeginTm>0</actBeginTm>
<actEndTm>23</actEndTm>
<actPlace>온라인</actPlace>
<adultPosblAt>N</adultPosblAt>
<gugunCd>5360000</gugunCd>
<nanmmbyNm>경상남도 밀양시</nanmmbyNm>
<noticeBgnde>20231027</noticeBgnde>
<noticeEndde>20231231</noticeEndde>
<progrmBgnde>20231101</progrmBgnde>
<progrmEndde>20231231</progrmEndde>
<progrmRegistNo>3052180</progrmRegistNo>
<progrmSj>청소년 자원봉사 온라인 교육</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6480000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기본교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3052180</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
<item>
<actBeginTm>0</actBeginTm>
<actEndTm>23</actEndTm>
<actPlace>개별장소</actPlace>
<adultPosblAt>N</adultPosblAt>
<gugunCd>5350000</gugunCd>
<nanmmbyNm>경상남도 김해시</nanmmbyNm>
<noticeBgnde>20230904</noticeBgnde>
<noticeEndde>20231203</noticeEndde>
<progrmBgnde>20230904</progrmBgnde>
<progrmEndde>20231203</progrmEndde>
<progrmRegistNo>3030415</progrmRegistNo>
<progrmSj>경상남도자원봉사센터 - 2023 청소년 자원봉사 온라인 교육</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6480000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기본교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3030415</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
<item>
<actBeginTm>14</actBeginTm>
<actEndTm>16</actEndTm>
<actPlace>자원봉사센터 강의실(진남경기장 내 진남스포츠센터 3층)</actPlace>
<adultPosblAt>Y</adultPosblAt>
<gugunCd>4810000</gugunCd>
<nanmmbyNm>전라남도 여수시</nanmmbyNm>
<noticeBgnde>20230901</noticeBgnde>
<noticeEndde>20231129</noticeEndde>
<progrmBgnde>20231018</progrmBgnde>
<progrmEndde>20231129</progrmEndde>
<progrmRegistNo>3036990</progrmRegistNo>
<progrmSj>자원봉사 알고합시다!! 바로온 플로깅 교육과 심폐소생술 교육</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6460000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기본교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3036990</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
<item>
<actBeginTm>6</actBeginTm>
<actEndTm>23</actEndTm>
<actPlace>여수시자원봉사온라인교육장접속(http://cafe.daum.net/yeosuvt)</actPlace>
<adultPosblAt>Y</adultPosblAt>
<gugunCd>4810000</gugunCd>
<nanmmbyNm>전라남도 여수시</nanmmbyNm>
<noticeBgnde>20231120</noticeBgnde>
<noticeEndde>20231231</noticeEndde>
<progrmBgnde>20231120</progrmBgnde>
<progrmEndde>20231231</progrmEndde>
<progrmRegistNo>3064202</progrmRegistNo>
<progrmSj>자원봉사란 무엇인가? 온라인 자원봉사 교육</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6460000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기본교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3064202</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
<item>
<actBeginTm>9</actBeginTm>
<actEndTm>21</actEndTm>
<actPlace>온라인</actPlace>
<adultPosblAt>Y</adultPosblAt>
<gugunCd>4400000</gugunCd>
<nanmmbyNm>제천시종합자원봉사센터</nanmmbyNm>
<noticeBgnde>20231101</noticeBgnde>
<noticeEndde>20231231</noticeEndde>
<progrmBgnde>20231101</progrmBgnde>
<progrmEndde>20231231</progrmEndde>
<progrmRegistNo>3059442</progrmRegistNo>
<progrmSj>온라인자원봉사기초교육1.2</progrmSj>
<progrmSttusSe>2</progrmSttusSe>
<sidoCd>6430000</sidoCd>
<srvcClCode>자원봉사교육 > 자원봉사기본교육</srvcClCode>
<url>https://1365.go.kr/vols/P9210/partcptn/timeCptn.do?type=show&progrmRegistNo=3059442</url>
<yngbgsPosblAt>Y</yngbgsPosblAt>
</item>
</items>
<numOfRows>10</numOfRows>
<pageNo>1</pageNo>
<totalCount>7867</totalCount>
</body>
</response>`; 


const jsonData = convertXmlToJson(xmlData);

export default jsonData;
