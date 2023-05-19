<script lang="ts">
  import { T } from "@threlte/core";
  import { Shape, ShapeGeometry } from "three";
  import type { ObjectTwoDimenions } from "$lib/types";
  import Page from "../../routes/+page.svelte";

  export let park: ObjectTwoDimenions;

  const shape = new Shape();

  // Move shape to first vertex
  shape.moveTo(park.vertices[0].x, park.vertices[0].y);

  // Construct shape from vertices
  for (let i = 1; i < park.vertices.length; i++) {
    shape.lineTo(park.vertices[i].x, park.vertices[i].y);
  }

  // Add closing line
  shape.lineTo(park.vertices[0].x, park.vertices[0].y);

  const geometry = new ShapeGeometry(shape);
</script>

<T.Mesh {geometry}>
  <T.MeshStandardMaterial color="lightgreen" />
</T.Mesh>
