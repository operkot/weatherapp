export const fonts = `
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: 
      local('Montserrat'),
      local('Montserrat-Regular'), 
      url('${process.env.PUBLIC_URL}/fonts/MontserratRegular.woff2') format('woff2'),
      url('${process.env.PUBLIC_URL}/fonts/MontserratRegular.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: 
      local('Montserrat'),
      local('Montserrat-Medium'), 
      url('${process.env.PUBLIC_URL}/fonts/MontserratMedium.woff2') format('woff2'),
      url('${process.env.PUBLIC_URL}/fonts/MontserratMedium.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: 
      local('Montserrat'),
      local('Montserrat-Bold'), 
      url('${process.env.PUBLIC_URL}/fonts/MontserratBold.woff2') format('woff2'),
      url('${process.env.PUBLIC_URL}/fonts/MontserratBold.woff') format('woff');
  }
`
