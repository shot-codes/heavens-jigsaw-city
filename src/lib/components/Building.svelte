<script lang="ts">
  import { T } from "@threlte/core";
  import { useTexture } from "@threlte/extras";
  import { Shape, ExtrudeGeometry, ShapeGeometry, RepeatWrapping } from "three";
  import type { ObjectThreeDimensions } from "$lib/types";
  import Page from "../../routes/+page.svelte";

  export let building: ObjectThreeDimensions;
  export let texturePath: string;

  const shape = new Shape();
  const extrudeSettings = {
    steps: 1,
    depth: building.height,
    bevelEnabled: false,
  };

  const map = useTexture(texturePath);

  $: {
    if ($map) {
      $map.wrapS = RepeatWrapping;
      $map.wrapT = RepeatWrapping;
    }
  }

  // Move shape to first vertex
  shape.moveTo(building.vertices[0].x, building.vertices[0].y);

  // Construct shape from vertices
  for (let i = 1; i < building.vertices.length; i++) {
    shape.lineTo(building.vertices[i].x, building.vertices[i].y);
  }

  // Add closing line
  shape.lineTo(building.vertices[0].x, building.vertices[0].y);

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  const roofGeometry = new ShapeGeometry(shape);
</script>

{#await map then value}
  <T.Mesh geometry={roofGeometry} position.z={building.height + 0.01}>
    <T.MeshStandardMaterial color="gray" />
  </T.Mesh>
  <T.Mesh {geometry} castShadow receiveShadow>
    <T.MeshStandardMaterial map={value} />
  </T.Mesh>
{/await}
