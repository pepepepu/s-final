function getDeviceType(): string {
    const width = window.innerWidth;
  
    if (width <= 599) {
      return 'smartphone';
    } else if (width > 600 && width <= 800) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }
  
  export default getDeviceType;