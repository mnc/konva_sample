import * as React from "react";
import { Image, Layer, Stage, Text } from "react-konva";

export class ImageEditor extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { image: null };
  }

  public componentDidMount() {
    const image = new (window as any).Image();
    image.src = "system_development.png";
    window.console.log(image);
    image.onload = () => {
      this.setState({ image });
    };
  }

  public render() {
    return (
      <Stage height={500} width={1000}>
        <Layer>
          <Image image={this.state.image} />
        </Layer>
        <Layer>
          <Text text={"Sample Text"} draggable={true} />
        </Layer>
      </Stage>
    );
  }
}
