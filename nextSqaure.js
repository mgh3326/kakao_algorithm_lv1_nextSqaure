function nextSqaure(n){

    //함수를 완성하세요
    if((Math.sqrt(n))===parseInt((Math.sqrt(n))))
    return Math.pow((Math.sqrt(n)+1),2);
    return "no";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));