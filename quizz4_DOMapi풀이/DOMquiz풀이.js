/* DOM api 1~6 문제풀이

[1번문제]
1. 요구사항 확인하기
 : 로딩될 때 해당 텍스트의 글씨(내용) 변경하기

2. 요구사항 바탕으로 인풋 생각하기
 (1) p태그 글씨
 (2) 변경되어 나타날 글씨

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
 (1) p태그를 DOM 요소 받을 변수를 만든다
 (2) 로딩되었을 때 나타날 변경된 글씨를 담을 변수를 만든다
 (3) 로딩시 변경된 글씨를 보여주는 함수를 짠다

4. 단계별 구글링 키워드 생각하기
 (1) 자바스크립트 로딩할때 글자 변경하는 법
 (2) 자바스크립트 텍스트 변경


[2번문제]
1. 요구사항 확인하기
 : 탭을 클릭하면 해당 탭의 배경과 글자색 변경하기

2. 요구사항 바탕으로 인풋 생각하기
 (1) 배경/글씨 색이 변경될 전체 태그 
 (2) 사용자가 클릭한 탭
 (3) 사용자가 클릭하면 변경될 탭의 배경 색
 (4) 사용자가 클릭하면 변경될 탭의 글씨 색

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
 (1) 사용자가 클릭한 탭에 적용할 배경/글씨 색 속성을 만든다.
 (2) 해당 속성을 클릭한 탭에 적용시키는 함수를 세운다.
 (3) 배경/글씨 색이 변경될 최상위 태그 중 클릭된 태그만 해당 함수의 기능을 주는 이벤트를 만들어 적용한다.
 (4) 해당 속성을 전체 태그에게 부여한다.

4. 단계별 구글링 키워드 생각하기
 (1) 자바스크립트 css 속성 동적 변경
 (2) 자바스크립트 선택 요소 css 변경


[3번문제]
1. 요구사항 확인하기


2. 요구사항 바탕으로 인풋 생각하기


3. 인풋 바탕으로 단계별 한글로 함수 설계하기


4. 단계별 구글링 키워드 생각하기


[4번문제]
1. 요구사항 확인하기
 (1) 10자 내의 숫자 제외 문자열을 입력할 수 있도록 하기
 (2) 숫자 입력 시 '숫자가 입력되었습니다' 알림창이 뜨도록 한다.

2. 요구사항 바탕으로 인풋 생각하기


3. 인풋 바탕으로 단계별 한글로 함수 설계하기


4. 단계별 구글링 키워드 생각하기


[5번문제]
1. 요구사항 확인하기
 (1) 사용자가 입력창에 텍스트를 입력하고 [저장] 버튼을 클릭하거나 엔터키를 누르면 해당 내용이 아래 리스트에 추가되어 나타난다.
 (2) 입력창 옆에 있는 [초기화] 버튼을 클릭하면 리스트에 기록된 내용이 삭제된다.

2. 요구사항 바탕으로 인풋 생각하기
 (1) 사용자가 입력한 텍스트
 (2) [저장] 버튼 클릭시 리스트에 사용자가 입력한 텍스트를 보여줄 어떠한 태그(공간..?)


3. 인풋 바탕으로 단계별 한글로 함수 설계하기
 (1) 사용자가 입력한 텍스트 내용을 DOM 요소로 변수를 만든다
 (2) [저장] 버튼을 누르면 리스트에 텍스트 DOM 요소를 추가하는 함수를 만든다
 (3) [저장] 버튼 태그에 해당 함수가 작동하도록 이벤트를 추가한다.
 (4) 사용자가 입력한 내용이 리스트에 누적 추가될 있게 한다. (끝 요소에 추가)
 (5) [초기화] 버튼을 누르면 리스트 안의 내용들이 사라지게 하는reset_list() 함수를 만든다.

4. 단계별 구글링 키워드 생각하기
 (1) 자바스크립트 html li 태그 추가하기
 (2) 자바스크립트 value 초기화 버튼



[6번문제]
1. 요구사항 확인하기
 (1) 사용자가 입력창에 입력하여 리스트에 추가된 텍스트 내용을 수정할 수 있게 한다.
 (2) 삭제 기능도 구현할 수 있게 한다.

2. 요구사항 바탕으로 인풋 생각하기
 (1) 새로운 [수정] 버튼
 (2) 새로운 [삭제] 버튼
 (2) [수정] 버튼 클릭하면 보이게 될 입력창
 (3) 사용자가 수정한 내용을 픽스하는 액션을 취할수 있도록 하는 새로운 [저장] 버튼

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
 (1) 사용자가 수정 액션을 취할수 있도록 하는 [수정] 버튼을 만든다.
 (2) 삭제 액션을 취할수 있도록 하는 [삭제] 버튼을 만든다.
 (3) 사용자가 [수정] 버튼을 클릭하면 새로운 입력창이 나타나는 함수 이벤트를 추가한다.
 (4) 사용자가 수정을 끝낼수 있도록 [저장] 버튼을 추가한다.
 (5) [저장] 버튼을 클릭하면 입력창이 종료되고 수정한 내용이 텍스트 태그로 [수정][삭제] 버튼과 함께 보이도록 한다.
 (6) [삭제] 버튼 클릭시 해당 내용이 삭제되도록 한다.

4. 단계별 구글링 키워드 생각하기
 (1) 자바스크립트 input 값 텍스트로 화면에 출력하기
 (2) 자바스크립트 html 추가하기
*/
