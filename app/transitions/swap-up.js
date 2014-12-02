import { stop, animate, Promise } from "liquid-fire";

export default function swapUp(oldView, insertNewView, opts) {
  stop(oldView);
  return insertNewView().then(function(newView) {
    return Promise.all([
      animate(newView, { scale: [1,0] }, opts)
    ]);
  });
}

