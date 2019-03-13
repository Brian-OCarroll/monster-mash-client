import React from 'react';
import './main.css'
import clearBtn from './clearBtn'
export default class Draw extends React.Component {
    constructor() {
        super()
        this.state = {
            painting: false,
            lineWidth: 5,
            lineCap: 'round',
            strokeStyle: 'red',
            history: []
        }
        
        this.mouseX = 0;
        this.mouseY = 0;
        // this.onLoad()
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.draw = this.draw.bind(this);

    }
    componentDidMount() {
        // this.clearBtn()
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 500;
        this.canvas.height = 500;
    }
    drawRect() {
        this.ctx.fillRect(25, 25, 300, 400)
        //could also get rect outline using strokeRec
    }
    changeColor() {
        //get user input from selection
        this.setState({
            strokeStyle: 'green'
        }, () => {this.ctx.strokeStyle=this.state.strokeStyle})
        // this.ctx.strokeStyle = "red"
    }
    //get user input from selection
    changeWidth() {
        // this.ctx.lineWidth = '5'
        this.setState({
            lineWidth: 10
        }, () => {this.ctx.lineWidth = this.state.lineWidth})
    }

    mouseDown() {
        console.log('something')
        this.setState({
            painting: true
        });
        console.log(this.state.painting)
    }
    mouseUp() {
        this.setState({
            painting: false
        });
        this.ctx.beginPath();
    }
    draw(e) {
        if (!this.state.painting) {
            return;
        }
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round'
        this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
    //event listeners ////////

    // mouseHandler() {
    //     canvas.addEventListener('mousedown', () => this.mouseDown());
    //     canvas.addEventListener('mouseup', () => this.mouseUp())
    //     canvas.addEventListener('mousemove', (e) => this.draw(e))
    // }
    
    onLoad() {
        this.mouseHandler();

    }
    render() {
        return(
            <div>
                <canvas className="canvas" onMouseUp={this.mouseUp} onMouseDown={this.mouseDown} onMouseMove={(e)=> this.draw(e)} ref="canvas" width={500} height={500}></canvas>
                <clearBtn ctx={this.ctx} onClick={() => }/>
            </div>
        )
    }
}


