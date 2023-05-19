<script lang="ts">
  import { T } from "@threlte/core";
  import { Shape, ExtrudeGeometry } from "three";
  import type { ObjectThreeDimensions } from "$lib/types";
  import Page from "../../routes/+page.svelte";

  export let building: ObjectThreeDimensions;

  const shape = new Shape();
  const extrudeSettings = {
    steps: 1,
    depth: building.height,
    bevelEnabled: false,
  };

  // Move shape to first vertex
  shape.moveTo(building.vertices[0].x, building.vertices[0].y);

  // Construct shape from vertices
  for (let i = 1; i < building.vertices.length; i++) {
    shape.lineTo(building.vertices[i].x, building.vertices[i].y);
  }

  // Add closing line
  shape.lineTo(building.vertices[0].x, building.vertices[0].y);

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
</script>

<T.Mesh {geometry} castShadow receiveShadow>
  <T.MeshStandardMaterial color="gray" />
</T.Mesh>
