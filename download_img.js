function download(imgUrl, cb) {
    var image = new Image()
    image.onload = function(){
      cb()
    }
    image.onerror = function(){
      cb()
    }
    image.src = imgUrl
  }
  
  
  download(imgs[1], function(){
  
  })
  
  function downloadOnebyOne(imgs, done) {
    
  }
  



  
  /**
   * 两张一组，一组中的两张都下完以后再开始下一组
   * @param  {[type]}   imgs [description]
   * @param  {Function} cb   [description]
   * @return {[type]}        [description]
   */
  function downloadTwoByTwo1(imgs, done) {
    
  }
  




  /**
   * 两张一组，一组中的任何一张下完以后再开始下一组
   * @param  {[type]}   imgs [description]
   * @param  {Function} cb   [description]
   * @return {[type]}        [description]
   */
  function downloadTwoByTwo2(imgs, done) {
    
  }
  
  




  /**
   * 最多同时下载3张
   * @param  {[type]}   imgs [description]
   * @param  {Function} cb   [description]
   * @return {[type]}        [description]
   */
  function downloadMaxThree(imgs, done) {
    
  }