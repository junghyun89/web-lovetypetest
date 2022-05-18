'use strict';

const url = 'https://junghyun89.github.io/web-lovetypetest/'

function setShare(){
  let resultImg = document.querySelector('#resultImg');
  let resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '십일간지 연애유형 결과';
  const shareDes = infoList[resultAlt].name;  
  const shareImage = `${url}img/image-resultAlt.png`;
  const shareURL = `${url}page.result-resultAlt.html`;

  Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
          mobileWebUrl: shareURL,
          WebUrl: shareURL
        },
      },
      buttons: [
        {
          title: '결과 확인하기',
          link: {
            mobileWebUrl: shareURL,
            WebUrl: shareURL,
          },
        },
      ]
  });
}



