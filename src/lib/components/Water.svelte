<script lang="ts">
  import { T } from "@threlte/core";
  import { Shape, ShapeGeometry } from "three";
  import type { ObjectTwoDimenions } from "$lib/types";
  import Page from "../../routes/+page.svelte";

  export let water: ObjectTwoDimenions;

  const shape = new Shape();

  // Move shape to first vertex
  shape.moveTo(water.vertices[0].x, water.vertices[0].y);

  // Construct shape from vertices
  for (let i = 1; i < water.vertices.length; i++) {
    shape.lineTo(water.vertices[i].x, water.vertices[i].y);
  }

  // Add closing line
  shape.lineTo(water.vertices[0].x, water.vertices[0].y);

  const geometry = new ShapeGeometry(shape);
</script>

<T.Mesh {geometry}>
  <T.MeshStandardMaterial color="skyblue" />
</T.Mesh>
