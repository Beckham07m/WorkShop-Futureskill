(function ($) {
  var myBlog = [
    {
      title: "Car images",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores!",
      image: "img/card-1.jpg",
      link: "#",
    },
    {
      title: "Sunset images",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores!",
      image: "img/card-2.jpg",
      link: "#",
    },
    {
      title: "Landscape images",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores!",
      image: "img/card-3.jpg",
      link: "#",
    },
    {
      title: "People images",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores!",
      image: "img/card-4.jpg",
      link: "#",
    },
    {
      title: "Desert images",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores!",
      image: "img/card-5.jpg",
      link: "#",
    },
    {
      title: "Mountain images",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores!",
      image: "img/card-6.jpg",
      link: "#",
    },
  ];
  let blog = document.getElementById("MyListBlog");
  let innerHTML = "";
  for (let i = 0; i < myBlog.length; i++) {
    let data = myBlog[i];
    innerHTML += `
        <li class="list-item">
                <div class="thumb">
                     <img class="info-img" src="${data.image}" alt="">
                </div>
                <h3 class="head-color before">${data.title}</h3>
                <p>${data.text}</p>
                <div class="colored-button-div">
                    <a href="${data.link}" class="colored-button">View Home</a>
                </div>
            </li>
            `;
  }
  blog.innerHTML = innerHTML;

  $("#MyListBlog").magnificPopup({
    delegate: "a",
    type: "image",
  });
})(jQuery);
