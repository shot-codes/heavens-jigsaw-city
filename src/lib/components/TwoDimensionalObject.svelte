<script lang="ts">
  import { T } from "@threlte/core";
  import { useTexture } from "@threlte/extras";
  import { Shape, ShapeGeometry, RepeatWrapping } from "three";
  import type { ObjectTwoDimenions } from "$lib/types";
  import Page from "../../routes/+page.svelte";

  export let object: ObjectTwoDimenions;
  export let texturePath: string;

  const map = useTexture(texturePath);

  $: {
    if ($map) {
      $map.wrapS = RepeatWrapping;
      $map.wrapT = RepeatWrapping;
    }
  }

  const shape = new Shape();

  // Move shape to first vertex
  shape.moveTo(object.vertices[0].x, object.vertices[0].y);

  // Construct shape from vertices
  for (let i = 1; i < object.vertices.length; i++) {
    shape.lineTo(object.vertices[i].x, object.vertices[i].y);
  }

  // Add closing line
  shape.lineTo(object.vertices[0].x, object.vertices[0].y);

  const geometry = new ShapeGeometry(shape);
</script>

{#await map then value}
  <T.Mesh {geometry}>
    <T.MeshStandardMaterial map={value} />
  </T.Mesh>
{/await}
