const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
//En este archivo lo que hacemos es medir el rendimiento de la aplicacion
// es un archivo que utiliza reportwebvital, lo que hace es que permite
// hacer mas rapida la experiencia de el usuario gracias a metricas como
// son CLS, FID, LCP/