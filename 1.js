// // 1. 
// let uninitialized;
// console.log(uninitialized); 
// 결과값 < undefined >
// 이유 : 값이 할당되지 않은 것을 말한다.

// 2. 
// <let> apple = "사과";
// apple = "바나나";
// 결과값 < let >
// // 이유 : 재할당이 가능하다

// 3. 
// let lotto = [3, 8, 13, 19, 21, 32];
// console.log(lotto[3]); 
// 결과값 < 19 >
// 이유 : 연산법칙에서는 1이 아닌 0부터 시작하기 때문에 배열로 가면 0,1,2,3,4로 번호 및 순서가 매겨진다.

4. 
let mySchedule = "";
console.log(mySchedule || false); // < "할당값" > // 이유 : 
console.log(!!mySchedule); // < true > // 이유 : !는 부정을 의미하는데 두번 부정했기 때문에 true가 나왔다.