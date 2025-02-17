// Get head
var head = document.head;

// inject stylesheet
//<link rel="stylesheet" type="text/css" href="https://widget.reviews.co.uk/floating-widget/css/dist.css">

var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "https://widget.reviews.co.uk/floating-widget/css/dist.css";

head.appendChild(link);

// inject script
// <script src="https://widget.reviews.co.uk/rich-snippet-reviews-widgets/dist.js" type="text/javascript"></script>

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://widget.reviews.co.uk/rich-snippet-reviews-widgets/dist.js"

head.appendChild(script);

// get position, store and colour from data-attributes.
var data = document.querySelectorAll("script[data-store]")[0].dataset;

window.onload = function() {
    richSnippetReviewsWidgets({
        store: data.store,
        primaryClr: data.color,
        widgetName: "floating-widget",
        numReviews: 40,
        floatPosition: data.position,
        contentMode: "company",
        hideDates: false
    });
};