const getPhotos = async () => {
  const response = await fetch(
  "https://api.tumblr.com/v2/blog/truckersjourney.tumblr.com/posts/photo?api_key=NoPjtuc27R1hYfQcCdkJxX8qZ3u3CjDGOTwD5YZgspi9aSCqev");

  return await response.json();
};

const Slideshow = () => {
  const [slides, setSlides] = React.useState();
  const [index, setIndex] = React.useState(0);

  React.useEffect(async () => {
    const data = await getPhotos();
    const photos = data.response.posts.
    filter(post => post.type === "photo").
    map(post => ({
      photo: post.photos[0].original_size.url,
      caption: post.caption }));

    setSlides(photos);
    console.log(photos);
  }, []);
  return /*#__PURE__*/(
    React.createElement("div", { className: "app-container" }, /*#__PURE__*/
    React.createElement("div", { className: "main-preview-container" }, /*#__PURE__*/
    React.createElement("button", {
      className: "btn",
      onClick: () => index > 0 && setIndex(index - 1) }, /*#__PURE__*/

    React.createElement("i", { className: "fas fa-arrow-left" }), " Prev"), /*#__PURE__*/

    React.createElement("div", { className: "current-image" },
    slides && /*#__PURE__*/React.createElement("img", { src: slides[index].photo }),
    slides && /*#__PURE__*/
    React.createElement("div", {
      className: "caption-container",
      dangerouslySetInnerHTML: { __html: slides[index].caption } })), /*#__PURE__*/



    React.createElement("button", {
      className: "btn",
      onClick: () => index < slides.length - 1 && setIndex(index + 1) }, "Next ", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-arrow-right" }))), /*#__PURE__*/


    React.createElement("div", { className: "thumbnail-container" },
    slides &&
    slides.map((r, i) => /*#__PURE__*/
    React.createElement("button", { onClick: () => setIndex(i) }, /*#__PURE__*/
    React.createElement("img", { className: "photo-thumbnails", src: r.photo }))), ";")));






};

ReactDOM.render( /*#__PURE__*/React.createElement(Slideshow, null), document.getElementById("root"));