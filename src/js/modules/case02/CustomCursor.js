export default class CustomCursor {
  constructor(modules) {
    this.cursor = document.querySelector('.p-custom-cursor');
    this.cursorDot = document.querySelector('.p-custom-cursor__dot');
    this.cursorDefault = document.querySelector('.p-custom-cursor__default');
    this.cursorHover = document.querySelector('.p-custom-cursor__hover');
    this.target = document.querySelectorAll('.js-cursor-hover');
    this.delay = 8;
    this.isVisible = false;
    this.isEnlarged = false;
    this.endX = ( window.innerWidth / 2 );
    this.endY = ( window.innerHeight / 2 );
    this._x = 0;
    this._y = 0;
    this.on();
  }
  init() {

  }
  on() {
    document.addEventListener('mousemove', (e) => {
      console.log('mousemove');
      this.setCursorPosition(e);
    }, false);

    for (var i = 0; i < this.target.length; i++) {
      this.target[i].addEventListener('mouseover', () => {
        this.isEnlarged = true;
        this.toggleCursolSize();
      })
      this.target[i].addEventListener('mouseout', () => {
        this.isEnlarged = false;
        this.toggleCursolSize();
      })
    }
  }
  toggleCursolSize() {
    if (this.isEnlarged) {
      this.cursorHover.classList.add('is-enlarged');
      this.cursorDefault.classList.add('is-enlarged');
    } else {
      this.cursorHover.classList.remove('is-enlarged');
      this.cursorDefault.classList.remove('is-enlarged');
    }
  }
  setCursorPosition(e) {
    this.endX = e.pageX;
    this.endY = e.pageY;
    this.cursorDot.style.top = this.endY + 'px';
    this.cursorDot.style.left = this.endX + 'px';
    this.setDefaultCursorPosition();
    this.isVisible = true;
    this.cursor.classList.add('is-shown');
  }
  setDefaultCursorPosition() {
    this._x += (this.endX - this._x) / this.delay;
    this._y += (this.endY - this._y) / this.delay;
    this.cursorDefault.style.top = this._y + 'px';
    this.cursorDefault.style.left = this._x + 'px';
    this.cursorHover.style.top = this._y + 'px';
    this.cursorHover.style.left = this._x + 'px';
    console.log(this._y, this._x);
  }
}
