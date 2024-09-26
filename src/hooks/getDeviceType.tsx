function getDeviceType(): string {
    const width = window.innerWidth;
  
    if (width <= 480) {
      return 'smartphone';
    } else if (width > 480 && width <= 768) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }
  
  export default getDeviceType;