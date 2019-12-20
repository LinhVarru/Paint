export default class Paint {
  constructor() {
    this.canvas = document.getElementById("board");
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext("2d");
    this.color = "#ff0000";
    this.tool = "pen";
    this.lineWidth = 1;

    this.currentPos = {
      x: 0,
      y: 0
    };
    this.drawing = false;
    // Other tool: Circle, Rectangle, Line
    this.listenEvent();
  }

  getMousePos(evt) {
    var x = evt.clientX - 90;
    var y = evt.clientY - 50;
    return {
      x,
      y
    };
  }

  listenEvent() {
    this.canvas.addEventListener("mousedown", event => this.mouseDown(event));
    this.canvas.addEventListener("mousemove", event => this.mouseMove(event));
    this.canvas.addEventListener("mouseup", event => this.mouseUp(event));
  }

  //Mouse Down
  mouseDown(event) {
    let mousePos = this.getMousePos(event);
    this.drawing = true;
  }

  mouseMove(event) {
    let mousePos = this.getMousePos(event);
    if (this.drawing) {
      this.drawLine(this.currentPos, mousePos);
    }
    this.currentPos = mousePos;
  }

  mouseUp(event) {
    this.drawing = false;
  }
  drawLine(startPos, endPos) {
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(startPos.x, startPos.y);
    this.ctx.lineTo(endPos.x, endPos.y);
    this.ctx.stroke();
  }
}

window.p = new Paint();
