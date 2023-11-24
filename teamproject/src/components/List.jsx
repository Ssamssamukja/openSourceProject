import React from 'react';
import jsonData from './xmlToJson'; // import jsonData

const List = () => {
    return (
        // jsonData를 이용하여 리스트를 렌더링
        <div>
            {jsonData.response.body.items.item.map((item, index) => (
                <div key={index}>
                    <h2>{item.progrmSj._text}</h2> {/* 예시: 프로그램 제목을 렌더링 */}
                    {/* 필요한 항목을 추가로 렌더링하세요 */}
                </div>
            ))}
        </div>
    );
};

export default List;
