import *  as styles from './AIInfo.style';

import React from 'react'

export default function AIInfo() {
  return (
    <styles.Container>
    <styles.Box>
        <styles.H1>봉사 추천 서비스란?</styles.H1>
        <styles.P>정해진 기간 내에 봉사 시간을 채워야 하는 분들께 적합한 서비스입니다!</styles.P>
        <styles.P>조건에 맞는 봉사 스케쥴을 제시해 줍니다!</styles.P>
    </styles.Box>
    <styles.Box>
    <styles.P>원하는 봉사 지역, 봉사 분야, 봉사 기간, 그리고 총 필요한 봉사 시간을 입력해주세요!</styles.P>
    <styles.P>봉사분야는 하나만 선택도 가능하고, 두 개까지 선택이 가능합니다.</styles.P>
    </styles.Box>
</styles.Container>
  );
}

