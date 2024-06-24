const list = document.querySelector(".list");

  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".item");
  const itemWidth = item.offsetWidth;

  function handleClick(direction) {
    // Based on the direction we call scrollBy with the item width we got earlier
    if(direction === "previous") {
      list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  }

// function handleClick(direction) {
//   if (direction === "previous") {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//   } else {
//     currentIndex = (currentIndex + 1) % items.length;
//   }
  
//   const scrollAmount = currentIndex * itemWidth;
//   list.scrollTo({ left: scrollAmount, behavior: "smooth" });
// }

// document.getElementById("nextButton").addEventListener("click", () => handleClick("next"));
// document.getElementById("prevButton").addEventListener("click", () => handleClick("previous"));