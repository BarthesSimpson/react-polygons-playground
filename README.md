# Polygon Playground

Trying out some declarative SVG polygon manipulation within a flux architecture

## Redux Store

### grid
  - Constructs and stores a tilemap for dragging-and-dropping polygons

### polygon
  - Stores a hashmap of all the polygons in the layout with their attributes and positions

### draft
  - Enables undo and redo functionality by caching some number of previous polygon states
  - Could be made more memory efficient by just storing the diffs, but good enough for now

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


