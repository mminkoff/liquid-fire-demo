import { stop, animate, Promise } from "liquid-fire";

export default function swapDown(oldView, insertNewView, opts) {
  stop(oldView);
  return insertNewView().then(function(newView) {
    console.log("swpadown");
    newView.$().css('visibility', 'visible');
    newView.$().css('z-index', '-1');
    return Promise.all([
      animate(oldView, { scale: [0,1] }, opts)
    ]).then(function() {
      newView.$().css('z-index', '');
    });
  });
}
