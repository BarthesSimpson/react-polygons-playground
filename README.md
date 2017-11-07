# Polygon Playground

Trying out some declarative SVG polygon manipulation within a flux architecture. I stress-tested this implementation, and performance begins to drop at around 12,000 SVG elements.

## Redux Store

### grid
  - Constructs and stores a tilemap for dragging-and-dropping polygons

### polygon
  - Stores a hashmap of all the polygons in the layout with their attributes and positions

### draft
  - Enables undo and redo functionality by caching the diff each time a change is made to the floorplan

## React Components

### polygons

  - The main canvas where everything takes place

## Shapes

### shelf

  - A generic rectangular shelving unit

### carts

  - A region where customers can pick up and return carts

### checkout

  - A single checkout counter

### food

  - A circular area where prepared food is sold


