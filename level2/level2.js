import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

/*
1. ouput 구상
 (1) 이름, 연락처 입력하고 [예약번호 확인] 버튼 클릭하면 해당하는 예약번호가 나오게 하기

2. input 연상하기
 (1) 사용자가 입력한 이름
 (2) 사용자가 입력한 연락처
 (3) [예약번호 확인] 버튼 클릭하면 예약리스트 값과 사용자가 입력한 이름, 연락처 일치 여부 확인
 (4) 일치할 경우 조회될 해당 고객의 예약번호

3. 함수 설계
 (1) 이름과 연락처를 입력하는 input 값을 가져올 수 있게 한다.
 (2) input에 입력한 이름값과 동일한 name키값을 갖는 객체가 있는지 RESERVATION_LIST 배열에서 찾는다.
 (3) 사용자가 입력한 이름이 RESERVATION_LIST에 없을 경우 '예약되지 않은 고객입니다'라는 알림창을 띄운다. => return NodeUserListInReservationList();
 (4) 입력한 이름 input값과 동일한 name키값이 있을 경우, 해당 객체들을 새로 배열화한다. => [.filter]
 (5) 새로 만든 배열(input값과 name키값이 동일한 객체들을 요소로 갖는 배열)에서 사용자가 입력한 연락처와 동일한 phone키 값을 갖는 객체를 찾는다. => [.find]
 (6) 동일한 phone키값이 없을 경우 '연락처가 다릅니다. 다시 확인해주세요'라는 알림창을 띄운다. => return NodeUserListInReservationList();
 (7) 동일한 phone키값이 있을 경우 해당 객체의 number키값을 찾고 화면에 나타낸다. => $reservation.innerHTML = targetUser.number;

4. 구글링 키워드
 (1) 자바스크립트 배열 객체 특정 값 찾기
 (2) 자바스크립트 객체에서 특정 값 가져오기

*/
