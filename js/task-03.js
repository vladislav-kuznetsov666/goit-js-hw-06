const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const galleryItems = images.map((image) => {
  const li = document.createElement("li");
  li.classList.add("gallery-item");
  li.style.margin = "10px";

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.classList.add("gallery-image");
  img.style.maxWidth = "100%";
  img.style.height = "auto";

  li.appendChild(img);
  return li;
});

gallery.style.display = "flex";
gallery.style.listStyle = "none";
gallery.style.padding = "0";

galleryItems.forEach((item) => {
  gallery.appendChild(item);
});
