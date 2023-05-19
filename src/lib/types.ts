interface Vertex {
  x: number;
  y: number;
}

export interface ObjectThreeDimensions {
  vertices: Array<Vertex>;
  height: number;
}

export interface ObjectTwoDimenions {
  vertices: Array<Vertex>;
}

export interface Config {
  planeSize: Vertex;
  buildings: Array<ObjectThreeDimensions>;
  street: Array<ObjectTwoDimenions>;
  water: Array<ObjectTwoDimenions>;
  park: Array<ObjectTwoDimenions>;
}
