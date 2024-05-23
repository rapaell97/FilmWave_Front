export function formatDate(dateString) {
    // Date 객체를 생성
    const date = new Date(dateString);
  
    // 연도, 월, 일, 시간, 분을 추출
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // 원하는 형식으로 포맷팅하여 반환
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

export function formatDate2(dateString) {
    // Date 객체를 생성
    const date = new Date(dateString);
  
    // 연도, 월, 일, 시간, 분을 추출
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
    const day = String(date.getDate()).padStart(2, '0');
  
    // 원하는 형식으로 포맷팅하여 반환
    return `${year}-${month}-${day}`;
  }

export function formatDate3(dateString) {
    // Date 객체를 생성
    const date = new Date(dateString);
  
    // 연도, 월, 일, 시간, 분을 추출
    const year = date.getFullYear();
  
    // 원하는 형식으로 포맷팅하여 반환
    return `${year}`;
  }