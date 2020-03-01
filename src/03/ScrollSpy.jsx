import React, { PureComponent } from 'react';

export default class ScrollSpy extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener('scroll', this.checkPosition);
  }
  setRef(ref) {
    this.ref = ref;
  }

  checkPosition() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }

  render() {
    return (
      <div ref={this.setRef} overflow="scroll">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo repellendus
          tenetur, maiores accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt,
          veniam velit quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit
          amet consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit
          quae quibusdam temporibus! Et magnam natus esse.loremLorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur explicabo repellendus tenetur, maiores
          accusantium reiciendis corrupti officiis dolores ipsum sapiente deserunt, veniam velit q
        </p>
      </div>
    );
  }
}
