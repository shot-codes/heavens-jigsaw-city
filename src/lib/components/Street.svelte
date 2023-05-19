<script lang="ts">
  import { T } from "@threlte/core";
  import { Shape, ShapeGeometry } from "three";
  import type { ObjectTwoDimenions } from "$lib/types";
  import Page from "../../routes/+page.svelte";

  export let street: ObjectTwoDimenions;

  const shape = new Shape();

  // Move shape to first vertex
  shape.moveTo(street.vertices[0].x, street.vertices[0].y);

  // Construct shape from vertices
  for (let i = 1; i < street.vertices.length; i++) {
    shape.lineTo(street.vertices[i].x, street.vertices[i].y);
  }

  // Add closing line
  shape.lineTo(street.vertices[0].x, street.vertices[0].y);

  const geometry = new ShapeGeometry(shape);
</script>

<T.Mesh {geometry}>
  <T.MeshStandardMaterial color="gray" />
</T.Mesh>
